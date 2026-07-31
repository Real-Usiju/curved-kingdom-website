"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "@/lib/firebase";
import { getKingdomProfile } from "@/lib/kingdom";
import { KingdomProfile } from "@/types/kingdom";

export function useKingdom() {
  const [kingdom, setKingdom] = useState<KingdomProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setKingdom(null);
        setLoading(false);
        return;
      }

      const profile = await getKingdomProfile(user.uid);

      setKingdom(profile);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return {
    kingdom,
    loading,
  };
}