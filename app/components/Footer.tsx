"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import {
  Crown,
  Mail,
  Globe,
  ArrowUp,
} from "lucide-react";

import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";

const royalGradient =
  "bg-gradient-to-r from-[#D4AF37] via-[#278DBB] to-[#D4AF37] bg-clip-text text-transparent";

const blueGoldGradient =
  "bg-gradient-to-r from-[#278DBB] via-[#D4AF37] to-[#278DBB] bg-clip-text text-transparent";

const cardStyle =
  "w-full rounded-3xl border border-[#D4AF37]/20 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-300 hover:border-[#278DBB]/50 hover:shadow-[0_0_35px_rgba(39,141,187,0.12)] sm:p-8";

const socialButtonStyle =
  "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#020914]/80 text-[#D4AF37] transition-all duration-300 hover:border-[#278DBB]/70 hover:bg-[#278DBB]/10 hover:text-[#45B8E8]";

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();

  const entrance = (delay = 0) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: {
      duration: shouldReduceMotion ? 0 : 0.6,
      delay: shouldReduceMotion ? 0 : delay,
    },
  });

  return (
    <footer className="relative overflow-hidden border-t border-[#D4AF37]/20 bg-[#020914]">
      {/* Animated Background */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  scale: [1, 1.15, 1],
                  opacity: [0.05, 0.13, 0.05],
                }
          }
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-175 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[220px]"
        />

        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#278DBB]/8 blur-[150px]" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#D4AF37]/6 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Royal Divider */}

        <motion.div
          initial={shouldReduceMotion ? false : { width: 0 }}
          whileInView={{ width: 180 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          className="mx-auto h-0.5 max-w-full bg-linear-to-r from-[#D4AF37] via-[#278DBB] to-[#D4AF37]"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:gap-8 md:grid-cols-2 xl:grid-cols-4">
          {/* Brand */}

          <motion.div {...entrance(0)} className={cardStyle}>
            <div className="flex items-center gap-4">
              <div className="relative flex h-16 w-16 shrink-0 items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-linear-to-br from-[#D4AF37]/20 to-[#278DBB]/20 blur-xl" />

                <Image
                  src="/curved-kingdom-logo.png"
                  alt="Curved Kingdom logo"
                  width={60}
                  height={60}
                  className="relative h-14 w-14 object-contain sm:h-16 sm:w-16"
                />
              </div>

              <div className="min-w-0">
                <h3 className={`text-xl font-bold sm:text-2xl ${royalGradient}`}>
                  Curved Kingdom
                </h3>

                <p className="mt-1 text-xs uppercase tracking-[2px] text-[#9AAEC3]">
                  Digital Civilization
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-8 text-[#9AAEC3]">
              Curved Kingdom is a digital civilization where identity,
              purpose, innovation and legacy come together to build the
              future.
            </p>
          </motion.div>

          {/* Kingdom Navigation */}

          <motion.div {...entrance(0.1)} className={cardStyle}>
            <h4 className={`text-xl font-bold ${blueGoldGradient}`}>
              Kingdom Navigation
            </h4>

            <div className="mt-6 flex flex-col items-start gap-4">
              <a
                href="#vision"
                className="text-[#9AAEC3] transition-colors hover:text-[#45B8E8]"
              >
                Vision
              </a>

              <a
                href="#features"
                className="text-[#9AAEC3] transition-colors hover:text-[#45B8E8]"
              >
                Foundations
              </a>

              <a
                href="#roadmap"
                className="text-[#9AAEC3] transition-colors hover:text-[#45B8E8]"
              >
                Royal Journey
              </a>

              <a
                href="#community"
                className="text-[#9AAEC3] transition-colors hover:text-[#45B8E8]"
              >
                Community
              </a>

              <Link
                href="/register"
                className={`mt-2 font-semibold transition-opacity hover:opacity-80 ${royalGradient}`}
              >
                Forge Your Kingdom
              </Link>
            </div>
          </motion.div>

          {/* Social Platforms */}

          <motion.div {...entrance(0.2)} className={cardStyle}>
            <h4 className={`text-xl font-bold ${royalGradient}`}>
              Follow The Kingdom
            </h4>

            <p className="mt-5 text-sm leading-7 text-[#9AAEC3]">
              Stay connected with every royal announcement and follow the
              growth of Curved Kingdom across our official platforms.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <motion.a
                whileHover={shouldReduceMotion ? undefined : { scale: 1.1 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
                href="https://facebook.com/CurvedKingdomOfficial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Curved Kingdom on Facebook"
                className={socialButtonStyle}
              >
                <FaFacebook size={20} />
              </motion.a>

              <motion.a
                whileHover={shouldReduceMotion ? undefined : { scale: 1.1 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
                href="https://instagram.com/CurvedKingdomOfficial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Curved Kingdom on Instagram"
                className={socialButtonStyle}
              >
                <FaInstagram size={20} />
              </motion.a>

              <motion.a
                whileHover={shouldReduceMotion ? undefined : { scale: 1.1 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
                href="https://tiktok.com/@CurvedKingdomOfficial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Curved Kingdom on TikTok"
                className={socialButtonStyle}
              >
                <FaTiktok size={20} />
              </motion.a>

              <motion.a
                whileHover={shouldReduceMotion ? undefined : { scale: 1.1 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
                href="https://youtube.com/@CurvedKingdomOfficial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Curved Kingdom on YouTube"
                className={socialButtonStyle}
              >
                <FaYoutube size={20} />
              </motion.a>

              <motion.a
                whileHover={shouldReduceMotion ? undefined : { scale: 1.1 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
                href="https://linkedin.com/company/curvedkingdom"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Curved Kingdom on LinkedIn"
                className={socialButtonStyle}
              >
                <FaLinkedinIn size={20} />
              </motion.a>

              <motion.a
                whileHover={shouldReduceMotion ? undefined : { scale: 1.1 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
                href="https://t.me/CurvedKingdomOfficial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Curved Kingdom on Telegram"
                className={socialButtonStyle}
              >
                <FaTelegramPlane size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Kingdom Information */}

          <motion.div {...entrance(0.3)} className={cardStyle}>
            <h4 className={`text-xl font-bold ${blueGoldGradient}`}>
              Kingdom Information
            </h4>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-3 text-sm text-[#9AAEC3]">
                <Mail
                  size={18}
                  className="mt-0.5 shrink-0 text-[#45B8E8]"
                />

                <a
                  href="mailto:future@curvedkingdom.com"
                  className="break-all transition-colors hover:text-[#D4AF37]"
                >
                  future@curvedkingdom.com
                </a>
              </div>

              <div className="flex items-start gap-3 text-sm text-[#9AAEC3]">
                <Globe
                  size={18}
                  className="mt-0.5 shrink-0 text-[#D4AF37]"
                />

                <span>Global Digital Civilization</span>
              </div>

              <div className="flex items-start gap-3 text-sm text-[#9AAEC3]">
                <Crown
                  size={18}
                  className="mt-0.5 shrink-0 text-[#45B8E8]"
                />

                <span>Building The Future Together</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}

        <motion.div {...entrance(0)} className="mt-20">
          <div className="h-px w-full bg-linear-to-r from-transparent via-[#D4AF37]/60 to-[#278DBB]/60" />

          <div className="mt-10 flex flex-col items-center justify-between gap-8 md:flex-row">
            {/* Left */}

            <div className="max-w-xl text-center md:text-left">
              <p className={`text-base font-semibold leading-7 sm:text-lg ${royalGradient}`}>
                &ldquo;The Kingdom is not built by one ruler. It is built by
                every citizen.&rdquo;
              </p>

              <p className="mt-3 text-sm text-[#71849A]">
                © {new Date().getFullYear()} Curved Kingdom. All Rights
                Reserved.
              </p>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm md:justify-start">
                <Link
                  href="/privacy"
                  className="text-[#71849A] transition-colors hover:text-[#45B8E8]"
                >
                  Privacy Policy
                </Link>

                <span className="text-[#52677C]">•</span>

                <Link
                  href="/terms"
                  className="text-[#71849A] transition-colors hover:text-[#D4AF37]"
                >
                  Terms of Service
                </Link>

                <span className="text-[#52677C]">•</span>

                <Link
                  href="/contact"
                  className="text-[#71849A] transition-colors hover:text-[#45B8E8]"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Center */}

            <div className="text-center">
              <p className={`text-[10px] uppercase tracking-[3px] sm:text-xs sm:tracking-[5px] ${blueGoldGradient}`}>
                Digital Civilization
              </p>

              <p className="mt-2 text-xs tracking-wide text-[#71849A]">
                Built With Vision
              </p>
            </div>

            {/* Back To Top */}

            <motion.button
              type="button"
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: 1.05,
                      boxShadow: "0 0 25px rgba(39,141,187,0.2)",
                    }
              }
              whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: shouldReduceMotion ? "auto" : "smooth",
                })
              }
              className="flex items-center gap-3 rounded-full border border-[#D4AF37]/40 bg-linear-to-r from-[#D4AF37]/8 to-[#278DBB]/8 px-6 py-3 text-sm font-semibold transition-all duration-300 hover:border-[#278DBB]/60 hover:from-[#D4AF37]/15 hover:to-[#278DBB]/15"
            >
              <ArrowUp size={18} className="text-[#45B8E8]" />

              <span className={royalGradient}>Back To Top</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}