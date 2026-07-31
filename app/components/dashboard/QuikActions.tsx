import Link from "next/link";

export default function QuickActions() {
  return (
    <div className="bg-zinc-900 rounded-2xl p-6 border border-yellow-500/20">

      <h2 className="text-xl font-bold text-yellow-400 mb-5">
        Quick Actions
      </h2>

      <div className="grid gap-4">

        <Link
          href="/dashboard/profile"
          className="bg-yellow-500 text-black text-center py-3 rounded-xl font-semibold"
        >
          Edit Profile
        </Link>

        <Link
          href="/dashboard/settings"
          className="bg-zinc-800 text-white text-center py-3 rounded-xl"
        >
          Settings
        </Link>

        <Link
          href="/early-citizen"
          className="bg-zinc-800 text-white text-center py-3 rounded-xl"
        >
          View Early Citizen
        </Link>

      </div>

    </div>
  );
}