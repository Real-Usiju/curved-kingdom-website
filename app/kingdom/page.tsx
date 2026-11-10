"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, type User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import {
  BellRing,
  CirclePlay,
  Crown,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

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
  if (normalized === "prince") return "Prince";
  if (normalized === "princess") return "Princess";
  return "";
}

export default function KingdomPage() {
  const router = useRouter();

  const [checkingAuth, setCheckingAuth] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [citizen, setCitizen] = useState<CitizenProfile | null>(null);
  const [greeting, setGreeting] = useState("Good day");
  const [welcomeStage, setWelcomeStage] = useState(0);
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
        } else {
          router.replace("/reforge/identity");
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

    const greetingInterval = window.setInterval(() => {
      setGreeting(getGreeting());
    }, 60_000);

    const animationInterval = window.setInterval(() => {
      setWelcomeStage((stage) => (stage + 1) % 4);
    }, 3000);

    return () => {
      window.clearInterval(greetingInterval);
      window.clearInterval(animationInterval);
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

  const welcomeMessages = [
    {
      heading: greeting,
      detail: `${royalTitle ? `${royalTitle} ` : ""}${displayName}`,
    },
    {
      heading: "Welcome to your Kingdom",
      detail: `${royalTitle ? `${royalTitle} ` : ""}${displayName}`,
    },
    {
      heading: "Your Kingdom. Your Legacy.",
      detail: "Welcome home",
    },
    {
      heading: "The Kingdom welcomes you",
      detail: `${royalTitle ? `${royalTitle} ` : ""}${displayName}`,
    },
  ];

  if (checkingAuth) {
    return (
      <main className="flex h-[100dvh] items-center justify-center overflow-hidden bg-[#020914] px-6 text-center text-white">
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
    <main className="relative flex h-[100dvh] min-h-0 flex-col overflow-hidden bg-[#020914] text-white">
      <style jsx>{`
        @keyframes royalGreetingIn {
          from {
            opacity: 0;
            transform: translateY(6px);
            filter: blur(2px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes royalGreetingOut {
          from {
            opacity: 1;
            transform: translateY(0);
          }

          to {
            opacity: 0;
            transform: translateY(-5px);
          }
        }

        @keyframes royalGlow {
          0%,
          100% {
            opacity: 0.35;
            transform: scale(0.94);
          }

          50% {
            opacity: 0.8;
            transform: scale(1.06);
          }
        }

        .royal-greeting {
          animation: royalGreetingIn 550ms ease-out both;
        }

        .royal-glow {
          animation: royalGlow 4s ease-in-out infinite;
        }

        .royal-video-stage {
          background:
            radial-gradient(
              ellipse at 50% 35%,
              rgba(53, 232, 255, 0.065),
              transparent 48%
            ),
            radial-gradient(
              ellipse at 85% 90%,
              rgba(255, 215, 0, 0.045),
              transparent 45%
            ),
            linear-gradient(160deg, #061426 0%, #020914 72%);
        }

        @media (prefers-reduced-motion: reduce) {
          .royal-greeting,
          .royal-glow {
            animation: none;
          }
        }
      `}</style>

      <header className="relative z-40 flex h-[68px] shrink-0 items-center justify-between gap-2 border-b border-white/[0.07] bg-[#020914]/95 px-3 backdrop-blur-xl sm:h-[76px] sm:px-6">
        <button
          type="button"
          onClick={() => router.push("/kingdom")}
          aria-label="Curved Kingdom home"
          className="flex min-w-0 shrink-0 items-center gap-2 text-left"
        >
          {!logoFailed ? (
            <img
              src="/curved-kingdom-logo.png"
              alt="Curved Kingdom logo"
              className="h-9 w-9 shrink-0 object-contain sm:h-11 sm:w-11"
              onError={() => setLogoFailed(true)}
            />
          ) : (
            <span className="flex h-9 w-9 shrink-0 items-center justify-center text-[#35E8FF] sm:h-11 sm:w-11">
              <Crown size={24} strokeWidth={1.4} />
            </span>
          )}

          <span className="flex min-w-0 flex-col leading-none">
            <span className="text-sm font-bold tracking-wide text-[#FFD700] sm:text-lg">
              CURVED
            </span>
            <span className="mt-1 text-[10px] font-semibold tracking-[0.17em] text-[#35E8FF] sm:text-sm sm:tracking-[0.2em]">
              KINGDOM
            </span>
          </span>
        </button>

        <div
          key={welcomeStage}
          aria-live="polite"
          className="absolute left-1/2 flex w-[40%] -translate-x-1/2 flex-col items-center justify-center overflow-hidden text-center sm:w-[46%]"
        >
          <p className="royal-greeting max-w-full truncate text-[10px] font-medium tracking-wide text-[#35E8FF] sm:text-xs">
            {welcomeMessages[welcomeStage].heading}
          </p>

          <p
            className="royal-greeting mt-1 max-w-full truncate text-xs font-bold text-white sm:text-sm"
            style={{ animationDelay: "100ms" }}
          >
            {welcomeMessages[welcomeStage].detail}
          </p>
        </div>

        <button
          type="button"
          onClick={() => router.push("/palace")}
          aria-label="Open your Palace"
          className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/15 transition hover:border-[#FFD700]/60 focus:outline-none focus:ring-2 focus:ring-[#FFD700] sm:h-11 sm:w-11"
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

      <section className="flex min-h-0 flex-1 flex-col px-2 pt-2 pb-[calc(68px+8px+env(safe-area-inset-bottom))] sm:px-4 sm:pt-4 sm:pb-[calc(68px+16px+env(safe-area-inset-bottom))]">
        <div className="royal-video-stage relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-white/[0.09]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="royal-glow absolute left-1/2 top-[35%] h-64 w-64 -translate-x-1/2 rounded-full bg-[#35E8FF]/[0.07] blur-[90px]" />
            <div className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-[#FFD700]/[0.04] blur-[85px]" />
          </div>

          <div className="relative z-10 flex shrink-0 items-center justify-between gap-3 border-b border-white/[0.07] px-3 py-3 sm:px-6 sm:py-4">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#35E8FF]/25 bg-[#35E8FF]/[0.06] sm:h-11 sm:w-11">
                {!logoFailed ? (
                  <img
                    src="/curved-kingdom-logo.png"
                    alt="Curved Kingdom Official"
                    className="h-full w-full object-contain p-1"
                    onError={() => setLogoFailed(true)}
                  />
                ) : (
                  <Crown
                    size={22}
                    className="text-[#FFD700]"
                    aria-hidden="true"
                  />
                )}
              </div>

              <div className="min-w-0">
                <h1 className="truncate text-sm font-bold sm:text-base">
                  Curved Kingdom Official
                </h1>
                <p className="mt-1 flex items-center gap-1.5 text-[10px] text-white/45 sm:text-xs">
                  <ShieldCheck
                    size={13}
                    className="shrink-0 text-[#35E8FF]"
                    aria-hidden="true"
                  />
                  Official Kingdom channel
                </p>
              </div>
            </div>

            <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-[#35E8FF]/20 bg-[#35E8FF]/[0.05] px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-wider text-[#35E8FF]">
              <Sparkles size={12} aria-hidden="true" />
              Official
            </span>
          </div>

          <div className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center overflow-y-auto overscroll-contain px-5 py-5 text-center sm:px-10">
            <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-3xl border border-[#35E8FF]/20 bg-[#35E8FF]/[0.05] sm:h-[76px] sm:w-[76px]">
              <CirclePlay
                size={42}
                strokeWidth={1.2}
                className="text-[#35E8FF]"
                aria-hidden="true"
              />
            </div>

            <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.3em] text-[#35E8FF] sm:mt-7 sm:text-[10px]">
              Your official video feed
            </p>

            <h2 className="mt-3 max-w-sm text-2xl font-bold leading-tight sm:mt-4 sm:text-4xl">
              The Kingdom speaks{" "}
              <span className="text-[#FFD700]">through its stories.</span>
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-white/50 sm:mt-4 sm:leading-7">
              Official videos and their captions will appear here when
              published by Curved Kingdom Official.
            </p>

            <div className="mt-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/[0.09] bg-black/20 px-3 py-2.5 sm:mt-7 sm:px-4">
              <BellRing
                size={14}
                className="shrink-0 text-[#FFD700]"
                aria-hidden="true"
              />
              <span className="text-left text-[10px] text-white/55 sm:text-[11px]">
                The first official video is yet to be published.
              </span>
            </div>
          </div>

          <div className="relative z-10 flex shrink-0 items-center justify-center gap-2 border-t border-white/[0.07] px-3 py-3 sm:px-4 sm:py-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#35E8FF]" />
            <p className="text-center text-[9px] font-semibold uppercase tracking-[0.16em] text-white/35 sm:tracking-[0.2em]">
              Your Kingdom. Your Power. Your Legacy.
            </p>
            <span className="h-1.5 w-1.5 rounded-full bg-[#FFD700]" />
          </div>
        </div>
      </section>

      <RoyalNavigation />
    </main>
  );
}