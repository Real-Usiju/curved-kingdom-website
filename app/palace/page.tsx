"use client";

import Image from "next/image";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { GiCrossedSwords } from "react-icons/gi";
import ProtectedApp from "../components/ProtectedApp";
import RoyalNavigation from "../components/RoyalNavigation";
import { Trophy } from "lucide-react";
import { FiUsers } from "react-icons/fi";

import { auth } from "../../lib/firebase";
import {
  CitizenProfile,
  getCitizenProfile,
} from "../services/user";

const royalStandards: Record<string, string> = {
  "Early Citizen": "/royal-standards/early-citizen.jpg",
  Guardian: "/royal-standards/guardian.jpg",
  "Kingdom Lord": "/royal-standards/kingdom-lord.jpg",
  "Celestial Empire":
    "/royal-standards/celestial-empire.jpg",
};

export default function PalacePage() {
  const [citizen, setCitizen] =
    useState<CitizenProfile | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      async (currentUser) => {
        if (!currentUser) {
          setCitizen(null);
          setLoading(false);
          return;
        }

        try {
          const profile = await getCitizenProfile(
            currentUser.uid
          );

          setCitizen(profile);
        } catch (error) {
          console.error(
            "Palace profile error:",
            error
          );
        } finally {
          setLoading(false);
        }
      }
    );

    return () => unsubscribe();
  }, []);

  /* -----------------------------
     LOADING
  ----------------------------- */

  if (loading) {
    return (
      <ProtectedApp>
        <main className="min-h-screen bg-black text-white">
          <div className="flex min-h-screen items-center justify-center">
            <p className="text-sm text-yellow-400">
              Entering the Palace...
            </p>
          </div>

          <RoyalNavigation />
        </main>
      </ProtectedApp>
    );
  }

  /* -----------------------------
     NO PROFILE
  ----------------------------- */

  if (!citizen) {
    return (
      <ProtectedApp>
        <main className="min-h-screen bg-black pb-24 text-white">
          <div className="flex min-h-[80vh] items-center justify-center px-6">
            <p className="text-center text-sm text-gray-500">
              Your Royal Identity could not be found.
            </p>
          </div>

          <RoyalNavigation />
        </main>
      </ProtectedApp>
    );
  }

  /* -----------------------------
     ROYAL STANDARD
  ----------------------------- */

  const royalStandard =
    royalStandards[citizen.royalRank] ??
    "/royal-standards/early-citizen.jpg";

  /* -----------------------------
     IDENTITY
  ----------------------------- */

  const role =
    citizen.royalRank || "Early Citizen";

  const kingdomName =
    citizen.kingdomName ||
    citizen.fullName ||
    "Citizen";

  const profilePhoto =
    citizen.profileImage ||
    citizen.photoURL ||
    "/logo.png";

  /* -----------------------------
     PALACE
  ----------------------------- */

  return (
    <ProtectedApp>
      <main className="min-h-screen bg-black pb-24 text-white">

        {/* =================================
            KINGDOM BANNER
        ================================= */}

        <section className="relative min-h-[350px] w-full overflow-hidden">
          {/* Royal Standard */}

          <Image
            src={royalStandard}
            alt="Kingdom Banner"
            fill
            priority
            className="object-cover"
          />

          {/* Dark Royal Overlay */}

          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/55 to-black/95" />

          {/* Banner Content */}

          <div className="relative z-10 flex min-h-[350px] flex-col px-5 pb-5 pt-4">
           
            {/* ==========================
                IDENTITY
            ========================== */}

            <div className="mt-auto">
{/* Profile Photo */}

<div className="mb-3">
  <div className="h-20 w-20 overflow-hidden rounded-full border-2 border-yellow-400/70 bg-black shadow-[0_0_25px_rgba(234,179,8,.25)]">
    <img
      src={profilePhoto}
      alt={kingdomName}
      width={80}
      height={80}
      className="h-full w-full object-cover"
    />
  </div>
</div>

{/* Royal Role */}

<p className="text-xs font-bold uppercase tracking-[3px] text-yellow-400">
  {role}
</p>

{/* Kingdom Name */}

<h1 className="mt-0.5 text-[28px] font-black tracking-tight text-white">
  {kingdomName}
</h1>

{/* Alias */}

{citizen.alias && (
  <p className="mt-1 text-base font-medium italic text-gray-300">
    {citizen.alias}
  </p>
)}

{/* Motto */}

{citizen.motto && (
  <p className="mt-2 max-w-xs text-sm leading-5 text-gray-300">
    {citizen.motto}
  </p>
)}
              
              {/* ==========================
                  POWER / CITIZENS / GLORY
              ========================== */}

              <div className="mt-7 grid grid-cols-3 border-t border-yellow-400/20 pt-5">

                {/* POWER */}

                <div className="flex flex-col items-center text-center">

                  <GiCrossedSwords
                    size={22}
                    className="text-yellow-400"
                  />

                  <p className="mt-1 text-lg font-black text-white">
                    {citizen.power}
                  </p>

                  <p className="mt-0.5 text-[8px] font-semibold uppercase tracking-[1.5px] text-gray-500">
                    Power
                  </p>

                </div>

                {/* CITIZENS */}

                <div className="flex flex-col items-center border-l border-yellow-400/10 text-center">

                  <FiUsers
                    size={18}
                    strokeWidth={1.8}
                    className="text-yellow-400"
                  />

                  <p className="mt-1 text-lg font-black text-white">
                    {citizen.citizens}
                  </p>

                  <p className="mt-0.5 text-[8px] font-semibold uppercase tracking-[1.5px] text-gray-500">
                    Citizens
                  </p>

                </div>

                {/* GLORY */}

                <div className="flex flex-col items-center border-l border-yellow-400/10 text-center">

                  <Trophy
                    size={18}
                    strokeWidth={1.8}
                    className="text-yellow-400"
                  />

                  <p className="mt-1 text-lg font-black text-white">
                    {citizen.glory}
                  </p>

                  <p className="mt-0.5 text-[8px] font-semibold uppercase tracking-[1.5px] text-gray-500">
                    Glory
                  </p>

                </div>

              </div>

            </div>
          </div>
        </section>

        {/* =================================
            PALACE CONTENT
            WE WILL BUILD THIS NEXT
        ================================= */}

        <section className="mx-auto max-w-md px-6 py-8">

          <div className="rounded-2xl border border-yellow-500/10 bg-white/[0.025] p-6">

            <p className="text-xs font-semibold uppercase tracking-[3px] text-yellow-400">
              The Palace
            </p>

            <p className="mt-3 text-sm leading-7 text-gray-500">
              Your Royal Identity continues below.
            </p>

          </div>

        </section>

        {/* Bottom Navigation */}

        <RoyalNavigation />

      </main>
    </ProtectedApp>
  );
}