"use client";

import { motion, useReducedMotion } from "framer-motion";
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

const royalGradient =
  "bg-gradient-to-r from-[#D4AF37] via-[#278DBB] to-[#D4AF37] bg-clip-text text-transparent";

export default function Roadmap() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="roadmap"
      className="relative overflow-hidden bg-[#020914] py-16 sm:py-20 lg:py-28"
    >
      {/* Background Glows */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  scale: [1, 1.15, 1],
                  opacity: [0.08, 0.18, 0.08],
                }
          }
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-175 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[220px]"
        />

        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#278DBB]/10 blur-[150px]" />

        <div className="absolute -left-40 bottom-10 h-96 w-96 rounded-full bg-[#D4AF37]/6 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p
            className={`text-[10px] font-semibold uppercase tracking-[4px] sm:text-xs sm:tracking-[8px] ${royalGradient}`}
          >
            The Royal Journey
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">
            <span className="text-white">Rise Of The </span>
            <span className={royalGradient}>Kingdom</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl px-2 text-sm leading-7 text-[#9AAEC3] sm:px-0 sm:text-lg sm:leading-8">
            Every great civilization begins with a single vision.
            Follow the milestones that are shaping Curved Kingdom.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mt-16 sm:mt-20 lg:mt-24">
          {/* Timeline Line */}

          <div className="absolute left-6 top-0 h-full w-0.5 bg-linear-to-b from-[#D4AF37] via-[#278DBB]/60 to-transparent sm:left-10" />

          {journey.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={
                  shouldReduceMotion ? false : { opacity: 0, x: 50 }
                }
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: shouldReduceMotion ? 0 : index * 0.2,
                }}
                className="relative mb-10 ml-16 sm:mb-14 sm:ml-24"
              >
                {/* Timeline Circle */}

                <motion.div
                  whileHover={
                    shouldReduceMotion ? undefined : { scale: 1.1 }
                  }
                  className="absolute -left-12 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#071321] shadow-[0_0_25px_rgba(39,141,187,0.14)] transition-colors duration-300 hover:border-[#278DBB]/70 sm:-left-18.5 sm:top-6 sm:h-16 sm:w-16"
                >
                  <Icon
                    size={24}
                    strokeWidth={1.7}
                    className="text-[#D4AF37] transition-colors duration-300 hover:text-[#45B8E8] sm:h-8 sm:w-8"
                  />
                </motion.div>

                {/* Timeline Card */}

                <motion.div
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -6,
                          scale: 1.01,
                        }
                  }
                  className="group relative overflow-hidden rounded-3xl border border-[#D4AF37]/20 bg-linear-to-br from-[#0A1929]/95 via-[#071321]/95 to-[#10101A]/95 p-5 shadow-[0_0_30px_rgba(39,141,187,0.06)] backdrop-blur-xl transition-all duration-300 hover:border-[#278DBB]/50 hover:shadow-[0_0_35px_rgba(212,175,55,0.09)] sm:p-8"
                >
                  {/* Card Top Accent */}

                  <div className="absolute left-0 top-0 h-px w-full bg-linear-to-r from-transparent via-[#D4AF37] to-[#278DBB]" />

                  {/* Card Background Glow */}

                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#278DBB]/6 blur-[70px] transition-all duration-300 group-hover:bg-[#278DBB]/12" />

                  <p
                    className={`relative text-xs font-semibold uppercase tracking-[4px] sm:tracking-[5px] ${royalGradient}`}
                  >
                    {step.status}
                  </p>

                  <h3
                    className={`relative mt-3 text-2xl font-black sm:text-3xl ${royalGradient}`}
                  >
                    {step.title}
                  </h3>

                  <p className="relative mt-5 text-base leading-7 text-[#9AAEC3] sm:text-lg sm:leading-8">
                    {step.description}
                  </p>

                  {/* Card Bottom Accent */}

                  <div className="relative mt-6 h-px w-12 bg-linear-to-r from-[#D4AF37] to-[#278DBB] transition-all duration-300 group-hover:w-24" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 text-center"
        >
          <motion.div
            initial={shouldReduceMotion ? false : { width: 0 }}
            whileInView={{ width: 140 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto h-0.5 bg-linear-to-r from-[#D4AF37] to-[#278DBB]"
          />

          <h3 className="mt-8 text-3xl font-black leading-tight sm:mt-10 sm:text-4xl lg:text-5xl">
            <span className="text-white">The Journey Has </span>
            <span className={royalGradient}>Only Begun</span>
          </h3>

          <p className="mx-auto mt-5 max-w-2xl px-2 text-sm leading-7 text-[#9AAEC3] sm:mt-6 sm:px-0 sm:text-lg sm:leading-8">
            Every milestone brings Curved Kingdom closer to becoming a digital
            civilization where creators, leaders, innovators and communities
            unite to build something that will outlive generations.
          </p>

          <motion.a
            href="/register"
            whileHover={
              shouldReduceMotion
                ? undefined
                : {
                    scale: 1.04,
                    boxShadow: "0 0 35px rgba(39,141,187,0.22)",
                  }
            }
            whileTap={
              shouldReduceMotion ? undefined : { scale: 0.97 }
            }
            className="mt-8 inline-flex w-full justify-center rounded-full border border-[#D4AF37]/50 bg-linear-to-r from-[#D4AF37] via-[#E6C75B] to-[#278DBB] px-8 py-4 text-base font-bold text-[#020914] shadow-[0_5px_20px_rgba(212,175,55,0.10)] transition-all duration-300 hover:border-[#45B8E8] sm:mt-10 sm:w-auto sm:px-10"
          >
            Forge Your Kingdom
            <span aria-hidden="true" className="ml-2">
              →
            </span>
          </motion.a>

          <motion.div
            initial={shouldReduceMotion ? false : { width: 0 }}
            whileInView={{ width: 140 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-12 h-0.5 bg-linear-to-r from-[#278DBB] to-[#D4AF37]"
          />
        </motion.div>
      </div>
    </section>
  );
}