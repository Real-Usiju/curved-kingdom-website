"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-yellow-500/20 bg-[#050505]">

      {/* Animated Background */}

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

      <div className="relative mx-auto max-w-6xl px-6 py-24">

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 180 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto h-0.5 bg-yellow-500"
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-4">

          {/* Brand */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-yellow-500/20 bg-white/5 p-8 backdrop-blur-xl"
          >

            <div className="flex items-center gap-4">

              <div className="relative">

                <div className="absolute inset-0 rounded-full bg-yellow-500/20 blur-xl" />

                <Image
                  src="/curved-kingdom-logo.png"
                  alt="Curved Kingdom"
                  width={70}
                  height={70}
                  className="relative"
                />

              </div>

              <div>

                <h3 className="text-2xl font-bold text-yellow-400">
                  Curved Kingdom
                </h3>

                <p className="text-sm uppercase tracking-[3px] text-gray-500">
                  Digital Civilization
                </p>

              </div>

            </div>

            <p className="mt-6 leading-8 text-gray-400">
              Curved Kingdom is a digital civilization where identity,
              purpose, innovation and legacy come together to build
              the future.
            </p>

          </motion.div>
                    {/* Navigation */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl border border-yellow-500/20 bg-white/5 p-8 backdrop-blur-xl"
          >
            <h4 className="text-xl font-bold text-white">
              Kingdom Navigation
            </h4>

            <div className="mt-6 flex flex-col gap-4">

              <a
                href="#vision"
                className="text-gray-400 transition hover:text-yellow-400"
              >
                Vision
              </a>

              <a
                href="#features"
                className="text-gray-400 transition hover:text-yellow-400"
              >
                Foundations
              </a>

              <a
                href="#roadmap"
                className="text-gray-400 transition hover:text-yellow-400"
              >
                Royal Journey
              </a>

              <a
                href="#community"
                className="text-gray-400 transition hover:text-yellow-400"
              >
                Community
              </a>

              <Link
                href="/register"
                className="font-semibold text-yellow-400 transition hover:text-yellow-300"
              >
                Become A Founding Citizen
              </Link>

            </div>

          </motion.div>

          {/* Social */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl border border-yellow-500/20 bg-white/5 p-8 backdrop-blur-xl"
          >
            <h4 className="text-xl font-bold text-white">
              Follow The Kingdom
            </h4>

            <p className="mt-5 leading-7 text-gray-400">
              Stay connected with every royal announcement and follow the
              growth of Curved Kingdom across our official platforms.
            </p>

            <div className="mt-8 flex gap-4">

              <motion.a
                whileHover={{ scale: 1.15 }}
                href="https://facebook.com/CurvedKingdomOfficial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-yellow-500/30 bg-black/40 text-yellow-400 transition hover:border-yellow-400"
              >
                <FaFacebook size={20} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.15 }}
                href="https://instagram.com/CurvedKingdomOfficial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-yellow-500/30 bg-black/40 text-yellow-400 transition hover:border-yellow-400"
              >
                <FaInstagram size={20} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.15 }}
                href="https://tiktok.com/@CurvedKingdomOfficial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-yellow-500/30 bg-black/40 text-yellow-400 transition hover:border-yellow-400"
              >
                <FaTiktok size={20} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.15 }}
                href="https://youtube.com/@CurvedKingdomOfficial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-yellow-500/30 bg-black/40 text-yellow-400 transition hover:border-yellow-400"
              >
                <FaYoutube size={20} />
              </motion.a>

            </div>

          </motion.div>
                    {/* Contact */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-3xl border border-yellow-500/20 bg-white/5 p-8 backdrop-blur-xl"
          >

            <h4 className="text-xl font-bold text-white">
              Kingdom Information
            </h4>

            <div className="mt-8 space-y-6">

              <div className="flex items-center gap-3 text-gray-400">

                <Mail
                  size={18}
                  className="text-yellow-400"
                />

                <span>future@curvedkingdom.com</span>

              </div>

              <div className="flex items-center gap-3 text-gray-400">

                <Globe
                  size={18}
                  className="text-yellow-400"
                />

                <span>Global Digital Civilization</span>

              </div>

              <div className="flex items-center gap-3 text-gray-400">

                <Crown
                  size={18}
                  className="text-yellow-400"
                />

                <span>Building The Future Together</span>

              </div>

            </div>

          </motion.div>

        </div>

        {/* Bottom Section */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >

          <div className="h-px w-full bg-linear-to-r from-transparent via-yellow-500/50 to-transparent" />

          <div className="mt-10 flex flex-col items-center justify-between gap-8 md:flex-row">

            {/* Left */}

            <div className="text-center md:text-left">

              <p className="text-lg font-semibold text-yellow-400">
                "The Kingdom is not built by one ruler.
                It is built by every citizen."
              </p>

              <p className="mt-3 text-sm text-gray-500">
                © {new Date().getFullYear()} Curved Kingdom.
                All Rights Reserved.
              </p>

            </div>

            {/* Center */}

            <div className="text-center">

              <p className="text-xs uppercase tracking-[6px] text-gray-500">
                Digital Civilization • Built With Vision
              </p>

            </div>

            {/* Right */}

            <motion.button
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 25px rgba(255,200,0,0.35)",
              }}
              whileTap={{ scale: 0.96 }}
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="
                flex
                items-center
                gap-3
                rounded-full
                border
                border-yellow-500/40
                bg-yellow-500/10
                px-6
                py-3
                text-yellow-400
                transition-all
                hover:bg-yellow-500
                hover:text-black
              "
            >

              <ArrowUp size={18} />

              Back To Top

            </motion.button>

          </div>

        </motion.div>
              </div>

    </footer>
  );
}