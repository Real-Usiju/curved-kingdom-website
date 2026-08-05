"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";


export default function Hero() {
  return (
    <section
  id="vision"
  className="relative min-h-screen overflow-hidden bg-black pt-20"
>
      {/* Animated Background */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute inset-0"
      >
        <Image
          src="/kingdom-bg.jpg"
          alt="Kingdom Background"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Golden Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-85
          w-85
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-yellow-500/20
          blur-[140px]
        "
      />

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
  

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mx-auto flex w-full max-w-5xl flex-col items-center text-center"
        >
          {/* Logo */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.04, 1],
              rotate: [0, 1, -1, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-yellow-500/20 blur-3xl" />

            <Image
  src="/curved-kingdom-logo.png"
  alt="Curved Kingdom Logo"
  width={180}
  height={180}
  priority
  className="relative z-10 h-32 w-32 sm:h-40 sm:w-40 lg:h-44 lg:w-44"
/>
          </motion.div>

          {/* Welcome */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-[10px] uppercase tracking-[5px] text-yellow-400 sm:mt-8 sm:text-xs sm:tracking-[8px]"
          >
            Welcome To
          </motion.p>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
           className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            CURVED
            <br />
            <span className="text-yellow-400">
              KINGDOM
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 text-xl font-semibold text-yellow-200"
          >
            The Future Belongs To Those Who Build It
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-6 max-w-xl px-2 text-sm leading-7 text-gray-300 sm:px-0 sm:text-base sm:leading-8"
          >
            Curved Kingdom is more than a social platform.
            It is a digital ecosystem where every citizen builds an
            identity, creates meaningful connections, discovers
            opportunities, and leaves a legacy that inspires generations.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-8 flex w-full max-w-md flex-col gap-4 sm:mt-10"
          >
            <a
              href="/register"
              className="
  w-full
  rounded-full
  bg-yellow-500
  px-6
  py-4
  text-base
  font-bold
  text-black
  transition-all
  duration-300
  hover:scale-105
  hover:bg-yellow-400
  shadow-[0_0_30px_rgba(255,200,0,0.45)]
  sm:text-lg
"
            >
              Enter The Kingdom
            </a>

            <a
              href="#features"
              className="
  w-full
  rounded-full
  border
  border-yellow-500
  px-6
  py-4
  text-base
  font-semibold
  text-yellow-400
  transition-all
  duration-300
  hover:bg-yellow-500
  hover:text-black
  sm:text-lg
"
            >
              Discover The Vision
            </a>
          </motion.div>
                    {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              y: [0, 10, 0],
            }}
            transition={{
              delay: 1.8,
              duration: 2,
              repeat: Infinity,
            }}
            className="mt-12 flex flex-col items-center sm:mt-16"
          >
            <p className="mb-3 text-[10px] uppercase tracking-[4px] text-yellow-400 sm:text-xs sm:tracking-[6px]">
              Scroll To Explore
            </p>

            <div className="flex h-12 w-7 justify-center rounded-full border-2 border-yellow-500 sm:h-14 sm:w-8">
              <motion.div
                animate={{
                  y: [4, 20, 4],
                }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                }}
                className="mt-1 h-3 w-3 rounded-full bg-yellow-400"
              />
            </div>

            <ChevronDown
              size={22}
              className="mt-4 text-yellow-400"
            />
          </motion.div>

        </motion.div>
            
    </div>
  </section>
  );
}