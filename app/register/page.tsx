"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";

import {
  getRedirectResult,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";

import {
  auth,
  googleProvider,
  authPersistence,
} from "../../lib/firebase";

export default function RegisterPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /*
   * --------------------------------------------------
   * CHECK GOOGLE REDIRECT
   * --------------------------------------------------
   */

  useEffect(() => {
    const checkGoogleRedirect = async () => {
      try {
        setError("");

        await authPersistence;

        const result = await getRedirectResult(auth);

        if (result?.user) {
          router.push("/identity-gate");
        }
      } catch (error: any) {
        console.error("GOOGLE REDIRECT ERROR:", error);

        setError(
          error?.code
            ? `${error.code}: ${error.message}`
            : "Google authentication failed."
        );
      }
    };

    checkGoogleRedirect();
  }, [router]);

  /*
   * --------------------------------------------------
   * GOOGLE ENTRANCE
   * --------------------------------------------------
   */

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      setError("");

      await authPersistence;

      /*
       * First try Google popup.
       */

      try {
        const result = await signInWithPopup(
          auth,
          googleProvider
        );

        if (result.user) {
          router.push("/identity-gate");
        }

        return;
      } catch (popupError: any) {
        console.warn(
          "Google popup could not open.",
          popupError
        );

        const firebaseError = popupError as {
          code?: string;
          message?: string;
        };

        /*
         * If popup is blocked or closed,
         * use redirect authentication.
         */

        if (
          firebaseError.code === "auth/popup-blocked" ||
          firebaseError.code === "auth/popup-closed-by-user" ||
          firebaseError.code === "auth/cancelled-popup-request"
        ) {
          await signInWithRedirect(
            auth,
            googleProvider
          );

          return;
        }

        /*
         * Any other Firebase error should
         * reach the main catch below.
         */

        throw popupError;
      }
    } catch (error: any) {
      console.error("GOOGLE SIGN-IN ERROR:", error);

      setError(
        error?.code
          ? `${error.code}: ${error.message}`
          : "Google authentication failed."
      );

      setLoading(false);
    }
  };

  /*
   * --------------------------------------------------
   * REGISTER / FOUNDING CITIZEN SCREEN
   * --------------------------------------------------
   */

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-5 py-12 text-white">
      <div className="w-full max-w-md">
        <div className="relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#0c0c0c] p-8 shadow-[0_0_60px_rgba(234,179,8,.12)] sm:p-10">

          {/* Logo */}

          <div className="flex justify-center">
            <Image
              src="/curved-kingdom-logo.png"
              alt="Curved Kingdom"
              width={90}
              height={90}
              priority
            />
          </div>

          {/* Heading */}

          <h1 className="mt-6 text-center text-4xl font-black text-white">
            Become a
          </h1>

          <h2 className="text-center text-4xl font-black text-yellow-400">
            Founding Citizen
          </h2>

          <p className="mt-5 text-center leading-8 text-gray-400">
            Your Kingdom begins today.
            Join Curved Kingdom and become one
            of the first citizens shaping the future
            of this digital civilization.
          </p>

          {/* Google Button */}

          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="mt-10 flex w-full items-center justify-center gap-4 rounded-2xl bg-yellow-400 py-4 text-lg font-bold text-black transition hover:scale-[1.02] hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <FcGoogle size={25} />

            {loading
              ? "Entering the Kingdom..."
              : "Continue with Google"}
          </button>

          {/* Error */}

          {error && (
            <div className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 p-4">
              <p className="text-center text-sm leading-6 text-red-400">
                {error}
              </p>
            </div>
          )}

          {/* Security */}

          <p className="mt-6 text-center text-sm text-gray-500">
            Secure Google Authentication
          </p>

          {/* Terms */}

          <p className="mt-8 text-center text-sm leading-7 text-gray-500">
            By continuing you agree to our{" "}
            <Link
              href="/terms"
              className="text-yellow-400 hover:underline"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="text-yellow-400 hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
}