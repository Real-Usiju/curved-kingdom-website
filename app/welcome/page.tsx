"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { ArrowLeft, CheckCircle2, Sparkles } from "lucide-react";

import { auth } from "../../lib/firebase";
import { RoyalLoader } from "../components/RoyalLoader";

export default function WelcomePage() {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!active) return;

      if (!currentUser) {
        router.replace("/login");
        return;
      }

      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      active = false;
      unsubscribe();
    };
  }, [router]);

  const displayName =
    user?.displayName?.trim() ||
    user?.email?.split("@")[0] ||
    "Citizen";

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#020914] px-5 text-white">
        <div className="flex flex-col items-center text-center">
          <RoyalLoader size={75} />

          <p className="mt-6 text-xs font-bold uppercase tracking-[0.3em] text-[#35E8FF]">
            Curved Kingdom
          </p>

          <p className="mt-3 text-sm text-[#91A5BA]">
            Preparing your welcome...
          </p>
        </div>
      </main>
    );
  }

  if (!user) return null;

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020914] px-4 py-10 text-white sm:px-6">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#35E8FF]/10 blur-[130px]" />

        <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-[#FFD700]/[0.06] blur-[130px]" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#020914_80%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-xl">

        {/* Logo */}
        <header className="mb-8 flex flex-col items-center text-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-[28px] border border-[#35E8FF]/20 bg-[#071321] shadow-[0_0_55px_rgba(53,232,255,0.09)]">
            <Image
              src="/curved-kingdom-logo.png"
              alt="Curved Kingdom"
              width={82}
              height={82}
              priority
              className="h-20 w-20 object-contain"
            />
          </div>

          <p className="mt-5 text-xs font-black uppercase tracking-[0.3em] text-white">
            Curved Kingdom
          </p>

          <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.28em] text-[#35E8FF]">
            A New Experience Is Coming
          </p>
        </header>

        {/* Welcome card */}
        <section className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#071321]/95 shadow-[0_30px_100px_rgba(0,0,0,0.4)] sm:rounded-[36px]">

          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#35E8FF] to-[#FFD700]" />

          <div className="px-6 py-9 text-center sm:px-10 sm:py-12">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#35E8FF]/20 bg-[#35E8FF]/[0.07]">
              <CheckCircle2
                size={32}
                className="text-[#35E8FF]"
              />
            </div>

            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#FFD700]/20 bg-[#FFD700]/[0.06] px-4 py-2">
              <Sparkles size={14} className="text-[#FFD700]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFD700]">
                Thank You For Visiting
              </span>
            </div>

            <h1 className="mt-6 text-3xl font-black leading-tight tracking-tight sm:text-5xl">
              Welcome,
              <span className="mt-2 block break-words bg-gradient-to-r from-[#35E8FF] via-white to-[#FFD700] bg-clip-text text-transparent">
                {displayName}
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#A7B7C8] sm:text-base">
              Thank you for visiting Curved Kingdom. We are delighted to have
              you with us.
            </p>

            {/* Google account details */}
            <div className="mt-8 rounded-2xl border border-[#35E8FF]/15 bg-[#35E8FF]/[0.035] p-5 text-left">

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#35E8FF]">
                Your Connected Account
              </p>

              <div className="mt-4 flex items-center gap-4">

                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="Your Google profile"
                    referrerPolicy="no-referrer"
                    className="h-12 w-12 rounded-full border border-[#35E8FF]/30 object-cover"
                  />
                ) : (
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#35E8FF]/30 bg-[#020914] text-lg font-black text-[#35E8FF]">
                    {displayName.charAt(0).toUpperCase()}
                  </div>
                )}

                <div className="min-w-0">
                  <p className="break-words text-sm font-bold text-white">
                    {displayName}
                  </p>

                  <p className="mt-1 break-all text-xs text-[#91A5BA]">
                    {user.email || "Email unavailable"}
                  </p>
                </div>

              </div>
            </div>

            {/* Event announcement */}
            <div className="mt-7 rounded-2xl border border-[#FFD700]/20 bg-[#FFD700]/[0.045] px-5 py-7">

              <Sparkles
                size={25}
                className="mx-auto text-[#FFD700]"
              />

              <h2 className="mt-4 text-xl font-black text-[#FFD700] sm:text-2xl">
                Something Special Is Coming!
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#B8C8D8]">
                Our special event is coming soon. Stay connected!
                We look forward to sharing this exciting new chapter
                of Curved Kingdom with you.
              </p>

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-[#35E8FF]">
                Your Kingdom. Your Power. Your Legacy.
              </p>

            </div>

            {/* Homepage button */}
            <button
              type="button"
              onClick={() => router.push("/")}
              className="group mt-8 flex min-h-[56px] w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#35E8FF] via-[#8CEEF5] to-[#FFD700] px-6 py-4 text-sm font-black text-[#020914] transition duration-200 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35E8FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071321]"
            >
              <ArrowLeft
                size={19}
                className="transition-transform group-hover:-translate-x-1"
              />

              Return to Curved Kingdom Homepage
            </button>

            <p className="mt-6 text-xs leading-6 text-[#71869C]">
              Thank you for being part of the Curved Kingdom journey.
            </p>

          </div>
        </section>

        <footer className="mt-7 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#71869C]">
            Curved Kingdom © {new Date().getFullYear()}
          </p>
        </footer>

      </div>
    </main>
  );
}