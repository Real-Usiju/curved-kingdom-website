"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

import { auth } from "../../lib/firebase";
import { getCitizenProfile } from "../services/user";
import {RoyalLoader} from "../components/RoyalLoader";

export default function IdentityGatePage() {
  const router = useRouter();
  const reduceMotion = useReducedMotion();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [entering, setEntering] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.replace("/register");
        return;
      }

      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const handleContinue = async () => {
    if (!user || entering) return;

    try {
      setEntering(true);
      setError("");

      const citizenProfile = await getCitizenProfile(user.uid);

      if (citizenProfile) {
        router.push("/welcome");
        return;
      }

      router.push("/reforge/identity");
    } catch (error) {
      console.error("Identity Gate error:", error);

      const firebaseError = error as {
        code?: string;
        message?: string;
      };

      if (
        firebaseError.code === "unavailable" ||
        firebaseError.code === "auth/network-request-failed" ||
        firebaseError.message?.toLowerCase().includes("network") ||
        firebaseError.message?.toLowerCase().includes("offline")
      ) {
        setError(
          "Unable to connect to the Kingdom. Please check your internet connection and try again."
        );
      } else {
        setError(
          "The Kingdom could not verify your identity. Please try again."
        );
      }

      setEntering(false);
    }
  };

  const handleReforge = () => {
    if (!user || entering) return;

    router.push("/reforge/identity");
  };

  if (loading) {
    return (
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020914] px-5 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-[#278DBB]/10 blur-[130px]" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#D4AF37]/[0.06] blur-[120px]" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center">
          <RoyalLoader size={100} />

          <p className="mt-7 text-xs font-bold uppercase tracking-[0.3em] text-[#E6C75B]">
            Royal Identity
          </p>

          <p className="mt-3 text-sm text-[#9AAEC3]">
            Verifying your place within the Kingdom...
          </p>
        </div>
      </main>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020914] px-4 py-10 text-white sm:px-6">
      {/* Kingdom atmosphere */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-110 w-110 -translate-x-1/2 rounded-full bg-[#278DBB]/10 blur-[140px]" />

        <div className="absolute -left-40 top-[40%] h-96 w-96 rounded-full bg-[#D4AF37]/[0.06] blur-[130px]" />

        <div className="absolute -right-40 -bottom-32 h-96 w-96 rounded-full bg-[#278DBB]/[0.08] blur-[140px]" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#020914_78%)]" />

        <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-size-[60px_60px]" />
      </div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: reduceMotion ? 0 : 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 mx-auto w-full max-w-[460px]"
      >
        <div className="relative overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#071321]/90 shadow-[0_30px_100px_rgba(0,0,0,0.55)] backdrop-blur-2xl sm:rounded-[32px]">
          {/* Top accent */}

          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-[#278DBB]" />

          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#278DBB]/[0.07] blur-[80px]" />

          <div className="relative px-6 pb-7 pt-8 sm:px-10 sm:pb-9 sm:pt-9">
            {/* Logo */}

            <div className="flex justify-center">
              <div className="relative flex h-22 w-22 items-center justify-center rounded-3xl border border-[#278DBB]/25 bg-gradient-to-br from-[#D4AF37]/[0.07] to-[#278DBB]/[0.09] shadow-[0_0_45px_rgba(39,141,187,0.08)] sm:h-24 sm:w-24">
                <div className="absolute inset-2 rounded-[19px] border border-[#D4AF37]/10" />

                <Image
                  src="/curved-kingdom-logo.png"
                  alt="Curved Kingdom emblem"
                  width={90}
                  height={90}
                  priority
                  className="relative z-10 h-[70px] w-[70px] object-contain sm:h-[78px] sm:w-[78px]"
                />
              </div>
            </div>

            {/* Brand */}

            <div className="mt-5 text-center">
              <p className="text-[12px] font-black tracking-[0.25em]">
                <span className="bg-gradient-to-r from-[#D4AF37] via-[#278DBB] to-[#D4AF37] bg-clip-text text-transparent">
                  CURVED
                </span>{" "}
                <span className="bg-gradient-to-r from-[#278DBB] via-[#D4AF37] to-[#278DBB] bg-clip-text text-transparent">
                  KINGDOM
                </span>
              </p>

              <div className="mx-auto mt-4 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#D4AF37]/60" />

                <span className="bg-gradient-to-r from-[#D4AF37] to-[#45B8E8] bg-clip-text text-[10px] font-bold uppercase tracking-[0.28em] text-transparent">
                  Royal Entrance
                </span>

                <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#278DBB]/70" />
              </div>
            </div>

            {/* Heading */}

            <h1 className="mt-5 text-center text-[28px] font-black leading-tight tracking-[-0.035em] sm:text-[34px]">
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#E7E1D0] to-[#45B8E8] bg-clip-text text-transparent">
                Enter Your Kingdom
              </span>
            </h1>

            <p className="mx-auto mt-3 max-w-[330px] text-center text-sm leading-6 text-[#9AAEC3] sm:text-[15px]">
              Welcome back. Your Kingdom awaits, and your royal journey
              continues here.
            </p>

            {/* Divider */}

            <div className="my-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/[0.09]" />
              <div className="h-1.5 w-1.5 rotate-45 border border-[#D4AF37]/70" />
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/[0.09]" />
            </div>

            {/* Google identity */}

            <div className="relative mt-2 rounded-2xl border border-[#278DBB]/20 bg-white/[0.025] p-5">
              {user.photoURL ? (
                <div className="flex justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={user.photoURL}
                    alt={user.displayName || "Citizen"}
                    width={82}
                    height={82}
                    referrerPolicy="no-referrer"
                    className="h-20 w-20 rounded-full border-2 border-[#D4AF37]/60 object-cover shadow-[0_0_30px_rgba(39,141,187,0.12)]"
                  />
                </div>
              ) : (
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#278DBB]/30 bg-[#278DBB]/[0.08]">
                  <Image
                    src="/curved-kingdom-logo.png"
                    alt="Curved Kingdom emblem"
                    width={50}
                    height={50}
                    className="h-12 w-12 object-contain"
                  />
                </div>
              )}

              <h2 className="mt-5 break-words text-center text-xl font-bold text-white sm:text-2xl">
                {user.displayName || "Future Citizen"}
              </h2>

              <p className="mt-2 break-all text-center text-sm text-[#9AAEC3]">
                {user.email || "Google identity"}
              </p>

              <div className="mt-5 flex items-center justify-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#45B8E8]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#45B8E8]">
                  Verified Google Identity
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-[#45B8E8]" />
              </div>
            </div>

            {/* Continue */}

            <button
              type="button"
              disabled={entering}
              aria-busy={entering}
              onClick={handleContinue}
              className={`relative mt-7 flex min-h-[56px] w-full items-center justify-center gap-3 overflow-hidden rounded-2xl border px-5 py-4 text-sm font-extrabold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#45B8E8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071321] ${
                entering
                  ? "cursor-not-allowed border-[#278DBB]/50 bg-[#020914] text-[#45B8E8]"
                  : "border-[#D4AF37]/35 bg-gradient-to-r from-[#D4AF37] via-[#E6C75B] to-[#278DBB] text-[#020914] shadow-[0_8px_30px_rgba(39,141,187,0.12)] hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(212,175,55,0.17)] active:translate-y-0"
              }`}
            >
              {entering ? (
                <RoyalLoader size={38} />
              ) : (
                <>
                  <span>Continue as {user.displayName?.split(" ")[0] || "Citizen"}</span>
                  <ArrowRight size={18} />
                </>
              )}
            </button>

            {/* Reforge */}

            <button
              type="button"
              disabled={entering}
              onClick={handleReforge}
              className="mt-3 flex min-h-[54px] w-full items-center justify-center rounded-2xl border border-[#278DBB]/30 bg-transparent px-5 py-4 text-sm font-bold text-[#45B8E8] transition-all duration-300 hover:border-[#D4AF37]/50 hover:bg-[#278DBB]/[0.07] hover:text-[#E6C75B] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Reforge My Kingdom
            </button>

            {/* Error */}

            {error && (
              <div
                role="alert"
                aria-live="polite"
                className="mt-4 rounded-xl border border-red-400/20 bg-red-400/[0.06] px-4 py-3"
              >
                <p className="text-center text-sm leading-6 text-red-300">
                  {error}
                </p>
              </div>
            )}

            {/* Security reassurance */}

            <div className="mt-6 flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] p-3.5">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#278DBB]/20 bg-[#278DBB]/[0.08]">
                <ShieldCheck size={17} className="text-[#45B8E8]" />
              </div>

              <div>
                <p className="text-xs font-semibold text-white/80">
                  Your Royal Identity
                </p>

                <p className="mt-1 text-xs leading-5 text-[#9AAEC3]">
                  Your Google identity remains yours. Your Kingdom identity
                  can be established or restored as you continue.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom accent */}

          <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />
        </div>

        <p className="mt-5 text-center text-[9px] font-semibold uppercase tracking-[0.22em] text-white/30">
          Your Kingdom. Your Power. Your Legacy.
        </p>
      </motion.div>
    </main>
  );
}

