"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { onAuthStateChanged, User } from "firebase/auth";

import { auth } from "../../lib/firebase";
import { getCitizenProfile } from "../services/user";

export default function IdentityGatePage() {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);

  const [loading, setLoading] = useState(true);
  const [entering, setEntering] = useState(false);

  const [error, setError] = useState("");

  /*
   * --------------------------------------------------
   * CHECK FIREBASE AUTHENTICATION
   * --------------------------------------------------
   */

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        if (!currentUser) {
          router.replace("/register");
          return;
        }

        setUser(currentUser);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [router]);

  /*
   * --------------------------------------------------
   * CONTINUE AS GOOGLE IDENTITY
   * --------------------------------------------------
   */

  const handleContinue = async () => {
    if (!user) return;

    try {
      setEntering(true);
      setError("");

      /*
       * Check whether this Firebase UID
       * already has a Kingdom profile.
       */

      const citizenProfile = await getCitizenProfile(
        user.uid
      );

      /*
       * EXISTING CITIZEN
       *
       * The UID already exists in:
       *
       * users/{uid}
       *
       * Therefore this citizen already has
       * a Kingdom identity.
       */

      if (citizenProfile) {
        console.log(
          "Existing Kingdom found:",
          citizenProfile.kingdomName
        );

        router.push("/welcome");

        return;
      }

      /*
       * NEW CITIZEN
       *
       * No users/{uid} document exists.
       *
       * Send them into Reforge.
       */

      console.log(
        "No Kingdom identity found. Beginning Reforge."
      );

      router.push("/reforge/role");
    } catch (error) {
      console.error(
        "Identity Gate error:",
        error
      );

      setError(
        "The Kingdom could not verify your identity. Please try again."
      );

      setEntering(false);
    }
  };

  /*
   * --------------------------------------------------
   * REFORGE MY KINGDOM
   * --------------------------------------------------
   */

  const handleReforge = () => {
    if (!user) return;

    router.push("/reforge/role");
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
            Identity Verification
          </p>

          <p className="mt-3 text-sm text-gray-500">
            Verifying your place within the Kingdom...
          </p>

        </div>
      </main>
    );
  }

  /*
   * --------------------------------------------------
   * NO AUTHENTICATED USER
   * --------------------------------------------------
   */

  if (!user) {
    return null;
  }

  /*
   * --------------------------------------------------
   * IDENTITY GATE
   * --------------------------------------------------
   */

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-5 py-12 text-white">

      <div className="w-full max-w-md">

        <div className="relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#0c0c0c] p-8 text-center shadow-[0_0_70px_rgba(234,179,8,.12)] sm:p-10">

          {/* Royal Glow */}

          <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl" />

          {/* Logo */}

          <div className="relative flex justify-center">

            <Image
              src="/curved-kingdom-logo.png"
              alt="Curved Kingdom"
              width={80}
              height={80}
              priority
            />

          </div>

          {/* Heading */}

          <div className="relative">

            <p className="mt-7 text-xs font-semibold uppercase tracking-[5px] text-yellow-400">
              Royal Identity Gate
            </p>

            <h1 className="mt-4 text-3xl font-black text-white sm:text-4xl">
              Your Identity Has Arrived
            </h1>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              The Kingdom has received your
              Google identity. Choose how you
              wish to proceed.
            </p>

          </div>

          {/* Google Identity */}

          <div className="relative mt-8 rounded-2xl border border-yellow-500/10 bg-white/[0.035] p-5">

            {/* Profile Image */}

            {user.photoURL ? (

              <div className="flex justify-center">

                <img
                  src={user.photoURL}
                  alt={
                    user.displayName ||
                    "Citizen"
                  }
                  width={82}
                  height={82}
                  className="h-20 w-20 rounded-full border-2 border-yellow-400/50 object-cover shadow-[0_0_30px_rgba(234,179,8,.15)]"
                />

              </div>

            ) : (

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-yellow-400/30 bg-yellow-400/10 shadow-[0_0_30px_rgba(234,179,8,.10)]">

                <Image
                  src="/curved-kingdom-logo.png"
                  alt="Curved Kingdom"
                  width={45}
                  height={45}
                />

              </div>

            )}

            {/* Name */}

            <h2 className="mt-5 text-2xl font-bold text-white">

              {user.displayName ||
                "Future Citizen"}

            </h2>

            {/* Email */}

            <p className="mt-2 break-all text-sm text-gray-500">

              {user.email ||
                "Google identity"}

            </p>

            {/* Google Identity Label */}

            <div className="mt-5 flex items-center justify-center gap-2">

              <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />

              <span className="text-xs font-semibold uppercase tracking-[3px] text-gray-500">
                Google Identity
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />

            </div>

          </div>

          {/* Continue */}

          <button
            type="button"
            disabled={entering}
            onClick={handleContinue}
            className="relative mt-7 w-full rounded-2xl bg-yellow-400 py-4 text-base font-bold text-black transition hover:scale-[1.02] hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-60"
          >

            {entering
              ? "Verifying Your Kingdom..."
              : `Continue as ${
                  user.displayName?.split(" ")[0] ||
                  "Citizen"
                }`}

          </button>

          {/* Reforge */}

          <button
            type="button"
            disabled={entering}
            onClick={handleReforge}
            className="relative mt-3 w-full rounded-2xl border border-yellow-500/30 bg-transparent py-4 text-base font-bold text-yellow-400 transition hover:border-yellow-400 hover:bg-yellow-400/10 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Reforge My Kingdom
          </button>

          {/* Error */}

          {error && (
            <p className="relative mt-5 text-center text-sm leading-6 text-red-400">
              {error}
            </p>
          )}

          {/* Explanation */}

          <p className="relative mt-6 text-xs leading-6 text-gray-600">
            Your Google identity remains yours.
            Your Kingdom identity can be shaped
            through the Reforge.
          </p>

        </div>

      </div>

    </main>
  );
}
