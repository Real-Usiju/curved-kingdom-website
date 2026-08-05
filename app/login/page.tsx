"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505]">

      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.18, 0.08],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="
            absolute
            left-1/2
            top-1/2
            h-175
            w-175
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-yellow-500
            blur-[220px]
          "
        />

      </div>

      <div className="relative flex min-h-screen items-center justify-center px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="
            w-full
            max-w-lg
            rounded-[35px]
            border
            border-yellow-500/20
            bg-[#101010]/90
            p-10
            backdrop-blur-xl
            shadow-[0_0_45px_rgba(255,200,0,.15)]
          "
        >

          {/* Logo */}

          <div className="flex justify-center">

            <Image
              src="/curved-kingdom-logo.png"
              alt="Curved Kingdom"
              width={95}
              height={95}
            />

          </div>

          {/* Heading */}

          <h1 className="mt-8 text-center text-4xl font-black text-white">
            Welcome Back
          </h1>

          <p className="mx-auto mt-5 max-w-md text-center leading-8 text-gray-400">
            Return to Curved Kingdom and continue building your legacy.
          </p>

          {/* Google Button */}

          <motion.button
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 35px rgba(255,200,0,.25)",
            }}
            whileTap={{ scale: .97 }}
            className="
              mt-10
              flex
              w-full
              items-center
              justify-center
              gap-4
              rounded-2xl
              border
              border-yellow-500/20
              bg-[#181818]
              px-6
              py-4
              text-lg
              font-semibold
              text-white
              transition
              hover:border-yellow-400
            "
          >

            <FcGoogle size={28} />

            Continue with Google

          </motion.button>

          {/* Divider */}

          <div className="my-10 flex items-center">

            <div className="h-px flex-1 bg-yellow-500/20" />

            <span className="px-4 text-sm uppercase tracking-[4px] text-gray-500">
              Royal Access
            </span>

            <div className="h-px flex-1 bg-yellow-500/20" />

          </div>

          {/* Register */}

          <p className="text-center text-gray-400">

            New to Curved Kingdom?

            <Link
              href="/register"
              className="ml-2 font-semibold text-yellow-400 hover:text-yellow-300"
            >
              Become A Founding Citizen
            </Link>

          </p>

        </motion.div>

      </div>

    </main>
  );
}