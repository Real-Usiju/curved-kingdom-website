import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

export async function createNotification(
  receiverUid: string,
  senderUid: string,
  senderName: string,
  type: "support" | "discussion",
  proclamationId: string
) {
  try {
    await addDoc(collection(db, "notifications"), {
      receiverUid,
      senderUid,
      senderName,
      type,
      proclamationId,
      read: false,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    console.error("Notification Error:", error);
  }
}