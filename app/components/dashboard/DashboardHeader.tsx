"use client";

type DashboardHeaderProps = {
  email?: string;
};

export default function DashboardHeader({
  email,
}: DashboardHeaderProps) {
  return (
    <header className="flex items-center justify-between mb-8">

      <div>
        <h1 className="text-4xl font-bold text-yellow-400">
          Welcome Back 👑
        </h1>

        <p className="text-gray-400 mt-2">
          {email}
        </p>
      </div>

      <div className="bg-yellow-500 text-black px-5 py-2 rounded-full font-bold">
        Founder
      </div>

    </header>
  );
}