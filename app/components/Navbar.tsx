"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, Crown, ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "Vision", href: "#vision" },
  { label: "Foundations", href: "#features" },
  { label: "Royal Journey", href: "#roadmap" },
  { label: "Community", href: "#community" },
];

const royalGradient =
  "bg-gradient-to-r from-[#D4AF37] via-[#278DBB] to-[#D4AF37] bg-clip-text text-transparent";

const blueGoldGradient =
  "bg-gradient-to-r from-[#278DBB] via-[#D4AF37] to-[#278DBB] bg-clip-text text-transparent";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = navItems
        .map((item) => document.querySelector(item.href))
        .filter((section): section is Element => section !== null);

      let currentSection = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 160 && rect.bottom > 160) {
          currentSection = `#${section.id}`;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <motion.header
        initial={reduceMotion ? false : { y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: reduceMotion ? 0 : 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-[#278DBB]/20 bg-[#020914]/95 shadow-[0_12px_45px_rgba(0,0,0,0.4)] backdrop-blur-2xl"
            : "border-b border-white/6 bg-[#020914]/75 backdrop-blur-xl"
        }`}
      >
        {/* Subtle Royal Atmosphere */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-24 -top-20 h-48 w-48 rounded-full bg-[#278DBB]/6 blur-[90px]" />
          <div className="absolute -right-24 -top-20 h-48 w-48 rounded-full bg-[#D4AF37]/5 blur-[90px]" />
        </div>

        {/* Main Navigation Bar */}

        <div className="relative mx-auto flex h-19 max-w-360 items-center justify-between px-4 sm:h-20.5 sm:px-6 lg:h-23 lg:px-10 xl:px-14">
          {/* BRAND */}

          <Link
            href="/"
            aria-label="Curved Kingdom Home"
            className="group relative flex shrink-0 items-center gap-2.5 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-[#278DBB] focus-visible:ring-offset-4 focus-visible:ring-offset-[#020914] sm:gap-3"
            onClick={closeMenu}
          >
            <div className="relative flex h-11 w-11 shrink-0 items-center justify-center sm:h-13.5 sm:w-13.5">
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-[#D4AF37]/10 to-[#278DBB]/10 transition-all duration-500 group-hover:from-[#D4AF37]/20 group-hover:to-[#278DBB]/20" />

              <div className="absolute inset-0 rounded-2xl border border-[#D4AF37]/25 transition-all duration-500 group-hover:border-[#278DBB]/60" />

              <div className="absolute inset-0.75 rounded-[13px] border border-[#278DBB]/15 transition-colors duration-500 group-hover:border-[#D4AF37]/30" />

              <Image
                src="/curved-kingdom-logo.png"
                alt="Curved Kingdom emblem"
                width={54}
                height={54}
                priority
                className="relative z-10 h-9 w-9 object-contain transition-transform duration-500 group-hover:scale-105 sm:h-12 sm:w-12"
              />
            </div>

            <div className="flex flex-col justify-center leading-none">
              <span className={`text-[19px] font-black tracking-[0.11em] sm:text-[24px] lg:text-[27px] ${royalGradient}`}>
                CURVED
              </span>

              <span className={`mt-1.5 text-[12px] font-extrabold tracking-[0.2em] sm:text-[15px] lg:text-[16px] ${blueGoldGradient}`}>
                KINGDOM
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 lg:flex xl:gap-2"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  className={`group relative rounded-full px-3.5 py-3 text-[12px] font-semibold tracking-[0.035em] transition-all duration-300 xl:px-4 xl:text-[13px] ${
                    isActive
                      ? "text-white"
                      : "text-white/65 hover:text-white"
                  }`}
                >
                  <span
                    className={`relative z-10 transition-colors duration-300 ${
                      isActive ? royalGradient : "group-hover:text-[#45B8E8]"
                    }`}
                  >
                    {item.label}
                  </span>

                  <span
                    className={`absolute inset-0 rounded-full border transition-all duration-300 ${
                      isActive
                        ? "border-[#278DBB]/25 bg-linear-to-r from-[#D4AF37]/[0.07] to-[#278DBB]/[0.07]"
                        : "border-transparent bg-white/2.5 opacity-0 group-hover:opacity-100 group-hover:border-white/6"
                    }`}
                  />

                  <span
                    className={`absolute bottom-1 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-linear-to-r from-[#D4AF37] to-[#278DBB] transition-all duration-300 ${
                      isActive
                        ? "w-6 opacity-100"
                        : "w-0 opacity-0 group-hover:w-4 group-hover:opacity-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* DESKTOP CITIZEN ENTRY */}

          <div className="hidden items-center lg:flex">
            <Link
              href="/register"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-[#D4AF37]/60 bg-linear-to-r from-[#D4AF37] via-[#E6C75B] to-[#278DBB] px-4 py-3 text-[12px] font-extrabold text-[#020914] shadow-[0_5px_24px_rgba(39,141,187,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#45B8E8]/70 hover:shadow-[0_8px_32px_rgba(212,175,55,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#45B8E8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#020914] xl:px-5 xl:text-[13px]"
            >
              <Crown size={15} strokeWidth={2.4} />

              <span>Become a Citizen</span>

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}

          <button
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((previous) => !previous)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#278DBB]/25 bg-linear-to-br from-[#D4AF37]/5 to-[#278DBB]/8 text-white transition-all duration-300 hover:border-[#D4AF37]/50 hover:bg-[#278DBB]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#45B8E8] lg:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isOpen ? "close" : "open"}
                initial={reduceMotion ? false : { opacity: 0, rotate: -45, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0, rotate: 45, scale: 0.8 }}
                transition={{ duration: reduceMotion ? 0 : 0.18 }}
                className="flex"
              >
                {isOpen ? (
                  <X size={22} className="text-[#45B8E8]" />
                ) : (
                  <Menu size={22} />
                )}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>

        {/* Animated Brand Accent */}

        <div className="relative h-px w-full overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent" />

          <motion.div
            animate={reduceMotion ? { x: "0%" } : { x: ["-100%", "300%"] }}
            transition={{
              duration: reduceMotion ? 0 : 6,
              repeat: reduceMotion ? 0 : Infinity,
              ease: "linear",
            }}
            className="absolute top-0 h-px w-1/3 bg-linear-to-r from-transparent via-[#D4AF37] to-[#278DBB]"
          />
        </div>
      </motion.header>

      {/* MOBILE NAVIGATION */}

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.2 }}
              onClick={closeMenu}
              className="fixed inset-0 z-40 bg-[#01050D]/75 backdrop-blur-sm lg:hidden"
            />

            <motion.nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: -12, scale: 0.98 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={
                reduceMotion
                  ? undefined
                  : { opacity: 0, y: -8, scale: 0.98 }
              }
              transition={{
                duration: reduceMotion ? 0 : 0.24,
                ease: "easeOut",
              }}
              className="fixed inset-x-3 top-21 z-50 max-h-[calc(100dvh-100px)] overflow-y-auto rounded-2xl border border-[#278DBB]/25 bg-[#06101F]/98 shadow-[0_25px_80px_rgba(0,0,0,0.65)] backdrop-blur-2xl sm:inset-x-5 sm:top-22.75 lg:hidden"
            >
              {/* Mobile Menu Header */}

              <div className="relative overflow-hidden border-b border-white/[0.07] px-5 pb-5 pt-6">
                <div className="pointer-events-none absolute -right-10 -top-12 h-36 w-36 rounded-full bg-[#278DBB]/10 blur-[70px]" />

                <p className={`relative text-[10px] font-bold uppercase tracking-[0.28em] ${royalGradient}`}>
                  Explore the Kingdom
                </p>

                <p className="relative mt-2 max-w-70 text-sm leading-6 text-white/55">
                  A vision for a stronger, more connected digital civilization.
                </p>

                <div className="relative mt-4 h-px w-20 bg-linear-to-r from-[#D4AF37] to-[#278DBB]" />
              </div>

              {/* Mobile Links */}

              <div className="space-y-1 p-3">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href;

                  return (
                    <motion.div
                      key={item.label}
                      initial={
                        reduceMotion ? false : { opacity: 0, x: -10 }
                      }
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: reduceMotion ? 0 : index * 0.045,
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        aria-current={isActive ? "location" : undefined}
                        className={`flex min-h-12.5 items-center justify-between rounded-xl border px-4 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#45B8E8] ${
                          isActive
                            ? "border-[#278DBB]/25 bg-linear-to-r from-[#D4AF37]/[0.07] to-[#278DBB]/8 text-white"
                            : "border-transparent text-white/75 hover:border-white/[0.07] hover:bg-white/3 hover:text-white"
                        }`}
                      >
                        <span className={isActive ? royalGradient : ""}>
                          {item.label}
                        </span>

                        <ArrowUpRight
                          size={16}
                          className={
                            isActive
                              ? "text-[#45B8E8]"
                              : "text-white/30"
                          }
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Mobile Citizen Entry */}

              <div className="border-t border-white/[0.07] p-4">
                <Link
                  href="/register"
                  onClick={closeMenu}
                  className="flex min-h-12.5 w-full items-center justify-center gap-2 rounded-xl border border-[#D4AF37]/50 bg-linear-to-r from-[#D4AF37] via-[#E6C75B] to-[#278DBB] px-5 text-sm font-extrabold text-[#020914] transition-all duration-200 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#45B8E8]"
                >
                  <Crown size={17} strokeWidth={2.4} />

                  <span>Become a Citizen</span>

                  <ArrowUpRight size={16} />
                </Link>

                <p className={`mt-4 text-center text-[10px] font-semibold tracking-[0.18em] ${blueGoldGradient}`}>
                  YOUR KINGDOM. YOUR LEGACY.
                </p>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}