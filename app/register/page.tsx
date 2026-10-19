"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import {
  getAdditionalUserInfo,
  getRedirectResult,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";

import {
  auth,
  googleProvider,
  authPersistence,
} from "../../lib/firebase";

import { RoyalLoader } from "../components/RoyalLoader";

export default function RegisterPage() {
  const router = useRouter();
  const reduceMotion = useReducedMotion();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getFriendlyErrorMessage = (error: unknown) => {
    const firebaseError = error as {
      code?: string;
      message?: string;
    };

    const code = firebaseError?.code ?? "";
    const message = firebaseError?.message?.toLowerCase() ?? "";

    if (
      code === "auth/network-request-failed" ||
      code === "unavailable" ||
      code === "functions/unavailable" ||
      message.includes("network") ||
      message.includes("failed to fetch") ||
      message.includes("internet") ||
      message.includes("offline")
    ) {
      return "The Kingdom cannot be reached right now. Check your connection and try again.";
    }

    if (
      code === "auth/popup-closed-by-user" ||
      code === "auth/cancelled-popup-request"
    ) {
      return "Your journey was interrupted. You may continue whenever you are ready.";
    }

    if (code === "auth/popup-blocked") {
      return "Your browser blocked the Google sign-in window. Allow pop-ups and try again.";
    }

    if (
      code === "auth/unauthorized-domain" ||
      code === "auth/operation-not-allowed"
    ) {
      return "Google sign-in is not available right now. Please try again later.";
    }

    if (code === "auth/account-exists-with-different-credential") {
      return "This identity already belongs to a Kingdom. Return to the Kingdom and use the sign-in method originally connected to your account.";
    }

    if (code === "auth/too-many-requests") {
      return "Too many attempts have been made. Please wait before trying again.";
    }

    return "We could not complete your journey. Please try again.";
  };

  const continueToCorrectDestination = (isNewUser: boolean) => {
    if (isNewUser) {
      router.replace("/reforge/identity");
    } else {
      router.replace("/kingdom");
    }
  };

  useEffect(() => {
    let active = true;

    const checkGoogleRedirect = async () => {
      try {
        await authPersistence;

        const result = await getRedirectResult(auth);

        if (!active) return;

        if (result?.user) {
          const additionalInfo = getAdditionalUserInfo(result);
          const isNewUser = additionalInfo?.isNewUser ?? false;

          continueToCorrectDestination(isNewUser);
          return;
        }

        setLoading(false);
      } catch (error: unknown) {
        console.error("Google registration redirect failed:", error);

        if (!active) return;

        setError(getFriendlyErrorMessage(error));
        setLoading(false);
      }
    };

    checkGoogleRedirect();

    return () => {
      active = false;
    };
  }, []);

  const handleGoogleSignIn = async () => {
    if (loading) return;

    try {
      setLoading(true);
      setError("");

      await authPersistence;

      try {
        const result = await signInWithPopup(auth, googleProvider);

        if (!result.user) {
          setLoading(false);
          return;
        }

        const additionalInfo = getAdditionalUserInfo(result);
        const isNewUser = additionalInfo?.isNewUser ?? false;

        continueToCorrectDestination(isNewUser);
      } catch (popupError: unknown) {
        const firebaseError = popupError as {
          code?: string;
        };

        if (firebaseError.code === "auth/popup-blocked") {
          await signInWithRedirect(auth, googleProvider);
          return;
        }

        throw popupError;
      }
    } catch (error: unknown) {
      console.error("Google registration failed:", error);

      setError(getFriendlyErrorMessage(error));
      setLoading(false);
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020914] px-4 py-8 text-white sm:px-6">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-55 left-1/2 h-110 w-110 -translate-x-1/2 rounded-full bg-[#278DBB]/10 blur-[130px]" />

        <div className="absolute -left-40 top-[35%] h-90 w-90 rounded-full bg-[#D4AF37]/[0.07] blur-[130px]" />

        <div className="absolute -right-40 -bottom-25 h-95 w-95 rounded-full bg-[#278DBB]/9 blur-[140px]" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#020914_75%)]" />

        <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)] bg-size-[60px_60px]" />
      </div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: reduceMotion ? 0 : 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 mx-auto w-full max-w-115"
      >
        <div className="relative overflow-hidden rounded-[28px] border border-white/9 bg-[#071321]/90 shadow-[0_30px_100px_rgba(0,0,0,0.55)] backdrop-blur-2xl sm:rounded-4xl">
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#D4AF37] to-[#278DBB]" />

          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#278DBB]/[0.07] blur-[80px]" />

          <div className="relative px-6 pb-6 pt-7 sm:px-10 sm:pb-8 sm:pt-8">
            <div className="flex justify-center">
              <div className="group relative flex h-22 w-22 items-center justify-center rounded-3xl border border-[#278DBB]/25 bg-linear-to-br from-[#D4AF37]/[0.07] to-[#278DBB]/9 shadow-[0_0_45px_rgba(39,141,187,0.08)] sm:h-24 sm:w-24">
                <div className="absolute inset-2 rounded-[19px] border border-[#D4AF37]/10" />

                <Image
                  src="/curved-kingdom-logo.png"
                  alt="Curved Kingdom emblem"
                  width={90}
                  height={90}
                  priority
                  className="relative z-10 h-17.5 w-17.5 object-contain transition-transform duration-500 group-hover:scale-105 sm:h-19.5 sm:w-19.5"
                />
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className="text-[12px] font-black tracking-[0.25em]">
                <span className="bg-linear-to-r from-[#D4AF37] via-[#278DBB] to-[#D4AF37] bg-clip-text text-transparent">
                  CURVED
                </span>{" "}
                <span className="bg-linear-to-r from-[#278DBB] via-[#D4AF37] to-[#278DBB] bg-clip-text text-transparent">
                  KINGDOM
                </span>
              </p>

              <div className="mx-auto mt-4 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-linear-to-r from-transparent to-[#D4AF37]/60" />

                <span className="bg-linear-to-r from-[#D4AF37] to-[#45B8E8] bg-clip-text text-[10px] font-bold uppercase tracking-[0.28em] text-transparent">
                  Forge Your Future
                </span>

                <span className="h-px w-8 bg-linear-to-l from-transparent to-[#278DBB]/70" />
              </div>
            </div>

            <h1 className="mt-4 text-center text-[28px] font-black leading-tight tracking-[-0.035em] sm:text-[34px]">
              <span className="bg-linear-to-r from-[#D4AF37] via-[#E7E1D0] to-[#45B8E8] bg-clip-text text-transparent">
                Forge a New Kingdom
              </span>
            </h1>

            <p className="mx-auto mt-3 max-w-82.5 text-center text-sm leading-6 text-[#9AAEC3] sm:text-[15px]">
              Every great Kingdom begins with one decision. Begin your
              journey and establish your Royal Identity.
            </p>

            <div className="my-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-linear-to-r from-transparent to-white/9" />
              <div className="h-1.5 w-1.5 rotate-45 border border-[#D4AF37]/70" />
              <div className="h-px flex-1 bg-linear-to-l from-transparent to-white/9" />
            </div>

            <button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={loading}
              aria-busy={loading}
              className={`group relative flex min-h-14 w-full items-center justify-center gap-3 overflow-hidden rounded-2xl border px-5 py-4 text-sm font-extrabold shadow-[0_8px_30px_rgba(39,141,187,0.12)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#45B8E8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071321] ${
                loading
                  ? "cursor-not-allowed border-[#278DBB]/50 bg-[#020914] text-[#45B8E8]"
                  : "border-[#D4AF37]/35 bg-linear-to-r from-[#D4AF37] via-[#E6C75B] to-[#278DBB] text-[#020914] hover:-translate-y-0.5 hover:border-[#45B8E8]/60 hover:shadow-[0_12px_36px_rgba(212,175,55,0.17)] active:translate-y-0"
              }`}
            >
              {loading ? (
                <span className="flex h-8 w-8 items-center justify-center">
                  <RoyalLoader size={38} />
                </span>
              ) : (
                <>
                  <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  <span className="relative flex h-7 w-7 items-center justify-center rounded-lg bg-white shadow-sm">
                    <FcGoogle size={20} />
                  </span>

                  <span className="relative">Continue with Google</span>

                  <ArrowRight
                    size={17}
                    className="relative ml-auto transition-transform duration-300 group-hover:translate-x-1"
                  />
                </>
              )}
            </button>

            {error && (
              <div
                role="alert"
                aria-live="polite"
                className="mt-4 wrap-break-word rounded-xl border border-red-400/20 bg-red-400/6 px-4 py-3"
              >
                <p className="text-center text-sm leading-6 text-red-300">
                  {error}
                </p>
              </div>
            )}

            <div className="mt-5 flex items-start gap-3 rounded-xl border border-white/6 bg-white/2.5 p-3.5">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#278DBB]/20 bg-[#278DBB]/8">
                <ShieldCheck size={17} className="text-[#45B8E8]" />
              </div>

              <div>
                <p className="text-xs font-semibold text-white/80">
                  Secure Royal Identity
                </p>

                <p className="mt-1 text-xs leading-5 text-[#9AAEC3]">
                  Returning citizens will enter their Kingdom directly.
                  New citizens will proceed to Reforge My Kingdom to establish
                  their Royal Identity.
                </p>
              </div>
            </div>

            <div className="mt-6 border-t border-white/[0.07] pt-5 text-center">
              <p className="text-sm text-white/50">
                Already have a Kingdom?
              </p>

              <Link
                href="/login"
                className="mt-2 inline-flex items-center gap-2 rounded-lg px-2 py-1 text-sm font-bold text-[#E6C75B] transition-colors hover:text-[#45B8E8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#45B8E8]"
              >
                Return to the Kingdom
                <ArrowRight size={15} />
              </Link>
            </div>

            <p className="mt-5 text-center text-xs leading-6 text-[#9AAEC3]">
              By continuing, you agree to our{" "}
              <Link
                href="/terms"
                className="font-semibold text-[#E6C75B] underline decoration-[#D4AF37]/30 underline-offset-4 transition-colors hover:text-[#45B8E8]"
              >
                Terms and Conditions
              </Link>{" "}
              and acknowledge our{" "}
              <Link
                href="/privacy"
                className="font-semibold text-[#45B8E8] underline decoration-[#278DBB]/40 underline-offset-4 transition-colors hover:text-[#E6C75B]"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          <div className="h-0.5 w-full bg-linear-to-r from-transparent via-[#D4AF37]/70 to-transparent" />
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-white/40">
          <Link
            href="/privacy"
            className="transition-colors hover:text-[#45B8E8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#45B8E8]"
          >
            Privacy Policy
          </Link>

          <span className="h-1 w-1 rounded-full bg-[#D4AF37]/50" />

          <Link
            href="/terms"
            className="transition-colors hover:text-[#E6C75B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#45B8E8]"
          >
            Terms and Conditions
          </Link>

          <span className="h-1 w-1 rounded-full bg-[#278DBB]/60" />

          <Link
            href="/contact"
            className="transition-colors hover:text-[#45B8E8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#45B8E8]"
          >
            Contact
          </Link>
        </div>

        <p className="mt-3 text-center text-[9px] font-semibold uppercase tracking-[0.22em] text-white/25">
          Your Kingdom. Your Power. Your Legacy.
        </p>
      </motion.div>
    </main>
  );
}