"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, type User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { BellRing, CalendarClock } from "lucide-react";

import { auth, db } from "../../lib/firebase";
import { RoyalLoader } from "../components/RoyalLoader";
import RoyalNavigation from "../components/RoyalNavigation";

type CitizenProfile = {
  fullName?: string;
  kingdomName?: string;
  alias?: string;
  royalRank?: string;
  profileImage?: string;
  photoURL?: string;
};

function getGreeting() {
  const hour = new Date().getHours();

  if (hour < 5) return "Good night";
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  if (hour < 21) return "Good evening";
  return "Good night";
}

function getRoyalTitle(role?: string) {
  const normalized = role?.trim().toLowerCase();

  if (normalized === "king") return "King";
  if (normalized === "queen") return "Queen";

  return "";
}

export default function KingdomPage() {
  const router = useRouter();

  const [checkingAuth, setCheckingAuth] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [citizen, setCitizen] = useState<CitizenProfile | null>(null);
  const [greeting, setGreeting] = useState("Good day");
  const [showGreeting, setShowGreeting] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showName, setShowName] = useState(false);
  const [profileImageFailed, setProfileImageFailed] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);

  useEffect(() => {
    setGreeting(getGreeting());

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        router.replace("/login");
        return;
      }

      setUser(currentUser);

      try {
        const profileSnapshot = await getDoc(
          doc(db, "users", currentUser.uid)
        );

        if (profileSnapshot.exists()) {
          setCitizen(profileSnapshot.data() as CitizenProfile);
        }
      } catch (error) {
        console.error("Unable to load citizen identity:", error);
      } finally {
        setCheckingAuth(false);
      }
    });

    return () => unsubscribe();
  }, [router]);

  useEffect(() => {
    if (checkingAuth) return;

    const greetingTimer = window.setTimeout(() => setShowGreeting(true), 250);
    const titleTimer = window.setTimeout(() => setShowTitle(true), 850);
    const nameTimer = window.setTimeout(() => setShowName(true), 1300);

    return () => {
      window.clearTimeout(greetingTimer);
      window.clearTimeout(titleTimer);
      window.clearTimeout(nameTimer);
    };
  }, [checkingAuth]);

  const displayName =
    citizen?.kingdomName ||
    citizen?.fullName ||
    citizen?.alias ||
    user?.displayName ||
    "Citizen";

  const royalTitle = getRoyalTitle(citizen?.royalRank);

  const profilePhoto =
    citizen?.profileImage || citizen?.photoURL || user?.photoURL;

  if (checkingAuth) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#020914] px-6 text-center text-white">
        <div className="flex flex-col items-center">
          <RoyalLoader size={72} />
          <p className="mt-5 text-sm text-white/60">
            Entering the Kingdom...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#020914] pb-24 text-white">
      <style jsx>{`
        @keyframes kingdomFadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .kingdom-fade-in {
          animation: kingdomFadeIn 700ms ease-out both;
        }

        @media (prefers-reduced-motion: reduce) {
          .kingdom-fade-in {
            animation: none;
          }
        }
      `}</style>

      <div className="mx-auto w-full max-w-3xl">
        <header className="flex items-center justify-between gap-3 px-4 py-4 sm:px-6">
          <button
            type="button"
            onClick={() => router.push("/kingdom")}
            aria-label="Curved Kingdom home"
            className="flex min-w-0 items-center gap-2 text-left"
          >
            {!logoFailed ? (
              <img
                src="/curved-kingdom-logo.png"
                alt="Curved Kingdom logo"
                className="h-10 w-10 shrink-0 object-contain"
                onError={() => setLogoFailed(true)}
              />
            ) : (
              <span
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center text-[#35E8FF]"
              >
                <span className="text-2xl font-light">CK</span>
              </span>
            )}

            <span className="flex min-w-0 flex-col leading-none">
              <span className="text-base font-bold tracking-wide text-[#FFD700] sm:text-lg">
                CURVED
              </span>
              <span className="mt-1 text-xs font-semibold tracking-[0.2em] text-[#35E8FF] sm:text-sm">
                KINGDOM
              </span>
            </span>
          </button>

          <button
            type="button"
            onClick={() => router.push("/palace")}
            aria-label="Open your Palace"
            className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/15 transition-colors hover:border-[#35E8FF]"
          >
            {profilePhoto && !profileImageFailed ? (
              <img
                src={profilePhoto}
                alt="Your profile"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
                onError={() => setProfileImageFailed(true)}
              />
            ) : (
              <span className="text-sm font-semibold text-[#35E8FF]">
                {displayName.charAt(0).toUpperCase()}
              </span>
            )}
          </button>
        </header>

        <section
          aria-label="Welcome to your Kingdom"
          className="px-5 pb-7 pt-7 sm:px-6 sm:pb-10 sm:pt-10"
        >
          <div className="min-h-[108px]">
            <p
              className={`text-sm font-medium tracking-wide text-[#35E8FF] ${
                showGreeting ? "kingdom-fade-in" : "opacity-0"
              }`}
            >
              {greeting}
            </p>

            <h1 className="mt-2 flex flex-wrap items-baseline gap-x-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              {royalTitle && (
                <span
                  className={`text-[#FFD700] ${
                    showTitle ? "kingdom-fade-in" : "opacity-0"
                  }`}
                >
                  {royalTitle}
                </span>
              )}

              <span
                className={`text-white ${
                  showName ? "kingdom-fade-in" : "opacity-0"
                }`}
              >
                {displayName}
              </span>
            </h1>
          </div>
        </section>

        <section
          aria-labelledby="kingdom-coming-soon-title"
          className="px-4 sm:px-6"
        >
          <div className="relative isolate flex min-h-[min(680px,calc(100svh-230px))] flex-col items-center justify-center overflow-hidden border border-white/[0.08] bg-[#061426] px-6 py-12 text-center sm:min-h-[580px] sm:rounded-2xl sm:px-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
            >
              <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#35E8FF]/[0.08] blur-[90px]" />
              <div className="absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-[#FFD700]/[0.06] blur-[90px]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#061426_78%)]" />
            </div>

            <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-[#35E8FF]/20 bg-[#35E8FF]/[0.06]">
              {!logoFailed ? (
                <img
                  src="/curved-kingdom-logo.png"
                  alt="Curved Kingdom emblem"
                  className="h-14 w-14 object-contain"
                  onError={() => setLogoFailed(true)}
                />
              ) : (
                <BellRing
                  aria-hidden="true"
                  size={34}
                  strokeWidth={1.4}
                  className="text-[#35E8FF]"
                />
              )}
            </div>

            <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.3em] text-[#35E8FF] sm:text-xs">
              A New Chapter Is Approaching
            </p>

            <h2
              id="kingdom-coming-soon-title"
              className="mt-5 max-w-md text-3xl font-black leading-tight tracking-tight sm:text-5xl"
            >
              <span className="bg-gradient-to-r from-[#FFD700] via-[#F5E6A8] to-[#35E8FF] bg-clip-text text-transparent">
                The Kingdom Is Coming Soon
              </span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/65 sm:text-base">
              We are preparing something worthy of your Kingdom. A new home
              for royal proclamations, citizen participation, and the Glory
              your community will build together.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#FFD700]/20 bg-[#FFD700]/[0.05] px-5 py-3">
              <CalendarClock
                aria-hidden="true"
                size={18}
                className="shrink-0 text-[#FFD700]"
              />
              <span className="text-sm font-semibold text-[#E6DDAF]">
                Official launch announcement coming soon
              </span>
            </div>

            <div className="mt-10 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#35E8FF]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40">
                Your Kingdom. Your Power. Your Legacy.
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#FFD700]" />
            </div>
          </div>
        </section>
      </div>

      <RoyalNavigation />
    </main>
  );
}