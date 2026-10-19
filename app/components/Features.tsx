"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Crown,
  Users,
  Rocket,
  Landmark,
  Lightbulb,
} from "lucide-react";

const pillars = [
  {
    title: "Royal Identity",
    subtitle: "The First Pillar",
    description:
      "Build a unique digital identity that represents your purpose, achievements and values inside Curved Kingdom.",
    icon: Crown,
  },
  {
    title: "Meaningful Connections",
    subtitle: "The Second Pillar",
    description:
      "Create genuine relationships, build communities and connect with citizens across the Kingdom.",
    icon: Users,
  },
  {
    title: "Growth & Opportunity",
    subtitle: "The Third Pillar",
    description:
      "Discover opportunities, develop your talents and unlock your potential in the Kingdom.",
    icon: Rocket,
  },
  {
    title: "Legacy",
    subtitle: "The Fourth Pillar",
    description:
      "Every contribution becomes part of history and inspires generations that follow.",
    icon: Landmark,
  },
  {
    title: "Innovation",
    subtitle: "The Fifth Pillar",
    description:
      "Transform ideas into meaningful creations that strengthen the future of Curved Kingdom.",
    icon: Lightbulb,
  },
];

const royalGradient =
  "bg-gradient-to-r from-[#D4AF37] via-[#278DBB] to-[#D4AF37] bg-clip-text text-transparent";

export default function Features() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[#020914] py-24"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  scale: [1, 1.2, 1],
                  opacity: [0.12, 0.25, 0.12],
                }
          }
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-24 h-125 w-125 -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[180px]"
        />

        <div className="absolute -right-40 top-1/2 h-96 w-96 rounded-full bg-[#278DBB]/10 blur-[150px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className={`text-[10px] font-semibold uppercase tracking-[4px] sm:text-xs sm:tracking-[8px] ${royalGradient}`}>
            The Foundations
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight sm:mt-5 sm:text-5xl lg:text-6xl">
            <span className="text-white">OF </span>
            <span className={royalGradient}>CURVED</span>{" "}
            <span className="bg-linear-to-r from-[#278DBB] via-[#D4AF37] to-[#278DBB] bg-clip-text text-transparent">
              KINGDOM
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl px-2 text-sm leading-7 text-[#9AAEC3] sm:mt-6 sm:px-0 sm:text-lg sm:leading-8">
            Every great kingdom is built upon strong foundations. These five
            royal pillars define every experience inside Curved Kingdom.
          </p>
        </motion.div>

        {/* Feature Cards */}

        <div className="mt-12 space-y-6 sm:mt-16 sm:space-y-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <motion.div
                key={pillar.title}
                initial={
                  shouldReduceMotion ? false : { opacity: 0, y: 50 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: shouldReduceMotion ? 0 : index * 0.12,
                }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -8,
                        scale: 1.01,
                      }
                }
                className="group relative w-full overflow-hidden rounded-3xl border border-[#D4AF37]/20 bg-white/[0.035] p-5 shadow-[0_0_25px_rgba(212,175,55,0.045)] backdrop-blur-xl transition-all duration-300 hover:border-[#278DBB]/50 hover:shadow-[0_0_35px_rgba(39,141,187,0.12)] sm:p-6 lg:p-8"
              >
                {/* Gold and Blue Top Border */}

                <div className="absolute left-0 top-0 h-px w-full bg-linear-to-r from-transparent via-[#D4AF37] to-[#278DBB]" />

                {/* Background Accent */}

                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#278DBB]/5.5 blur-[70px] transition-colors duration-300 group-hover:bg-[#278DBB]/12" />

                {/* Icon */}

                <div className="relative flex justify-center">
                  <motion.div
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : {
                            scale: [1, 1.06, 1],
                            rotate: [0, 3, -3, 0],
                          }
                    }
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex h-20 w-20 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/[0.07] transition-colors duration-300 group-hover:border-[#278DBB]/50 group-hover:bg-[#278DBB]/8 sm:h-24 sm:w-24"
                  >
                    <Icon
                      size={38}
                      strokeWidth={1.6}
                      className="text-[#D4AF37] transition-colors duration-300 group-hover:text-[#45B8E8] sm:h-11 sm:w-11"
                    />
                  </motion.div>
                </div>

                {/* Badge */}

                <div className="relative mt-6 text-center">
                  <span className="inline-block rounded-full border border-[#278DBB]/30 bg-linear-to-r from-[#D4AF37]/6 to-[#278DBB]/8 px-4 py-1 text-xs uppercase tracking-[4px] text-[#E6C75B]">
                    {pillar.subtitle}
                  </span>
                </div>

                {/* Title */}

                <h3 className={`relative mt-5 text-center text-2xl font-black sm:mt-6 sm:text-3xl ${royalGradient}`}>
                  {pillar.title}
                </h3>

                {/* Description */}

                <p className="relative mx-auto mt-4 max-w-2xl px-1 text-center text-sm leading-7 text-[#9AAEC3] sm:mt-5 sm:px-0 sm:text-base sm:leading-8">
                  {pillar.description}
                </p>

                {/* Bottom Accent */}

                <div className="relative mt-6 flex justify-center">
                  <div className="h-px w-12 bg-linear-to-r from-transparent via-[#278DBB] to-[#D4AF37] transition-all duration-300 group-hover:w-24" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-12 text-center"
        >
          <div className="relative w-full overflow-hidden rounded-3xl border border-[#278DBB]/25 bg-linear-to-br from-[#0A1929]/90 via-[#071321]/90 to-[#10101A]/90 p-5 shadow-[0_0_25px_rgba(39,141,187,0.06)] backdrop-blur-xl sm:p-6 lg:p-8">
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#278DBB]/[0.07] blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#D4AF37]/6 blur-[100px]" />

            <div className="relative">
              <p className={`text-xs font-semibold uppercase tracking-[5px] sm:tracking-[8px] ${royalGradient}`}>
                The Kingdom Awaits
              </p>

              <h2 className="mt-4 text-3xl font-black sm:mt-5 sm:text-4xl">
                <span className="text-white">Build Your </span>
                <span className={royalGradient}>Legacy</span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl px-2 text-sm leading-7 text-[#9AAEC3] sm:mt-6 sm:px-0 sm:text-base sm:leading-8">
                Curved Kingdom is more than an application. It is a digital
                civilization where every citizen has the opportunity to build,
                inspire, connect, and leave a lasting legacy.
              </p>

              <motion.a
                href="/register"
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        scale: 1.04,
                        boxShadow: "0 0 30px rgba(39,141,187,0.2)",
                      }
                }
                whileTap={
                  shouldReduceMotion ? undefined : { scale: 0.97 }
                }
                className="mt-8 inline-flex w-full justify-center rounded-full border border-[#D4AF37]/60 bg-linear-to-r from-[#D4AF37] via-[#E6C75B] to-[#278DBB] px-8 py-4 text-base font-bold text-[#020914] shadow-[0_5px_20px_rgba(212,175,55,0.10)] transition-all duration-300 hover:border-[#45B8E8] sm:mt-10 sm:w-auto sm:min-w-56 sm:px-10"
              >
                Enter The Kingdom
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}