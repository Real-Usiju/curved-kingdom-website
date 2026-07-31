"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

import { getKingdomProfile } from "@/lib/kingdom";
import { KingdomProfile } from "@/types/kingdom";


export default function KingdomPage() {
  const params = useParams();

  const uid = params.uid as string;

  const [kingdom, setKingdom] =
    useState<KingdomProfile | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadKingdom() {
      const profile = await getKingdomProfile(uid);

      setKingdom(profile);

      setLoading(false);
    }

    if (uid) {
      loadKingdom();
    }
  }, [uid]);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#081221] flex items-center justify-center">
        <h1 className="text-3xl font-bold text-yellow-300">
          Loading Kingdom...
        </h1>
      </main>
    );
  }

  if (!kingdom) {
    return (
      <main className="min-h-screen bg-[#081221] flex flex-col items-center justify-center">

        <h1 className="text-4xl font-bold text-yellow-400">
          Kingdom Not Found
        </h1>

        <Link
          href="/dashboard"
          className="mt-8 rounded-xl bg-yellow-500 px-6 py-3 font-bold text-black"
        >
          Return to Kingdom Feed
        </Link>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#081221]">

      

      

    </main>
  );
}