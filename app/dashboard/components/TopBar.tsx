"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Bell } from "lucide-react";
import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";



type TopBarProps = {
  profileImage: string;
};

export default function TopBar({ profileImage }: TopBarProps) {
  const [notificationCount, setNotificationCount] = useState(0);

useEffect(() => {
  if (!auth.currentUser) return;

  const q = query(
    collection(db, "notifications"),
    where("receiverUid", "==", auth.currentUser.uid),
    where("read", "==", false)
  );

  const unsubscribe = onSnapshot(q, (snapshot) => {
    setNotificationCount(snapshot.size);
  });

  return () => unsubscribe();
}, []);

const searchKingdoms = async (value: string) => {
  setSearch(value);

  if (!value.trim()) {
    setResults([]);
    return;
  }

  setLoadingSearch(true);

  try {
    const snapshot = await getDocs(collection(db, "users"));

    const filtered = snapshot.docs
      .map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      .filter((user: any) => {
        const text = value.toLowerCase();

        return (
          user.fullName?.toLowerCase().includes(text) ||
          user.kingdomName?.toLowerCase().includes(text) ||
          user.alias?.toLowerCase().includes(text)
        );
      });

    setResults(filtered);
  } finally {
    setLoadingSearch(false);
  }
};
const [search, setSearch] = useState("");
const [results, setResults] = useState<any[]>([]);
const [loadingSearch, setLoadingSearch] = useState(false);
  return (
    <header className="flex items-center justify-between mb-8">

      {/* Logo */}
      <Image
        src="/logo.png"
        alt="Curved Kingdom"
        width={70}
        height={70}
        priority
      />

      {/* Search */}
  {/* Search */}
<div className="relative flex-1 mx-5">

  <input
    type="text"
    value={search}
    onChange={(e) => searchKingdoms(e.target.value)}
    placeholder="🔍 Seek Citizens..."
    className="
      w-full
      bg-white/5
      backdrop-blur-xl
      border
      border-yellow-500/30
      rounded-full
      px-5
      py-3
      text-white
      placeholder:text-gray-400
      outline-none
      focus:border-yellow-400
    "
  />

  {search.length > 0 && (
    <div
      className="
        absolute
        left-0
        right-0
        top-full
        mt-3
        z-50
        overflow-hidden
        rounded-3xl
        border
        border-yellow-500/20
        bg-[#0b1422]
        shadow-2xl
      "
    >
      {loadingSearch ? (
        <div className="p-6 text-center text-gray-400">
          Searching...
        </div>
      ) : results.length === 0 ? (
        <div className="p-6 text-center text-gray-400">
          No Kingdom Found
        </div>
      ) : (
        results.map((user: any) => (
          <Link
            key={user.id}
            href={`/kingdom/${user.uid}`}
            className="flex items-center gap-4 border-b border-yellow-500/10 p-4 hover:bg-yellow-500/10"
          >
            <Image
              src={user.profileImage || "/logo.png"}
              alt={user.kingdomName || user.fullName}
              width={50}
              height={50}
              className="rounded-full border-2 border-yellow-400"
            />

            <div>
              <h3 className="font-bold text-yellow-300">
                👑 {user.kingdomName || user.fullName}
              </h3>

              <p className="text-sm text-gray-400">
                {user.royalRank || "Early Citizen"}
              </p>

              <p className="text-xs text-gray-500">
                {user.alias || user.motto || ""}
              </p>
            </div>
          </Link>
        ))
      )}
    </div>
  )}

</div>
      {/* Profile */}
      <div className="flex items-center gap-4">

  {/* Notification Bell */}
  <Link href="/notifications">
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="relative cursor-pointer"
    >
      <Bell
        size={28}
        className="text-white hover:text-yellow-400 transition"
      />

     {notificationCount > 0 && (
  <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
    {notificationCount}
  </span>
)}
    </motion.div>
  </Link>

  {/* Profile */}
  <Link href="/profile">
    <motion.div
      whileHover={{ scale: 1.08 }}
      className="overflow-hidden rounded-full border-2 border-yellow-400 shadow-lg"
    >
      <Image
        src={profileImage || "/logo.png"}
        alt="Profile"
        width={56}
        height={56}
        className="h-14 w-14 object-cover"
      />
    </motion.div>
  </Link>

</div>

    </header>
  );
}