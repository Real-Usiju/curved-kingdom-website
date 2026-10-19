"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import {
  ArrowRight,
  Crown,
  ShieldCheck,
  Sparkles,
  Users,
  RefreshCw,
} from "lucide-react";

import { auth } from "../../lib/firebase";
import {
  getCitizenProfile,
  CitizenProfile,
} from "../services/user";

export default function WelcomePage() {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [kingdom, setKingdom] = useState<CitizenProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [entering, setEntering] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!active) return;

      if (!currentUser) {
        router.replace("/register");
        return;
      }

      try {
        setUser(currentUser);
        setError("");

        const profile = await getCitizenProfile(currentUser.uid);

        if (!active) return;

        if (!profile) {
          router.replace("/identity-gate");
          return;
        }

        setKingdom(profile);
      } catch (err) {
        console.error("Welcome profile error:", err);

        if (active) {
          setError(
            "Your Royal Identity could not be loaded. Please try again."
          );
        }
      } finally {
        if (active) setLoading(false);
      }
    });

    return () => {
      active = false;
      unsubscribe();
    };
  }, [router]);

  const enterKingdom = () => {
    if (entering) return;

    setEntering(true);
    router.push("/palace");
  };

  if (loading) {
    return (
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020914] px-5 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-[#35E8FF]/10 blur-[100px]" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#FFD700]/6 blur-[100px]" />
        </div>

        <div className="relative text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[28px] border border-[#35E8FF]/20 bg-[#071321] shadow-[0_0_60px_rgba(53,232,255,0.08)]">
            <Image
              src="/curved-kingdom-logo.png"
              alt="Curved Kingdom"
              width={76}
              height={76}
              priority
              className="h-17 w-17 object-contain"
            />
          </div>

          <p className="mt-7 text-[11px] font-bold uppercase tracking-[0.32em] text-[#35E8FF]">
            Royal Arrival
          </p>

          <p className="mt-3 text-sm text-[#91A5BA]">
            Preparing your Kingdom...
          </p>

          <div className="mx-auto mt-6 h-1 w-36 overflow-hidden rounded-full bg-white/[0.07]">
            <div className="h-full w-1/2 animate-pulse rounded-full bg-linear-to-r from-[#35E8FF] to-[#FFD700]" />
          </div>
        </div>
      </main>
    );
  }

  if (error || !kingdom) {
    return (
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020914] px-5 py-10 text-white">
        <div className="w-full max-w-md rounded-[28px] border border-white/9 bg-[#071321] p-7 text-center sm:p-9">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#35E8FF]/20 bg-[#35E8FF]/[0.07]">
            <ShieldCheck size={30} className="text-[#35E8FF]" />
          </div>

          <h1 className="mt-6 text-2xl font-black">Royal Identity</h1>

          <p role="alert" className="mt-3 text-sm leading-6 text-[#A7B7C8]">
            {error || "Your Royal Identity could not be found."}
          </p>

          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-7 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#35E8FF] to-[#FFD700] px-5 py-3 font-bold text-[#020914] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35E8FF]"
          >
            <RefreshCw size={17} />
            Try Again
          </button>

          <button
            type="button"
            onClick={() => router.push("/identity-gate")}
            className="mt-3 min-h-11 w-full rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-[#A7B7C8] transition hover:border-[#35E8FF]/30 hover:text-white"
          >
            Return to Royal Identity Setup
          </button>
        </div>
      </main>
    );
  }

  const alias = kingdom.alias || user?.displayName || "Citizen";
  const kingdomName = kingdom.kingdomName || "Your Kingdom";
  const royalRank = kingdom.royalRank || "Royal Citizen";
  const alliance = kingdom.alliance || "No Royal Alliance";
  const motto =
    kingdom.motto || "A new legacy begins with the choices you make.";
  const biography =
    kingdom.biography || "A citizen of Curved Kingdom.";
  const portrait =
    kingdom.profileImage || kingdom.photoURL || user?.photoURL || "";

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020914] px-4 py-8 text-white sm:px-6 sm:py-12">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-105 w-105 -translate-x-1/2 rounded-full bg-[#35E8FF]/[0.07] blur-[130px]" />
        <div className="absolute -bottom-40 -right-28 h-100 w-100 rounded-full bg-[#FFD700]/4.5 blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,#020914_76%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-2xl">
        <header className="mb-7 flex items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <Image
              src="/curved-kingdom-logo.png"
              alt="Curved Kingdom"
              width={46}
              height={46}
              priority
              className="h-11 w-11 shrink-0 object-contain"
            />

            <div className="min-w-0">
              <p className="truncate text-xs font-black uppercase tracking-[0.16em] text-white">
                Curved Kingdom
              </p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#35E8FF]/80">
                Your legacy awaits
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2 rounded-full border border-[#35E8FF]/15 bg-[#35E8FF]/5 px-3 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#35E8FF]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#B8C8D8]">
              Identity ready
            </span>
          </div>
        </header>

        <section className="relative overflow-hidden rounded-[28px] border border-white/9 bg-[#071321]/95 shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:rounded-[34px]">
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#35E8FF] to-[#FFD700]" />

          <div className="relative px-5 pb-7 pt-8 sm:px-10 sm:pb-10 sm:pt-10">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#FFD700]/20 bg-[#FFD700]/5.5 px-3 py-2">
                <Sparkles size={13} className="text-[#FFD700]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.23em] text-[#E6C75B]">
                  Welcome back
                </span>
              </div>

              <h1 className="mt-5 text-3xl font-black leading-tight tracking-tight sm:text-5xl">
                Welcome back,
                <span className="mt-1 block wrap-break-word bg-linear-to-r from-[#35E8FF] via-white to-[#FFD700] bg-clip-text text-transparent">
                  {alias}
                </span>
              </h1>

              <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#9AAEC3]">
                Your journey continues. Your identity is yours, your legacy is
                still unfolding, and your Kingdom awaits.
              </p>
            </div>

            <div className="relative mx-auto mt-9 flex w-full max-w-sm flex-col items-center rounded-[26px] border border-[#35E8FF]/15 bg-linear-to-b from-[#35E8FF]/5.5 to-transparent px-5 pb-6 pt-7">
              <div className="absolute left-5 right-5 top-0 h-px bg-linear-to-r from-transparent via-[#35E8FF]/40 to-transparent" />

              <div className="relative">
                <div className="absolute -inset-2 rounded-full border border-[#FFD700]/20" />
                <div className="absolute -inset-4 rounded-full border border-[#35E8FF]/10" />

                {portrait ? (
                  <img
                    src={portrait}
                    alt={`${alias}'s Royal Portrait`}
                    width={116}
                    height={116}
                    referrerPolicy="no-referrer"
                    className="relative h-28 w-28 rounded-full border-2 border-[#35E8FF]/60 bg-[#020914] object-cover shadow-[0_0_38px_rgba(53,232,255,0.12)] sm:h-32 sm:w-32"
                  />
                ) : (
                  <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-2 border-[#35E8FF]/40 bg-[#020914] sm:h-32 sm:w-32">
                    <Image
                      src="/curved-kingdom-logo.png"
                      alt="Curved Kingdom emblem"
                      width={72}
                      height={72}
                      className="h-16 w-16 object-contain"
                    />
                  </div>
                )}

                <div className="absolute bottom-1 right-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#071321] bg-[#FFD700] text-[#020914]">
                  <ShieldCheck size={16} />
                </div>
              </div>

              <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.25em] text-[#35E8FF]">
                Your Royal Rank
              </p>

              <div className="mt-2 flex items-center justify-center gap-2 text-center">
                <Crown size={19} className="shrink-0 text-[#FFD700]" />
                <h2 className="wrap-break-word text-xl font-black text-[#FFD700] sm:text-2xl">
                  {royalRank}
                </h2>
              </div>

              <p className="mt-2 max-w-full wrap-break-word text-center text-sm font-semibold text-white">
                {kingdomName}
              </p>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#FFD700]/15 bg-[#FFD700]/[0.035] p-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="shrink-0 text-[#FFD700]" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#9AAEC3]">
                    Royal Alliance
                  </p>
                </div>
                <p className="mt-3 wrap-break-word text-sm font-bold text-white">
                  {alliance}
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.07] bg-white/2.5 p-4 sm:col-span-2">
                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="shrink-0 text-[#35E8FF]" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#9AAEC3]">
                    Royal Motto
                  </p>
                </div>
                <p className="mt-3 wrap-break-word text-sm font-semibold leading-6 text-white">
                  {motto}
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
              <div className="flex items-center gap-2">
                <Users size={17} className="text-[#35E8FF]" />
                <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#B8C8D8]">
                  Your Story
                </h2>
              </div>

              <p className="mt-3 break-words text-sm leading-7 text-[#A8B8C9]">
                {biography}
              </p>
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-[#FFD700]/15 bg-[#FFD700]/[0.035] p-4 sm:p-5">
              <ShieldCheck size={20} className="mt-0.5 shrink-0 text-[#FFD700]" />
              <div>
                <p className="text-sm font-bold text-white">
                  Your Kingdom is waiting
                </p>
                <p className="mt-1 text-xs leading-6 text-[#9AAEC3]">
                  Return to your Palace to view your Royal Identity and continue
                  building your legacy in Curved Kingdom.
                </p>
              </div>
            </div>

            <button
              type="button"
              disabled={entering}
              onClick={enterKingdom}
              className="group mt-7 flex min-h-[58px] w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#35E8FF] via-[#8CEEF5] to-[#FFD700] px-5 py-4 text-sm font-black text-[#020914] transition duration-200 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35E8FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071321] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {entering ? (
                <>
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-[#020914]/25 border-t-[#020914]" />
                  Entering Your Palace...
                </>
              ) : (
                <>
                  Enter Your Palace
                  <ArrowRight
                    size={19}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </>
              )}
            </button>

            <p className="mt-5 text-center text-[10px] font-medium leading-6 tracking-wide text-[#71869C]">
              YOUR KINGDOM. YOUR POWER. YOUR LEGACY.
            </p>
          </div>
        </section>

        <footer className="px-4 pb-2 pt-6 text-center">
          <p className="text-xs leading-6 text-[#71869C]">
            Your identity belongs to you. Your future is yours to build.
          </p>
        </footer>
      </div>
    </main>
  );
}