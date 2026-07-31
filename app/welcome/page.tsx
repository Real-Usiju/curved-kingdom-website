"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function WelcomePage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-black via-gray-950 to-black flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl rounded-3xl border border-yellow-500/30 bg-black/70 backdrop-blur-lg p-10 shadow-2xl text-center"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex justify-center"
        >
          <Image
            src="/logo.png"
            alt="Curved Kingdom Logo"
            width={140}
            height={140}
            priority
          />
        </motion.div>

        <h1 className="mt-6 text-5xl font-bold text-yellow-400">
          Welcome to Curved Kingdom
        </h1>

        <h2 className="mt-3 text-2xl text-yellow-500 font-semibold">
          🎉 Congratulations, Early Citizen!
        </h2>

        <p className="mt-6 text-lg text-gray-300 leading-8">
          Your journey has officially begun.
        </p>

        <p className="mt-4 text-gray-400 leading-8">
          Every voice matters.
          <br />
          Every creator belongs.
          <br />
          Every citizen helps shape the future.
        </p>

        <div className="mt-10">
          <Link
            href="/dashboard"
            className="inline-block rounded-full bg-yellow-500 px-10 py-4 text-lg font-bold text-black transition hover:bg-yellow-400"
          >
            Enter the Kingdom →
          </Link>
        </div>
      </motion.div>
    </main>
  );
}