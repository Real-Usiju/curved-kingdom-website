"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-black/70
        backdrop-blur-xl
        border-b
        border-yellow-500/20
        shadow-[0_8px_30px_rgba(0,0,0,0.45)]
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">

          <motion.div
            animate={{
              y: [0, -2, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/curved-kingdom-logo.png"
              alt="Curved Kingdom"
              width={55}
              height={55}
              className="drop-shadow-[0_0_20px_rgba(255,215,0,0.7)]"
            />
          </motion.div>

          <div>

            <h1 className="text-yellow-400 text-xl font-bold">
              Curved Kingdom
            </h1>

            <p className="text-xs text-gray-400 tracking-[0.3em]">
              DIGITAL ECOSYSTEM
            </p>

          </div>

        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10 text-white">

          <a
            href="#vision"
            className="
              transition-all
              duration-300
              hover:text-yellow-400
              hover:-translate-y-1
              hover:drop-shadow-[0_0_12px_rgba(255,215,0,0.8)]
            "
          >
            Vision
          </a>

          <a
            href="#features"
            className="
              transition-all
              duration-300
              hover:text-yellow-400
              hover:-translate-y-1
              hover:drop-shadow-[0_0_12px_rgba(255,215,0,0.8)]
            "
          >
            Foundations
          </a>

          <a
            href="#roadmap"
            className="
              transition-all
              duration-300
              hover:text-yellow-400
              hover:-translate-y-1
              hover:drop-shadow-[0_0_12px_rgba(255,215,0,0.8)]
            "
          >
            Royal Journey
          </a>

          <a
            href="#community"
            className="
              transition-all
              duration-300
              hover:text-yellow-400
              hover:-translate-y-1
              hover:drop-shadow-[0_0_12px_rgba(255,215,0,0.8)]
            "
          >
            Community
          </a>

        </div>

        {/* Desktop Button */}
        <div className="hidden lg:block">

          <Link href="/register">

            <button
              className="
                bg-yellow-500
                text-black
                px-6
                py-3
                rounded-full
                font-bold
                transition-all
                duration-300
                hover:bg-yellow-400
                hover:scale-105
                hover:shadow-[0_0_35px_rgba(255,215,0,0.7)]
                active:scale-95
              "
            >
              Become a Citizen
            </button>

          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-yellow-400"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="
            lg:hidden
            bg-black/95
            backdrop-blur-xl
            border-t
            border-yellow-500/20
          "
        >

          <div className="flex flex-col px-6 py-8 gap-6 text-white">

            <a
              href="#vision"
              onClick={() => setOpen(false)}
              className="transition hover:text-yellow-400"
            >
              Vision
            </a>

            <a
              href="#features"
              onClick={() => setOpen(false)}
              className="transition hover:text-yellow-400"
            >
              Foundations
            </a>

            <a
              href="#roadmap"
              onClick={() => setOpen(false)}
              className="transition hover:text-yellow-400"
            >
              Royal Journey
            </a>

            <a
              href="#community"
              onClick={() => setOpen(false)}
              className="transition hover:text-yellow-400"
            >
              Community
            </a>

            <Link
              href="/register"
              onClick={() => setOpen(false)}
            >
              <button
                className="
                  w-full
                  bg-yellow-500
                  text-black
                  py-3
                  rounded-full
                  font-bold
                  transition-all
                  duration-300
                  hover:bg-yellow-400
                "
              >
                Become a Citizen
              </button>
            </Link>

          </div>

        </motion.div>

      )}

    </motion.nav>
  );
}