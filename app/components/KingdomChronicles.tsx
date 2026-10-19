"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Crown,
  ScrollText,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const chronicles = [
  {
    number: "001",
    category: "THE BEGINNING",
    title: "The Birth of Curved Kingdom",
    description:
      "The foundation of a new digital civilization has begun. Curved Kingdom is being created as a place where identity, purpose, connection, innovation, and legacy can come together.",
    icon: Crown,
  },
  {
    number: "002",
    category: "THE BUILDING",
    title: "Building The Kingdom",
    description:
      "The Kingdom is under construction. Follow the journey as the ecosystem, technology, and experiences that will welcome its first citizens take shape.",
    icon: ScrollText,
  },
  {
    number: "003",
    category: "THE VISION",
    title: "The Vision Ahead",
    description:
      "Curved Kingdom is being built for a future where citizens can create, connect, discover opportunities, express their ideas, and leave a meaningful legacy.",
    icon: Sparkles,
  },
];

const royalGradient =
  "bg-gradient-to-r from-[#D4AF37] via-[#278DBB] to-[#D4AF37] bg-clip-text text-transparent";

const blueGoldGradient =
  "bg-gradient-to-r from-[#278DBB] via-[#D4AF37] to-[#278DBB] bg-clip-text text-transparent";

export default function KingdomChronicles() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="chronicles"
      className="relative overflow-hidden bg-[#020914] py-24 sm:py-28 lg:py-32"
    >
      {/* Background Glows */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  scale: [1, 1.15, 1],
                  opacity: [0.05, 0.12, 0.05],
                }
          }
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[180px] sm:h-162.5 sm:w-162.5"
        />

        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#278DBB]/10 blur-[150px]" />

        <div className="absolute -bottom-20 -left-40 h-96 w-96 rounded-full bg-[#D4AF37]/6 blur-[150px]" />
      </div>

      {/* Main Container */}

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-linear-to-br from-[#D4AF37]/12 to-[#278DBB]/12 shadow-[0_0_30px_rgba(39,141,187,0.12)]">
              <ScrollText
                size={27}
                className="text-[#D4AF37] transition-colors duration-300 hover:text-[#45B8E8]"
              />
            </div>
          </div>

          <p
            className={`mt-7 text-[10px] font-semibold uppercase tracking-[5px] sm:text-xs sm:tracking-[8px] ${royalGradient}`}
          >
            Kingdom Chronicles
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">
            <span className="text-white">THE STORY IS </span>
            <span className={royalGradient}>BEING WRITTEN</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#9AAEC3] sm:mt-6 sm:text-lg sm:leading-8">
            Follow the journey of Curved Kingdom as the vision, technology,
            and civilization take shape.
          </p>
        </motion.div>

        {/* Chronicles */}

        <div className="mt-14 grid gap-6 sm:mt-16 lg:grid-cols-3 lg:gap-8">
          {chronicles.map((chronicle, index) => {
            const Icon = chronicle.icon;

            return (
              <motion.article
                key={chronicle.number}
                initial={
                  shouldReduceMotion ? false : { opacity: 0, y: 70 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: shouldReduceMotion ? 0 : index * 0.15,
                }}
                whileHover={
                  shouldReduceMotion ? undefined : { y: -8 }
                }
                className="group relative overflow-hidden rounded-3xl border border-[#D4AF37]/20 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-300 hover:border-[#278DBB]/50 hover:bg-white/5.5 hover:shadow-[0_0_40px_rgba(39,141,187,0.10)] sm:p-8"
              >
                {/* Gold and Blue Top Line */}

                <div className="absolute left-0 top-0 h-0.5 w-full bg-linear-to-r from-transparent via-[#D4AF37] to-[#278DBB] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Card Glow */}

                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#278DBB]/5 blur-[70px] transition-colors duration-300 group-hover:bg-[#278DBB]/12" />

                {/* Chronicle Number */}

                <div className="relative flex items-center justify-between">
                  <span className={`text-xs font-bold tracking-[4px] ${royalGradient}`}>
                    CHRONICLE {chronicle.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]/25 bg-linear-to-br from-[#D4AF37]/10 to-[#278DBB]/10 transition-colors duration-300 group-hover:border-[#278DBB]/50">
                    <Icon
                      size={21}
                      strokeWidth={1.7}
                      className="text-[#D4AF37] transition-colors duration-300 group-hover:text-[#45B8E8]"
                    />
                  </div>
                </div>

                {/* Category */}

                <p
                  className={`relative mt-8 text-[10px] font-semibold uppercase tracking-[4px] ${blueGoldGradient}`}
                >
                  {chronicle.category}
                </p>

                {/* Title */}

                <h3
                  className={`relative mt-3 text-2xl font-black leading-tight sm:text-3xl ${
                    index % 2 === 0 ? royalGradient : blueGoldGradient
                  }`}
                >
                  {chronicle.title}
                </h3>

                {/* Description */}

                <p className="relative mt-5 text-sm leading-7 text-[#9AAEC3] sm:text-base sm:leading-8">
                  {chronicle.description}
                </p>

                {/* Read More */}

                <button
                  type="button"
                  className={`relative mt-7 inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3 ${royalGradient}`}
                >
                  Read Chronicle
                  <ArrowRight size={17} />
                </button>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Message */}

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center sm:mt-20"
        >
          <div className="mx-auto h-px w-24 bg-linear-to-r from-[#D4AF37] to-[#278DBB]" />

          <h3 className="mt-7 text-2xl font-black sm:text-3xl">
            <span className="text-white">Every Kingdom Has </span>
            <span className={royalGradient}>A Story.</span>
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#9AAEC3] sm:text-base">
            This is only the beginning. The next chapter will be written with
            the citizens of Curved Kingdom.
          </p>

          <div className="mx-auto mt-8 h-px w-16 bg-linear-to-r from-[#278DBB] to-[#D4AF37]" />
        </motion.div>
      </div>
    </section>
  );
}