"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-zinc-950 border-r border-yellow-500/20 p-6">

      <h1 className="text-3xl font-bold text-yellow-400">
        👑 Curved Kingdom
      </h1>

      <p className="text-gray-400 text-sm mt-2">
        Early Citizen Portal
      </p>

      <nav className="mt-10 space-y-3">

        <Link
          href="/dashboard"
          className="block rounded-xl bg-yellow-500 text-black px-4 py-3 font-semibold"
        >
          Dashboard
        </Link>

        <Link
          href="/dashboard/profile"
          className="block rounded-xl hover:bg-zinc-800 px-4 py-3"
        >
          Profile
        </Link>

        <Link
          href="/dashboard/settings"
          className="block rounded-xl hover:bg-zinc-800 px-4 py-3"
        >
          Settings
        </Link>

        <Link
          href="/dashboard/notifications"
          className="block rounded-xl hover:bg-zinc-800 px-4 py-3"
        >
          Notifications
        </Link>

      </nav>

    </aside>
  );
}