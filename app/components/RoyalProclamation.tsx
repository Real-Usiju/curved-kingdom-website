"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const proclamations = [
  "/royal-proclamation-001.png",
  "/royal-proclamation-002.png",
  "/royal-proclamation-003.png",
  "/royal-proclamation-004.png",
];

export default function RoyalProclamation() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % proclamations.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="overflow-hidden bg-[#050505] py-20">

      <div className="mx-auto max-w-6xl px-4">

        <motion.div
          animate={{
            rotate: [-0.5, 0.5, -0.5],
            x: [0, 3, 0, -3, 0],
            boxShadow: [
              "0 0 30px rgba(255,200,0,.20)",
              "0 0 65px rgba(255,200,0,.55)",
              "0 0 30px rgba(255,200,0,.20)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            relative
            overflow-hidden
            rounded-4xl
            border-2
            border-yellow-500/50
            bg-black
            p-3
          "
        >

          {/* Moving Golden Shine */}

          <motion.div
            animate={{
              x: ["-120%", "120%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              inset-y-0
              w-24
              bg-linear-to-r
              from-transparent
              via-yellow-400/25
              to-transparent
              blur-xl
              z-10
            "
          />

          {/* Announcement Image */}

          <div
            className="
              overflow-hidden
              rounded-3xl
              border
              border-yellow-400/30
            "
          >
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={proclamations[current]}
                alt="Royal Announcement"
                width={1600}
                height={900}
                priority
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>

          {/* Slide Indicators */}

          <div className="mt-6 flex justify-center gap-3">

            {proclamations.map((_, index) => (

              <motion.div
                key={index}
                animate={{
                  width: current === index ? 36 : 10,
                  opacity: current === index ? 1 : 0.35,
                }}
                transition={{ duration: 0.35 }}
                className="h-2 rounded-full bg-yellow-400"
              />

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
}