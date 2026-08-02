"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="vision"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
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
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/kingdom-bg.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Golden Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute w-125 h-125 rounded-full bg-yellow-500/20 blur-[120px]"
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="
relative
z-10
text-center
px-6
flex
flex-col
items-center
pt-24
md:pt-28
"
      >
        {/* Logo */}
        <motion.div
  animate={{
    scale: [0.95, 1.08, 1],
    rotate: [0, 1, -1, 0],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="flex justify-center"
>
  <Image
    src="/curved-kingdom-logo.png"
    width={200}
    height={200}
    alt="Curved Kingdom Logo"
    className="mx-auto"
  />
</motion.div>
       

        {/* Welcome */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 uppercase tracking-[8px] text-yellow-400 text-sm md:text-base"
        >
          Welcome To
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-4 text-5xl md:text-7xl font-black text-white leading-tight"
        >
          CURVED
          <br />
          <span className="text-yellow-400">KINGDOM</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-8 text-2xl md:text-3xl font-semibold text-yellow-300"
        >
          The Future Belongs To Those Who Build It
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-8"
        >
          Curved Kingdom is more than a social platform.
          <br />
          It is a digital ecosystem where every citizen builds an identity,
          creates meaningful connections, shares ideas, discovers
          opportunities, and leaves a legacy that inspires generations.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mt-12 flex flex-wrap justify-center gap-5"
        >
          <button
            className="
              bg-yellow-500
              hover:bg-yellow-400
              text-black
              px-10
              py-4
              rounded-full
              font-bold
              transition
              shadow-[0_0_30px_rgba(255,200,0,0.45)]
            "
          >
            Enter The Kingdom
          </button>

          <button
            className="
              border-2
              border-yellow-500
              hover:bg-yellow-500
              hover:text-black
              text-yellow-400
              px-10
              py-4
              rounded-full
              transition
            "
          >
            Discover The Vision
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
          className="mt-20 text-yellow-400"
        >
          <p className="text-sm tracking-[5px] uppercase">
            Scroll To Explore
          </p>

          <div className="text-3xl mt-3">
            ↓
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}