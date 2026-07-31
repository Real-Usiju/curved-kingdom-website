"use client";

type ProfileCardProps = {
  email?: string;
};

export default function ProfileCard({ email }: ProfileCardProps) {
  return (
    <div className="bg-zinc-900 rounded-2xl p-6 border border-yellow-500/20">

      <div className="flex items-center gap-4">

        <div className="w-20 h-20 rounded-full bg-yellow-500 flex items-center justify-center text-3xl font-bold text-black">
          👤
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">
            Early Citizen
          </h2>

          <p className="text-gray-400">
            {email}
          </p>

          <span className="inline-block mt-2 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
            👑 Founder
          </span>
        </div>

      </div>

    </div>
  );
}