"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const particles = [...Array(25).keys()];

export default function RoyalIntro({
  onFinish,
}: {
  onFinish: () => void;
}) {
  const [text, setText] = useState("Awakening The Kingdom...");

  useEffect(() => {
    const first = setTimeout(() => {
      setText("Forging The Royal Gates...");
    }, 1800);

    const second = setTimeout(() => {
      setText("Preparing Your Arrival...");
    }, 3600);

    const third = setTimeout(() => {
      setText("Welcome, Future Citizen.");
    }, 5000);

    const finish = setTimeout(() => {
      onFinish();
    }, 6500);

    return () => {
      clearTimeout(first);
      clearTimeout(second);
      clearTimeout(third);
      clearTimeout(finish);
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        exit={{
          opacity: 0,
          scale: 1.1,
        }}
        transition={{
          duration: 1.2,
        }}
        className="fixed inset-0 z-9999 overflow-hidden bg-black px-4 flex flex-col items-center justify-center"
      >

        {/* Golden particles */}
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.9)]"
           initial={{
  opacity: 0,
  x: (i % 5) * 90 - 180,
  y: (i % 6) * 70 - 180,
}}

animate={{
  opacity: [0, 1, 0],
  y: [-20, -450],
  x: [0, (i % 2 === 0 ? 20 : -20)],
  scale: [0.6, 1.2, 0.4],
}}
            transition={{
              duration: 4 + (i % 5),
              repeat: Infinity,
            }}
          />
        ))}


        {/* Logo */}
        <motion.div
          animate={{
  scale: [1, 1.08, 1],
  rotate: [0, 1, -1, 0],
}}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="relative drop-shadow-[0_0_80px_rgba(255,200,0,0.95)]"
        >
          <Image
  src="/curved-kingdom-logo.png"
  alt="Curved Kingdom"
  width={240}
  height={240}
  priority
  className="h-40 w-40 sm:h-52 sm:w-52 lg:h-60 lg:w-60"
/>
        </motion.div>


        {/* Text */}
        <motion.h2
          key={text}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="mt-8 px-2 text-center text-xl font-bold text-yellow-400 sm:mt-10 sm:text-2xl lg:text-3xl"
        >
          {text}
        </motion.h2>


        {/* Royal loading bar */}
        <div className="mt-8 h-2.5 w-full max-w-xs overflow-hidden rounded-full border border-yellow-500/20 bg-neutral-900 sm:mt-10 sm:max-w-sm">
          <motion.div
            className="h-full rounded-full bg-linear-to-r from-yellow-300 via-yellow-400 to-yellow-500 shadow-[0_0_30px_rgba(255,215,0,1)]"
            initial={{
              width: "0%",
            }}
            animate={{
              width: "100%",
            }}
           transition={{
  duration: 6,
  ease: "easeInOut",
}}
          />
        </div>

      </motion.div>
    </AnimatePresence>
  );
}