"use client";

import ProtectedApp from "../components/ProtectedApp";
import RoyalNavigation from "../components/RoyalNavigation";

export default function KingdomPage() {
  return (
    <ProtectedApp>
      <main className="min-h-screen bg-black pb-24 text-white">
        <div className="mx-auto min-h-screen w-full max-w-md px-5 py-8">
          <h1 className="text-3xl font-black text-yellow-400">
            Kingdom
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            The Kingdom awaits.
          </p>
        </div>

        <RoyalNavigation />
      </main>
    </ProtectedApp>
  );
}