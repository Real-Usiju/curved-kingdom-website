"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown, Crown, Sparkles } from "lucide-react";

const royalGradient =
  "bg-gradient-to-r from-[#D4AF37] via-[#278DBB] to-[#D4AF37] bg-clip-text text-transparent";

const blueGoldGradient =
  "bg-gradient-to-r from-[#278DBB] via-[#D4AF37] to-[#278DBB] bg-clip-text text-transparent";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const entrance = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduceMotion ? 0 : 0.8,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <section
      id="vision"
      className="relative isolate min-h-screen overflow-hidden bg-[#020914] pt-24 sm:pt-28"
    >
      {/* Background Image */}

      <motion.div
        initial={false}
        animate={reduceMotion ? { scale: 1 } : { scale: [1, 1.055, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 -z-30"
      >
        <Image
          src="/kingdom-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Deep Kingdom Blue Overlays */}

      <div className="absolute inset-0 -z-20 bg-[#020914]/75" />

      <div className="absolute inset-0 -z-20 bg-linear-to-b from-[#020914]/50 via-[#020914]/35 to-[#020914]" />

      <div className="absolute inset-0 -z-20 bg-linear-to-r from-[#020914]/55 via-transparent to-[#020914]/55" />

      {/* Royal Gold and Crystal Blue Glows */}

      <motion.div
        animate={
          reduceMotion
            ? { opacity: 0.2 }
            : { opacity: [0.13, 0.25, 0.13], scale: [1, 1.12, 1] }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-[36%] -z-10 h-80 w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/15 blur-[110px] sm:h-120 sm:w-120 sm:blur-[150px]"
      />

      <div className="pointer-events-none absolute -right-32 top-1/4 -z-10 h-75 w-75 rounded-full bg-[#278DBB]/15 blur-[120px] sm:h-105 sm:w-105" />

      <div className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-70 w-70 rounded-full bg-[#278DBB]/10 blur-[110px]" />

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-linear-to-r from-transparent via-[#D4AF37]/50 to-[#278DBB]/50" />

      {/* Main Hero Content */}

      <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-360 flex-col items-center justify-center px-5 pb-14 pt-10 text-center sm:min-h-[calc(100vh-7rem)] sm:px-8 sm:pb-20 lg:px-12">
        {/* Intro Badge */}

        <motion.div
          {...entrance(0.1)}
          className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#D4AF37]/25 bg-[#020914]/50 px-4 py-2.5 backdrop-blur-md sm:mb-7 sm:px-5"
        >
          <Sparkles size={14} className="text-[#45B8E8]" />

          <span className={`text-[9px] font-bold uppercase tracking-[0.23em] sm:text-[11px] sm:tracking-[0.3em] ${royalGradient}`}>
            A New Era of Digital Civilization
          </span>

          <span className="h-1.5 w-1.5 rounded-full bg-[#278DBB]" />
        </motion.div>

        {/* Kingdom Emblem */}

        <motion.div
          {...entrance(0.2)}
          className="relative mb-5 sm:mb-7"
        >
          <motion.div
            animate={
              reduceMotion
                ? {}
                : { y: [0, -7, 0], rotate: [0, 1, -1, 0] }
            }
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="relative flex h-28 w-28 items-center justify-center sm:h-36 lg:h-41.25 lg:w-41.25"
          >
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-[#D4AF37]/15 to-[#278DBB]/15 blur-2xl" />

            <div className="absolute inset-1 rounded-full border border-[#D4AF37]/25" />

            <div className="absolute inset-3 rounded-full border border-[#278DBB]/30" />

            <Image
              src="/curved-kingdom-logo.png"
              alt="Curved Kingdom emblem"
              width={165}
              height={165}
              priority
              className="relative z-10 h-26 w-26 object-contain drop-shadow-[0_0_24px_rgba(39,141,187,0.2)] sm:h-33.75 smsm:w-33.75g:h-[150px] lg:w-37.5"
            />
          </motion.div>
        </motion.div>

        {/* Welcome */}

        <motion.p
          {...entrance(0.3)}
          className={`text-[10px] font-semibold uppercase tracking-[0.45em] sm:text-xs sm:tracking-[0.6em] ${royalGradient}`}
        >
          Welcome to
        </motion.p>

        {/* Kingdom Name */}

        <motion.h1
          {...entrance(0.4)}
          className="mt-4 flex flex-col items-center leading-[0.88]"
        >
          <span className={`bg-linear-to-r from-[#D4AF37] via-[#45B8E8] to-[#D4AF37] bg-clip-text text-[clamp(3.5rem,10vw,7.6rem)] font-black tracking-[-0.065em] text-transparent`}>
            CURVED
          </span>

          <span className={`mt-3 bg-linear-to-r from-[#278DBB] via-[#D4AF37] to-[#278DBB] bg-clip-text text-[clamp(2.35rem,7vw,5.1rem)] font-extrabold tracking-[0.12em] text-transparent sm:mt-4`}>
            KINGDOM
          </span>
        </motion.h1>

        {/* Royal Divider */}

        <motion.div
          {...entrance(0.5)}
          className="mt-7 flex items-center gap-3 sm:mt-8"
        >
          <span className="h-px w-9 bg-linear-to-r from-transparent to-[#D4AF37]/80 sm:w-14" />

          <Crown size={15} className="text-[#D4AF37]" />

          <span className="h-px w-9 bg-linear-to-l from-transparent to-[#278DBB]/80 sm:w-14" />
        </motion.div>

        {/* Main Message */}

        <motion.h2
          {...entrance(0.6)}
          className="mt-5 max-w-3xl text-xl font-bold leading-snug tracking-tight text-white sm:mt-6 sm:text-3xl lg:text-4xl"
        >
          The Future Belongs to Those
          <span className={`mt-1 block ${royalGradient}`}>
            Who Build It.
          </span>
        </motion.h2>

        {/* Description */}

        <motion.p
          {...entrance(0.7)}
          className="mt-5 max-w-2xl px-1 text-sm leading-7 text-white/70 sm:mt-6 sm:text-base sm:leading-8 lg:text-[17px]"
        >
          More than a social platform. A world where citizens build their
          identity, connect through shared ambition, unlock opportunities, and
          create a legacy that reaches beyond themselves.
        </motion.p>

        {/* Kingdom Pillars */}

        <motion.div
          {...entrance(0.8)}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:mt-7 sm:gap-x-8"
        >
          {["Identity", "Community", "Opportunity", "Legacy"].map(
            (pillar, index) => (
              <div key={pillar} className="flex items-center gap-2">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    index % 2 === 0
                      ? "bg-[#D4AF37]"
                      : "bg-[#278DBB]"
                  }`}
                />

                <span
                  className={`text-[10px] font-semibold uppercase tracking-[0.14em] sm:text-[11px] sm:tracking-[0.18em] ${
                    index % 2 === 0
                      ? royalGradient
                      : blueGoldGradient
                  }`}
                >
                  {pillar}
                </span>
              </div>
            ),
          )}
        </motion.div>

        {/* Action Buttons */}

        <motion.div
          {...entrance(0.9)}
          className="mt-8 flex w-full max-w-110 flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:justify-center"
        >
          <a
            href="/register"
            className="group inline-flex min-h-13.5 items-center justify-center gap-3 rounded-full border border-[#D4AF37]/70 bg-linear-to-r from-[#D4AF37] via-[#E6C75B] to-[#278DBB] px-7 py-4 text-sm font-extrabold text-[#020914] shadow-[0_8px_30px_rgba(39,141,187,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(212,175,55,0.2)] sm:min-w-53.75 sm:text-base"
          >
            <Crown size={17} />

            <span>Forge Your Kingdom</span>

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

          <a
            href="#features"
            className="group inline-flex min-h-13.5 items-center justify-center gap-3 rounded-full border border-[#278DBB]/50 bg-[#020914]/60 px-7 py-4 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D4AF37]/60 hover:bg-linear-to-r hover:from-[#D4AF37]/10 hover:to-[#278DBB]/10 sm:min-w-53.75 sm:text-base"
          >
            <span className={blueGoldGradient}>Discover Our Vision</span>

            <ArrowRight
              size={17}
              className="text-[#45B8E8] transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>

        {/* Supporting Message */}

        <motion.p
          {...entrance(1)}
          className="mt-5 max-w-md text-[10px] leading-5 text-white/45 sm:mt-6 sm:text-xs"
        >
          A community shaped by its citizens. A future built together.
        </motion.p>

        {/* Scroll Indicator */}

        <motion.a
          href="#features"
          aria-label="Scroll to discover Curved Kingdom"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={
            reduceMotion
              ? { opacity: 1 }
              : { opacity: 1, y: [0, 5, 0] }
          }
          transition={{
            opacity: {
              delay: reduceMotion ? 0 : 1.2,
              duration: 0.6,
            },
            y: {
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="mt-8 flex flex-col items-center gap-2 text-white/40 transition-colors hover:text-[#45B8E8] sm:mt-10"
        >
          <span className={`text-[9px] font-semibold uppercase tracking-[0.28em] sm:text-[10px] ${blueGoldGradient}`}>
            Scroll to explore
          </span>

          <div className="flex h-9 w-6 justify-center rounded-full border border-white/25 p-1.5">
            <motion.span
              animate={
                reduceMotion
                  ? {}
                  : { y: [0, 9, 0], opacity: [0.9, 0.35, 0.9] }
              }
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-2 w-1 rounded-full bg-linear-to-b from-[#D4AF37] to-[#278DBB]"
            />
          </div>

          <ChevronDown size={17} className="text-[#D4AF37]" />
        </motion.a>
      </div>
    </section>
  );
}