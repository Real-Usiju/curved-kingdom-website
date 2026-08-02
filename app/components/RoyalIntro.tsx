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
        className="fixed inset-0 z-9999 overflow-hidden bg-black flex flex-col items-center justify-center"
      >

        {/* Golden particles */}
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-yellow-400"
           initial={{
  opacity: 0,
  x: (i % 5) * 90 - 180,
  y: (i % 6) * 70 - 180,
}}

animate={{
  opacity: [0, 1, 0],
  y: -350,
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
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="drop-shadow-[0_0_60px_rgba(255,200,0,0.9)]"
        >
          <Image
            src="/curved-kingdom-logo.png"
            alt="Curved Kingdom"
            width={240}
            height={240}
            priority
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
          className="mt-10 text-center text-2xl md:text-3xl font-bold text-yellow-400"
        >
          {text}
        </motion.h2>


        {/* Royal loading bar */}
        <div className="mt-10 w-72 h-2 rounded-full bg-neutral-800 overflow-hidden">
          <motion.div
            className="h-full bg-yellow-400 shadow-[0_0_20px_rgba(255,200,0,1)]"
            initial={{
              width: "0%",
            }}
            animate={{
              width: "100%",
            }}
            transition={{
              duration: 6,
            }}
          />
        </div>

      </motion.div>
    </AnimatePresence>
  );
}