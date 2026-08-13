"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

import {
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";

import {
  auth,
  googleProvider,
  authPersistence,
} from "../../lib/firebase";

import { getCitizenProfile } from "../services/user";

export default function LoginPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError("");

      /*
       * --------------------------------------------------
       * KEEP CITIZEN SIGNED IN
       * --------------------------------------------------
       */

      await authPersistence;

      let result;

      /*
       * --------------------------------------------------
       * GOOGLE LOGIN
       * --------------------------------------------------
       */

      try {
        result = await signInWithPopup(
          auth,
          googleProvider
        );
      } catch (popupError: unknown) {
        const firebaseError = popupError as {
          code?: string;
        };

        /*
         * Popup unavailable?
         * Use Google redirect instead.
         */

        if (
          firebaseError.code ===
            "auth/popup-blocked" ||
          firebaseError.code ===
            "auth/popup-closed-by-user" ||
          firebaseError.code ===
            "auth/cancelled-popup-request"
        ) {
          await signInWithRedirect(
            auth,
            googleProvider
          );

          return;
        }

        throw popupError;
      }

      /*
       * --------------------------------------------------
       * CHECK FOR KINGDOM PROFILE
       * --------------------------------------------------
       */

      const citizen =
        await getCitizenProfile(
          result.user.uid
        );

      /*
       * --------------------------------------------------
       * NEW CITIZEN
       * --------------------------------------------------
       *
       * Google authentication succeeded,
       * but this UID has no Kingdom profile.
       *
       * Send the citizen to registration.
       */

      if (!citizen) {
        console.log(
          "New citizen detected. Sending to registration."
        );

        router.replace("/register");

        return;
      }

      /*
       * --------------------------------------------------
       * EXISTING CITIZEN
       * --------------------------------------------------
       *
       * The citizen already has:
       *
       * users/{uid}
       *
       * Therefore they go directly to Palace.
       *
       * NO REFORGE BUTTON
       * NO REGISTRATION
       *
       * Reforge is available later through:
       *
       * Palace
       *   ↓
       * Capital
       *   ↓
       * Profile
       *   ↓
       * Reforge My Kingdom
       */

      console.log(
        "Existing citizen detected:",
        citizen.kingdomName
      );

      router.replace("/palace");

    } catch (error) {
      console.error(
        "Login error:",
        error
      );

      setError(
        "The Kingdom could not complete your entrance. Please try again."
      );

      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-5 py-12 text-white">

      <div className="w-full max-w-md">

        <div className="rounded-3xl border border-yellow-500/20 bg-[#0c0c0c] p-8 shadow-[0_0_70px_rgba(234,179,8,.12)] sm:p-10">

          {/* LOGO */}

          <div className="flex justify-center">

            <Image
              src="/curved-kingdom-logo.png"
              alt="Curved Kingdom"
              width={90}
              height={90}
              priority
            />

          </div>


          {/* ROYAL ENTRANCE */}

          <p className="mt-8 text-center text-xs font-semibold uppercase tracking-[5px] text-yellow-400">
            Royal Entrance
          </p>


          <h1 className="mt-4 text-center text-4xl font-black">
            Enter Your Kingdom
          </h1>


          <p className="mt-5 text-center text-sm leading-7 text-gray-400">
            Return to your Kingdom and continue
            your Royal journey.
          </p>


          {/* GOOGLE LOGIN */}

          <button
            type="button"
            onClick={handleLogin}
            disabled={loading}
            className="
              mt-10
              flex
              w-full
              items-center
              justify-center
              gap-4
              rounded-2xl
              bg-yellow-400
              py-4
              text-lg
              font-bold
              text-black
              transition
              hover:scale-[1.02]
              hover:bg-yellow-300
              active:scale-[0.98]
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >

            <FcGoogle size={25} />

            {loading
              ? "Entering the Kingdom..."
              : "Continue with Google"}

          </button>


          {/* ERROR */}

          {error && (
            <p className="mt-5 text-center text-sm leading-6 text-red-400">
              {error}
            </p>
          )}


          {/* INFORMATION */}

          <p className="mt-8 text-center text-xs leading-6 text-gray-600">
            Your Royal Identity remains connected
            to your Google account.
          </p>

        </div>

      </div>

    </main>
  );
}