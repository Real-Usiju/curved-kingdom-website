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
  className="relative overflow-hidden bg-[#050505] py-16 sm:py-20 lg:py-28"
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

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

       <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="text-center"
>
  <p
    className="
      text-[10px]
      uppercase
      tracking-[4px]
      text-yellow-400
      sm:text-xs
      sm:tracking-[8px]
    "
  >
    Join The Kingdom
  </p>

  <h2
    className="
      mt-4
      text-3xl
      font-black
      leading-tight
      text-white
      sm:mt-6
      sm:text-5xl
      lg:text-6xl
    "
  >
    Become A Founding Citizen
  </h2>

  <p
    className="
      mx-auto
      mt-5
      max-w-3xl
      px-2
      text-sm
      leading-7
      text-gray-400
      sm:mt-8
      sm:px-0
      sm:text-lg
      sm:leading-9
    "
  >
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
            className="
  rounded-3xl
  border
  border-yellow-500/20
  bg-white/5
  p-6
  backdrop-blur-xl
  transition-all
  duration-300
  hover:border-yellow-400
  hover:shadow-[0_0_35px_rgba(255,200,0,0.18)]
  sm:p-8
"
          >
            <div className="
  flex
  h-14
  w-14
  items-center
  justify-center
  rounded-full
  bg-yellow-500/10
  sm:h-16
  sm:w-16
">
              <Crown size={26} className="text-yellow-400" />
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
            <div className="
  flex
  h-14
  w-14
  items-center
  justify-center
  rounded-full
  bg-yellow-500/10
  sm:h-16
  sm:w-16
">
              <ShieldCheck
                size={26}
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
            <div className="
  flex
  h-14
  w-14
  items-center
  justify-center
  rounded-full
  bg-yellow-500/10
  sm:h-16
  sm:w-16
">
              <Sparkles
                size={26}
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

          <h3
  className="
    mt-8
    text-3xl
    font-black
    leading-tight
    text-white
    sm:mt-10
    sm:text-4xl
    lg:text-5xl
  "
>
  The Kingdom Awaits You
</h3>

        <p
  className="
    mx-auto
    mt-6
    max-w-3xl
    px-2
    text-sm
    leading-7
    text-gray-400
    sm:mt-8
    sm:px-0
    sm:text-lg
    sm:leading-9
  "
>
            Your journey begins today. Become one of the founding citizens
            of Curved Kingdom and help build a digital civilization where
            identity, innovation, purpose and legacy come together.
          </p>

          <div
  className="
    mt-10
    flex
    flex-col
    items-center
    justify-center
    gap-4
    sm:mt-12
    sm:flex-row
    sm:gap-5
  "
>

            <Link href="/register">

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(255,200,0,0.45)",
                }}
                whileTap={{ scale: 0.96 }}
                className="
  w-full
  rounded-full
  bg-yellow-500
  px-8
  py-4
  text-base
  font-bold
  text-black
  transition-all
  duration-300
  hover:bg-yellow-400
  sm:w-auto
  sm:px-10
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
  w-full
  rounded-full
  border
  border-yellow-500
  px-8
  py-4
  text-base
  font-bold
  text-yellow-400
  transition-all
  duration-300
  hover:bg-yellow-500
  hover:text-black
  sm:w-auto
  sm:px-10
"
              >
                Return To The Kingdom
              </motion.button>

            </Link>

          </div>

          <p
  className="
    mt-8
    text-[11px]
    uppercase
    tracking-[4px]
    text-yellow-400/80
    sm:text-sm
    sm:tracking-[5px]
  "
>
            Together We Build The Future
          </p>

        </motion.div>

      </div>

    </section>
  );
}