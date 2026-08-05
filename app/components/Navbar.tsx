"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X, Crown } from "lucide-react";

const navItems = [
  { label: "Vision", href: "#vision" },
  { label: "Foundations", href: "#features" },
  { label: "Royal Journey", href: "#roadmap" },
  { label: "Community", href: "#community" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#vision");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-500
        backdrop-blur-2xl
        border-b
        ${
          scrolled
            ? "bg-black/90 border-yellow-500/30 shadow-[0_10px_40px_rgba(0,0,0,0.75)]"
            : "bg-black/55 border-yellow-500/15"
        }
      `}
    >

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}

        <Link
  href="/"
  onClick={() => setOpen(false)}
  className="flex items-center gap-4"
>
          <motion.div
            whileHover={{
              rotate: 5,
              scale: 1.08,
            }}
            animate={{
              y: [0, -2, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="relative"
          >

            <div className="absolute inset-0 rounded-full bg-yellow-500/20 blur-xl" />

            <Image
  src="/curved-kingdom-logo.png"
  alt="Curved Kingdom"
  width={54}
  height={54}
  className="relative h-12 w-12 sm:h-14 sm:w-14"
/>

          </motion.div>

          <div>

            <h1 className="text-xl font-bold text-yellow-400">
              Curved Kingdom
            </h1>

            <p className="text-[11px] uppercase tracking-[4px] text-gray-500">
              Digital Civilization
            </p>

          </div>

        </Link>
                {/* Desktop Navigation */}

        <div className="hidden items-center gap-10 lg:flex">

          {navItems.map((item) => (

            <a
              key={item.href}
              href={item.href}
              onClick={() => setActive(item.href)}
              className="
  group
  relative
  flex
  items-center
  gap-2
  rounded-xl
  px-3
  py-2
  text-sm
  font-medium
  text-gray-300
  transition-all
  duration-300
  hover:bg-yellow-500/5
  hover:text-yellow-400
"
            >

              {/* Active Crown */}

              {active === item.href && (

                <motion.div
                  layoutId="active-crown"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-yellow-400"
                >
                  <Crown size={14} />
                </motion.div>

              )}

              <span>{item.label}</span>

              {/* Animated Underline */}

              {active === item.href && (

                <motion.div
                  layoutId="navbar-indicator"
                  className="
                    absolute
                    -bottom-4.5
                    left-0
                    h-0.75
                    w-full
                    rounded-full
                    bg-yellow-400
                    shadow-[0_0_12px_rgba(250,204,21,0.9)]
                  "
                />

              )}

            </a>

          ))}

        </div>

        {/* Desktop Button */}

        <div className="hidden lg:block">

          <Link href="/register">

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(250,204,21,0.45)",
              }}
              whileTap={{ scale: 0.96 }}
              className="
                rounded-full
                border
                border-yellow-400
                bg-linear-to-r
                from-yellow-400
                to-yellow-500
                px-7
                py-3
                font-semibold
                text-black
                transition-all
              "
            >
              Become a Citizen
            </motion.button>

          </Link>

        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setOpen(!open)}
          className="
            rounded-xl
            border
            border-yellow-500/30
            bg-yellow-500/10
            p-2.5
            text-yellow-400
            transition
            hover:bg-yellow-500/20
            lg:hidden
          "
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>
            {/* Mobile Menu */}

      {open && (

        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -25 }}
          transition={{ duration: 0.35 }}
          className="
            border-t
            border-yellow-500/20
            bg-black/95
            backdrop-blur-2xl
            lg:hidden
          "
        >

          <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 sm:px-6 lg:px-8 py-6">
            {navItems.map((item) => (

              <a
                key={item.href}
                href={item.href}
                onClick={() => {
                  setActive(item.href);
                  setOpen(false);
                }}
               className={`
  flex
  items-center
  gap-3
  rounded-2xl
  border
  px-5
  py-4
  text-base
  font-medium
  transition-all
  duration-300
  ${
    active === item.href
      ? "border-yellow-500/40 bg-yellow-500/10 text-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.15)]"
      : "border-transparent text-gray-300 hover:border-yellow-500/20 hover:bg-white/5 hover:text-yellow-400"
  }
`}
              >

                {active === item.href && (
                  <Crown size={18} />
                )}

                <span>{item.label}</span>

              </a>

            ))}

            <Link
              href="/register"
              onClick={() => setOpen(false)}
              className="mt-4"
            >

              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  w-full
                  rounded-full
                  bg-linear-to-r
                  from-yellow-400
                  to-yellow-500
                  py-4
                  font-bold
                  text-black
                  shadow-[0_0_25px_rgba(250,204,21,0.35)]
                "
              >
                Become a Citizen
              </motion.button>

            </Link>

          </div>

        </motion.div>

      )}

    </motion.nav>
  );
}