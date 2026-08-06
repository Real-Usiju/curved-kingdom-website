"use client";

import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-[#050505] flex items-center justify-center px-6 py-20">

      <div className="w-full max-w-md">

        <div className="rounded-3xl border border-yellow-500/20 bg-[#0c0c0c] p-8 shadow-[0_0_60px_rgba(234,179,8,.12)]">

          {/* Logo */}

          <div className="flex justify-center">
            <Image
              src="/logo.png"
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

          <p className="mt-5 text-center text-gray-400 leading-8">
            Your kingdom begins today.
            Join Curved Kingdom and become one of the first citizens shaping
            the future of this digital civilization.
          </p>

          {/* Google */}

          


<button
  type="button"
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
    hover:bg-yellow-300
    hover:scale-[1.02]
  "
>
  <FcGoogle size={26} />
  Continue with Google
</button>
<p className="mt-6 text-center text-sm text-gray-500">
  Google Sign-In will be activated in the next update.
</p>
          {/* Security */}

          <p className="mt-6 text-center text-sm text-gray-500">
            🔒 Secure Google Authentication
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
            </Link>.
          </p>

        </div>

      </div>

    </main>
  );
}