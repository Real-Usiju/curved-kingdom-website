"use client";

import ProtectedApp from "../components/ProtectedApp";
import RoyalNavigation from "../components/RoyalNavigation";

export default function DominionPage() {
  return (
    <ProtectedApp>
      <main className="min-h-screen bg-black pb-24 text-white">
        <div className="mx-auto min-h-screen w-full max-w-md px-5 py-8">
          <h1 className="text-3xl font-black text-yellow-400">
            Dominion
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            Your Dominion awaits.
          </p>
        </div>

        <RoyalNavigation />
      </main>
    </ProtectedApp>
  );
}