"use client";

import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
  writeBatch,
  doc,
} from "firebase/firestore";
type Notification = {
  id: string;
  senderName: string;
  type: "support" | "discussion";
  read: boolean;
  createdAt?: any;
};

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    if (!auth.currentUser) return;

    const q = query(
      collection(db, "notifications"),
      where("receiverUid", "==", auth.currentUser.uid),
      orderBy("createdAt", "desc")
    );

const unsubscribe = onSnapshot(q, async (snapshot) => {
  const list = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Notification[];

  const batch = writeBatch(db);

  snapshot.docs.forEach((notificationDoc) => {
    if (!notificationDoc.data().read) {
      batch.update(
        doc(db, "notifications", notificationDoc.id),
        {
          read: true,
        }
      );
    }
  });

  await batch.commit();

  setNotifications(list);
});

return () => unsubscribe();
  }, []);

  return (
    <main className="min-h-screen bg-[#081221] p-6 text-white">
      <h1 className="mb-8 text-4xl font-bold text-yellow-400">
        🔔 Royal Notifications
      </h1>

      {notifications.length === 0 ? (
        <div className="rounded-2xl border border-yellow-500/20 bg-[#0b1422] p-8 text-center text-gray-400">
          No notifications yet.
        </div>
      ) : (
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`rounded-2xl border p-5 ${
                notification.read
                  ? "border-gray-700 bg-[#0b1422]"
                  : "border-yellow-500 bg-yellow-500/10"
              }`}
            >
              <p className="text-lg">
                {notification.type === "support"
                  ? `❤️ ${notification.senderName} supported your proclamation.`
                  : `💬 ${notification.senderName} commented on your proclamation.`}
              </p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}