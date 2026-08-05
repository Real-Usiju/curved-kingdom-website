"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Castle,
  Globe2,
  Crown,
} from "lucide-react";

const journey = [
  {
    title: "The Awakening",
    status: "Chapter One",
    description:
      "The vision of Curved Kingdom was born. A new digital civilization began its journey.",
    icon: Sparkles,
  },
  {
    title: "The Foundation",
    status: "Kingdom Under Construction",
    description:
      "Building the ecosystem, website and preparing the Kingdom for its first citizens.",
    icon: Castle,
  },
  {
    title: "The Expansion",
    status: "The Gates Will Open",
    description:
      "Opening Curved Kingdom to creators, communities and visionaries around the world.",
    icon: Globe2,
  },
  {
    title: "The Eternal Kingdom",
    status: "The Future",
    description:
      "A civilization where every citizen leaves a legacy that inspires generations.",
    icon: Crown,
  },
];

export default function Roadmap() {
  return (
   <section
  id="roadmap"
  className="relative overflow-hidden bg-[#050505] py-16 sm:py-20 lg:py-28"
>
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

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
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
    The Royal Journey
  </p>

  <h2
    className="
      mt-4
      text-3xl
      font-black
      leading-tight
      text-white
      sm:text-5xl
      lg:text-6xl
    "
  >
    Rise Of The Kingdom
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
      sm:px-0
      sm:text-lg
      sm:leading-8
    "
  >
    Every great civilization begins with a single vision.
    Follow the milestones that are shaping Curved Kingdom.
  </p>
</motion.div>

        {/* Timeline */}

        <div className="relative mt-16 sm:mt-20 lg:mt-24">

          <div
           className="
  absolute
  left-6
  top-0
  h-full
  w-0.5
  bg-linear-to-b
  from-yellow-500
  via-yellow-400/40
  to-transparent
  sm:left-10
"
          />
                    {journey.map((step, index) => {

            const Icon = step.icon;

            return (

              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                }}
                className="relative mb-10 ml-16 sm:mb-14 sm:ml-24"
              >

                {/* Timeline Circle */}

                <motion.div
                  whileHover={{ scale: 1.1 }}
                 className="
  absolute
  -left-12
  top-5
  flex
  h-12
  w-12
  items-center
  justify-center
  rounded-full
  border
  border-yellow-500/40
  bg-[#111111]
  shadow-[0_0_25px_rgba(255,200,0,0.18)]
  sm:-left-18.5
  sm:top-6
  sm:h-16
  sm:w-16
"
                >
                 <Icon
  size={24}
  className="text-yellow-400 sm:h-8 sm:w-8"
/>
                </motion.div>

                {/* Card */}

                <motion.div
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                  }}
                  className="
  rounded-3xl
  border
  border-yellow-500/20
  bg-linear-to-br
  from-[#111111]
  to-[#1b1b1b]
  p-5
  sm:p-8
  shadow-[0_0_30px_rgba(255,200,0,0.08)]
  transition-all
"
                >

                  <p className="text-xs uppercase tracking-[5px] text-yellow-400">
                    {step.status}
                  </p>

                  <h3 className="mt-3 text-3xl font-black text-white">
                    {step.title}
                  </h3>

                  <p className="mt-5 text-lg leading-8 text-gray-400">
                    {step.description}
                  </p>

                </motion.div>

              </motion.div>

            );

          })}
                  </div>

        {/* Bottom CTA */}

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
  The Journey Has Only Begun
</h3>
            <p
  className="
    mx-auto
    mt-5
    max-w-2xl
    px-2
    text-sm
    leading-7
    text-gray-400
    sm:mt-6
    sm:px-0
    sm:text-lg
    sm:leading-8
  "
>
            Every milestone brings Curved Kingdom closer to becoming a digital
            civilization where creators, leaders, innovators and communities
            unite to build something that will outlive generations.
          </p>

          <motion.a
  href="/register"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 35px rgba(255,200,0,0.45)",
            }}
            whileTap={{ scale: 0.96 }}
            className="
  mt-8
  inline-flex
  w-full
  justify-center
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
  sm:mt-10
  sm:w-auto
  sm:px-10
"
          >
            Become A Founding Citizen
          </motion.a>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 140 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-12 h-0.5 bg-yellow-500"
          />
        </motion.div>

      </div>
    </section>
  );
}