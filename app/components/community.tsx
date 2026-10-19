"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Crown,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const royalGradient =
  "bg-gradient-to-r from-[#D4AF37] via-[#278DBB] to-[#D4AF37] bg-clip-text text-transparent";

const blueGoldGradient =
  "bg-gradient-to-r from-[#278DBB] via-[#D4AF37] to-[#278DBB] bg-clip-text text-transparent";

const communityPillars = [
  {
    title: "Royal Identity",
    description:
      "Create a unique identity that represents your purpose, achievements and journey inside Curved Kingdom.",
    icon: Crown,
  },
  {
    title: "Trusted Community",
    description:
      "Become part of a growing community where collaboration, respect and innovation shape the future.",
    icon: ShieldCheck,
  },
  {
    title: "Leave A Legacy",
    description:
      "Every contribution becomes part of the Kingdom's history, inspiring future generations of citizens.",
    icon: Sparkles,
  },
];

export default function Community() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="community"
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
                  opacity: [0.06, 0.15, 0.06],
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

        <div className="absolute -bottom-20 -left-40 h-96 w-96 rounded-full bg-[#D4AF37]/6 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
            Join The Kingdom
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight sm:mt-6 sm:text-5xl lg:text-6xl">
            <span className="text-white">Become A </span>
            <span className={royalGradient}>Founding Citizen</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl px-2 text-sm leading-7 text-[#9AAEC3] sm:mt-8 sm:px-0 sm:text-lg sm:leading-9">
            Every great kingdom begins with its first citizens. Join Curved
            Kingdom today and help shape a digital civilization built on
            purpose, innovation and legacy.
          </p>
        </motion.div>

        {/* Community Cards */}

        <div className="mt-12 grid gap-6 sm:mt-16 sm:gap-8 lg:grid-cols-3">
          {communityPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const titleGradient =
              index % 2 === 0 ? royalGradient : blueGoldGradient;

            return (
              <motion.div
                key={pillar.title}
                initial={
                  shouldReduceMotion ? false : { opacity: 0, y: 50 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: shouldReduceMotion ? 0 : index * 0.15,
                }}
                whileHover={
                  shouldReduceMotion ? undefined : { y: -10 }
                }
                className="group relative w-full overflow-hidden rounded-3xl border border-[#D4AF37]/20 bg-white/[0.035] p-5 shadow-[0_0_25px_rgba(212,175,55,0.06)] backdrop-blur-xl transition-all duration-300 hover:border-[#278DBB]/50 hover:shadow-[0_0_35px_rgba(39,141,187,0.12)] sm:p-6 lg:p-8"
              >
                {/* Card Accents */}

                <div className="absolute left-0 top-0 h-px w-full bg-linear-to-r from-transparent via-[#D4AF37] to-[#278DBB]" />

                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#278DBB]/5.5 blur-[70px] transition-all duration-300 group-hover:bg-[#278DBB]/12" />

                {/* Icon */}

                <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37]/25 bg-linear-to-br from-[#D4AF37]/12 to-[#278DBB]/10 transition-colors duration-300 group-hover:border-[#278DBB]/60 sm:h-16 sm:w-16">
                  <Icon
                    size={26}
                    strokeWidth={1.7}
                    className="text-[#D4AF37] transition-colors duration-300 group-hover:text-[#45B8E8]"
                  />
                </div>

                {/* Card Heading */}

                <h3
                  className={`relative mt-8 text-2xl font-bold ${titleGradient}`}
                >
                  {pillar.title}
                </h3>

                {/* Description */}

                <p className="relative mt-5 leading-8 text-[#9AAEC3]">
                  {pillar.description}
                </p>

                {/* Bottom Accent */}

                <div className="relative mt-6 h-px w-12 bg-linear-to-r from-[#D4AF37] to-[#278DBB] transition-all duration-300 group-hover:w-24" />
              </motion.div>
            );
          })}
        </div>

        {/* Call To Action */}

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
            <span className="text-white">The Kingdom </span>
            <span className={royalGradient}>Awaits You</span>
          </h3>

          <p className="mx-auto mt-6 max-w-3xl px-2 text-sm leading-7 text-[#9AAEC3] sm:mt-8 sm:px-0 sm:text-lg sm:leading-9">
            Your journey begins today. Become part of Curved Kingdom and help
            build a digital civilization where identity, innovation, purpose
            and legacy come together.
          </p>

          {/* Action Buttons */}

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row sm:gap-5">
            <Link href="/register" className="w-full sm:w-auto">
              <motion.span
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        scale: 1.04,
                        boxShadow: "0 0 30px rgba(212,175,55,0.20)",
                      }
                }
                whileTap={
                  shouldReduceMotion ? undefined : { scale: 0.97 }
                }
                className="inline-flex w-full items-center justify-center rounded-full border border-[#D4AF37]/50 bg-linear-to-r from-[#D4AF37] via-[#E6C75B] to-[#278DBB] px-8 py-4 text-base font-bold text-[#020914] transition-all duration-300 hover:border-[#45B8E8] sm:w-auto sm:px-10"
              >
                Forge Your Kingdom
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </motion.span>
            </Link>

            <Link href="/login" className="w-full sm:w-auto">
              <motion.span
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        scale: 1.04,
                        boxShadow: "0 0 25px rgba(39,141,187,0.12)",
                      }
                }
                whileTap={
                  shouldReduceMotion ? undefined : { scale: 0.97 }
                }
                className="inline-flex w-full items-center justify-center rounded-full border border-[#278DBB]/60 bg-transparent px-8 py-4 text-base font-bold text-[#45B8E8] transition-all duration-300 hover:border-[#D4AF37]/70 hover:bg-linear-to-r hover:from-[#D4AF37]/10 hover:to-[#278DBB]/10 sm:w-auto sm:px-10"
              >
                Return To The Kingdom
              </motion.span>
            </Link>
          </div>

          <p
            className={`mt-8 text-[11px] font-semibold uppercase tracking-[4px] sm:text-sm sm:tracking-[5px] ${blueGoldGradient}`}
          >
            Together We Build The Future
          </p>

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