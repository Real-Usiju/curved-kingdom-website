"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Crown,
  ShieldCheck,
  Users,
  Sparkles,
} from "lucide-react";

export default function Community() {
  return (
    <section
      id="community"
      className="relative overflow-hidden bg-[#050505] py-28"
    >

      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.06, 0.15, 0.06],
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

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >

          <p className="uppercase tracking-[8px] text-yellow-400">
            Join The Kingdom
          </p>

          <h2 className="mt-6 text-4xl font-black text-white md:text-6xl">
            Become A Founding Citizen
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-400">
            Every great kingdom begins with its first citizens.
            Join Curved Kingdom today and help shape a digital civilization
            built on purpose, innovation and legacy.
          </p>

        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
                   {/* Royal Identity Card */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10 }}
            className="rounded-3xl border border-yellow-500/20 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500/10">
              <Crown size={32} className="text-yellow-400" />
            </div>

            <h3 className="mt-8 text-2xl font-bold text-white">
              Royal Identity
            </h3>

            <p className="mt-5 leading-8 text-gray-400">
              Create a unique identity that represents your purpose,
              achievements and journey inside Curved Kingdom.
            </p>
          </motion.div>

          {/* Trusted Kingdom Card */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
            whileHover={{ y: -10 }}
            className="rounded-3xl border border-yellow-500/20 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500/10">
              <ShieldCheck
                size={32}
                className="text-yellow-400"
              />
            </div>

            <h3 className="mt-8 text-2xl font-bold text-white">
              Trusted Community
            </h3>

            <p className="mt-5 leading-8 text-gray-400">
              Become part of a growing community where collaboration,
              respect and innovation shape the future.
            </p>
          </motion.div>

          {/* Legacy Card */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            whileHover={{ y: -10 }}
            className="rounded-3xl border border-yellow-500/20 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500/10">
              <Sparkles
                size={32}
                className="text-yellow-400"
              />
            </div>

            <h3 className="mt-8 text-2xl font-bold text-white">
              Leave A Legacy
            </h3>

            <p className="mt-5 leading-8 text-gray-400">
              Every contribution becomes part of the Kingdom's history,
              inspiring future generations of citizens.
            </p>
          </motion.div> 
                  </div>

        {/* Call To Action */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 text-center"
        >

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 140 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto h-0.5 bg-yellow-500"
          />

          <h3 className="mt-10 text-3xl font-black text-white md:text-5xl">
            The Kingdom Awaits You
          </h3>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-400">
            Your journey begins today. Become one of the founding citizens
            of Curved Kingdom and help build a digital civilization where
            identity, innovation, purpose and legacy come together.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

            <Link href="/register">

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(255,200,0,0.45)",
                }}
                whileTap={{ scale: 0.96 }}
                className="
                  rounded-full
                  bg-yellow-500
                  px-10
                  py-4
                  font-bold
                  text-black
                  transition
                  hover:bg-yellow-400
                "
              >
                Become A Founding Citizen
              </motion.button>

            </Link>

            <Link href="/login">

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="
                  rounded-full
                  border
                  border-yellow-500
                  px-10
                  py-4
                  font-bold
                  text-yellow-400
                  transition
                  hover:bg-yellow-500
                  hover:text-black
                "
              >
                Return To The Kingdom
              </motion.button>

            </Link>

          </div>

          <p className="mt-8 text-sm uppercase tracking-[5px] text-yellow-400/80">
            Together We Build The Future
          </p>

        </motion.div>

      </div>

    </section>
  );
}