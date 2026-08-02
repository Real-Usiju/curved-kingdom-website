"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FoundingCitizen() {
  return (
    <section
      className="relative overflow-hidden bg-[#040404] py-32"
    >
      {/* Golden Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-150 h-150 rounded-full bg-yellow-500/10 blur-[180px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="uppercase tracking-[8px] text-yellow-400"
        >
          Become A Founding Citizen
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-4xl md:text-6xl font-black text-white leading-tight"
        >
          History Remembers
          <br />
          <span className="text-yellow-400">
            Those Who Arrive First
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-lg leading-8 text-gray-300 max-w-3xl mx-auto"
        >
          Curved Kingdom is more than an application.
          It is a digital civilization built by visionaries,
          creators, innovators, and citizens who believe in
          shaping something greater than themselves.

          <br /><br />

          Your journey can begin today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-5"
        >
          <Link href="/register">
            <button className="bg-yellow-500 hover:bg-yellow-400 transition text-black px-10 py-4 rounded-full font-bold shadow-[0_0_30px_rgba(255,200,0,0.45)]">
              Claim Your Citizenship
            </button>
          </Link>

          <a href="#vision">
            <button className="border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black transition px-10 py-4 rounded-full">
              Explore The Vision
            </button>
          </a>
        </motion.div>

      </div>
    </section>
  );
}