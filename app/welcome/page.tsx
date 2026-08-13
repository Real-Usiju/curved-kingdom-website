"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { onAuthStateChanged, User } from "firebase/auth";

import { auth } from "../../lib/firebase";
import { getCitizenProfile, CitizenProfile } from "../services/user";

export default function WelcomePage() {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [kingdom, setKingdom] =
    useState<CitizenProfile | null>(null);

  const [loading, setLoading] = useState(true);
  const [entering, setEntering] = useState(false);
  const [error, setError] = useState("");

  /*
   * --------------------------------------------------
   * LOAD CITIZEN
   * --------------------------------------------------
   */

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      async (currentUser) => {
        if (!currentUser) {
          router.replace("/register");
          return;
        }

        try {
          setUser(currentUser);

          const profile =
            await getCitizenProfile(
              currentUser.uid
            );

          if (!profile) {
            router.replace("/identity-gate");
            return;
          }

          setKingdom(profile);
        } catch (error) {
          console.error(
            "Welcome profile error:",
            error
          );

          setError(
            "The Kingdom could not load your Royal Identity."
          );
        } finally {
          setLoading(false);
        }
      }
    );

    return () => unsubscribe();
  }, [router]);

  /*
   * --------------------------------------------------
   * ENTER KINGDOM
   * --------------------------------------------------
   */

  const enterKingdom = () => {
  setEntering(true);

  router.push("/palace");
};

  /*
   * --------------------------------------------------
   * LOADING
   * --------------------------------------------------
   */

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black px-5 text-white">
        <div className="text-center">

          <div className="flex justify-center">
            <Image
              src="/curved-kingdom-logo.png"
              alt="Curved Kingdom"
              width={75}
              height={75}
              priority
            />
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[5px] text-yellow-400">
            Royal Arrival
          </p>

          <p className="mt-3 text-sm text-gray-500">
            Preparing your Kingdom...
          </p>

        </div>
      </main>
    );
  }

  /*
   * --------------------------------------------------
   * ERROR
   * --------------------------------------------------
   */

  if (error || !kingdom) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black px-5 text-white">
        <div className="w-full max-w-md rounded-3xl border border-red-500/20 bg-[#0c0c0c] p-8 text-center">

          <p className="text-sm text-red-400">
            {error ||
              "Your Royal Identity could not be found."}
          </p>

          <button
            type="button"
            onClick={() =>
              router.push("/identity-gate")
            }
            className="mt-6 rounded-xl bg-yellow-400 px-6 py-3 font-bold text-black"
          >
            RETURN TO IDENTITY GATE
          </button>

        </div>
      </main>
    );
  }

  /*
   * --------------------------------------------------
   * ROYAL DATA
   * --------------------------------------------------
   */

  const alias =
    kingdom.alias ||
    user?.displayName ||
    "Citizen";

  const kingdomName =
    kingdom.kingdomName ||
    "Your Kingdom";

  const royalRank =
    kingdom.royalRank ||
    "Royal Citizen";

  const alliance =
    kingdom.alliance ||
    "No Royal Alliance";

  const motto =
    kingdom.motto ||
    "Your Kingdom has a story waiting to be written.";

  const biography =
    kingdom.biography ||
    "A citizen of Curved Kingdom.";

  const portrait =
    kingdom.profileImage ||
    user?.photoURL ||
    "";

  /*
   * --------------------------------------------------
   * WELCOME SCREEN
   * --------------------------------------------------
   */

  return (
    <main className="min-h-screen bg-black px-5 py-10 text-white sm:py-16">

      <div className="mx-auto w-full max-w-lg">

        <div className="relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#0c0c0c] p-7 shadow-[0_0_80px_rgba(234,179,8,.12)] sm:p-10">

          {/* Royal Glow */}

          <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl" />

          {/* Logo */}

          <div className="relative flex justify-center">

            <Image
              src="/curved-kingdom-logo.png"
              alt="Curved Kingdom"
              width={72}
              height={72}
              priority
            />

          </div>

          {/* Heading */}

          <div className="relative mt-7 text-center">

            <p className="text-xs font-semibold uppercase tracking-[5px] text-yellow-400">
              Welcome Back
            </p>

            <h1 className="mt-4 text-3xl font-black sm:text-4xl">
              Welcome back, {alias}.
            </h1>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              Your Kingdom has been waiting
              for you.
            </p>

          </div>

          {/* Royal Portrait */}

          <div className="relative mt-8 flex justify-center">

            {portrait ? (
              <img
                src={portrait}
                alt={alias}
                width={110}
                height={110}
                className="h-28 w-28 rounded-full border-2 border-yellow-400/50 object-cover shadow-[0_0_40px_rgba(234,179,8,.18)]"
              />
            ) : (
              <div className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-yellow-400/30 bg-yellow-400/10">

                <Image
                  src="/curved-kingdom-logo.png"
                  alt="Curved Kingdom"
                  width={55}
                  height={55}
                />

              </div>
            )}

          </div>

          {/* Royal Position */}

          <div className="relative mt-6 text-center">

            <p className="text-xl font-bold text-yellow-400">
              {royalRank}
            </p>

            <p className="mt-2 text-base font-semibold text-white">
              {kingdomName}
            </p>

          </div>

          {/* Royal Identity */}

          <div className="relative mt-8 space-y-4">

            {/* Alliance */}

            <div className="rounded-2xl border border-yellow-500/10 bg-yellow-400/5 p-5">

              <p className="text-xs uppercase tracking-[3px] text-gray-600">
                Royal Alliance
              </p>

              <p className="mt-2 text-sm font-bold text-white">
                {alliance}
              </p>

            </div>

            {/* Motto */}

            <div className="rounded-2xl border border-yellow-500/10 bg-white/[0.035] p-5">

              <p className="text-xs uppercase tracking-[3px] text-gray-600">
                Royal Motto
              </p>

              <p className="mt-2 text-sm font-semibold leading-6 text-white">
                {motto}
              </p>

            </div>

            {/* Biography */}

            <div className="rounded-2xl border border-yellow-500/10 bg-white/[0.035] p-5">

              <p className="text-xs uppercase tracking-[3px] text-gray-600">
                Royal Biography
              </p>

              <p className="mt-2 text-sm leading-7 text-gray-300">
                {biography}
              </p>

            </div>

          </div>

          {/* Kingdom Message */}

          <div className="relative mt-8 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6 text-center">

            <p className="text-sm leading-7 text-gray-300">
              Your citizens await your return.
              Your throne remains yours, and
              your Kingdom continues to rise.
            </p>

          </div>

          {/* Enter Kingdom */}

          <button
            type="button"
            disabled={entering}
            onClick={enterKingdom}
            className="relative mt-8 w-full rounded-2xl bg-yellow-400 py-4 text-base font-bold text-black transition hover:scale-[1.02] hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {entering
              ? "Entering Your Kingdom..."
              : "ENTER YOUR KINGDOM"}
          </button>

          {/* Footer */}

          <p className="relative mt-6 text-center text-xs leading-6 text-gray-600">
            Your identity belongs to you.
            Your Kingdom awaits your command.
          </p>

        </div>

      </div>

    </main>
  );
}