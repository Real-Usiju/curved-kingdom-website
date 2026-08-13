"use client";

import { motion } from "framer-motion";
import {
  Crown,
  ScrollText,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const chronicles = [
  {
    number: "001",
    category: "THE BEGINNING",
    title: "The Birth of Curved Kingdom",
    description:
      "The foundation of a new digital civilization has begun. Curved Kingdom is being created as a place where identity, purpose, connection, innovation, and legacy can come together.",
    icon: Crown,
  },
  {
    number: "002",
    category: "THE BUILDING",
    title: "Building The Kingdom",
    description:
      "The Kingdom is under construction. Follow the journey as the ecosystem, technology, and experiences that will welcome its first citizens take shape.",
    icon: ScrollText,
  },
  {
    number: "003",
    category: "THE VISION",
    title: "The Vision Ahead",
    description:
      "Curved Kingdom is being built for a future where citizens can create, connect, discover opportunities, express their ideas, and leave a meaningful legacy.",
    icon: Sparkles,
  },
];

export default function KingdomChronicles() {
  return (
    <section
      id="chronicles"
      className="relative overflow-hidden bg-[#050505] py-24 sm:py-28 lg:py-32"
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.05, 0.12, 0.05],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-yellow-500
            blur-[180px]
            sm:h-[650px]
            sm:w-[650px]
          "
        />
      </div>

      {/* Main Container */}

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex justify-center">
            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                border
                border-yellow-500/30
                bg-yellow-500/10
                shadow-[0_0_30px_rgba(234,179,8,0.12)]
              "
            >
              <ScrollText
                size={27}
                className="text-yellow-400"
              />
            </div>
          </div>

          <p
            className="
              mt-7
              text-[10px]
              font-semibold
              uppercase
              tracking-[5px]
              text-yellow-400
              sm:text-xs
              sm:tracking-[8px]
            "
          >
            Kingdom Chronicles
          </p>

          <h2
            className="
              mt-4
              text-3xl
              font-black
              leading-tight
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            THE STORY IS BEING WRITTEN
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-gray-400
              sm:mt-6
              sm:text-lg
              sm:leading-8
            "
          >
            Follow the journey of Curved Kingdom as the vision,
            technology, and civilization take shape.
          </p>
        </motion.div>

        {/* Chronicles */}

        <div className="mt-14 grid gap-6 sm:mt-16 lg:grid-cols-3 lg:gap-8">
          {chronicles.map((chronicle, index) => {
            const Icon = chronicle.icon;

            return (
              <motion.article
                key={chronicle.number}
                initial={{
                  opacity: 0,
                  y: 70,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-yellow-500/20
                  bg-white/[0.035]
                  p-6
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-yellow-400/50
                  hover:bg-white/[0.055]
                  hover:shadow-[0_0_40px_rgba(234,179,8,0.12)]
                  sm:p-8
                "
              >
                {/* Top Gold Line */}

                <div
                  className="
                    absolute
                    left-0
                    top-0
                    h-[2px]
                    w-full
                    bg-gradient-to-r
                    from-transparent
                    via-yellow-400
                    to-transparent
                    opacity-60
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />

                {/* Chronicle Number */}

                <div className="flex items-center justify-between">
                  <span
                    className="
                      text-xs
                      font-bold
                      tracking-[4px]
                      text-yellow-500/70
                    "
                  >
                    CHRONICLE {chronicle.number}
                  </span>

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-yellow-500/20
                      bg-yellow-500/10
                    "
                  >
                    <Icon
                      size={21}
                      className="text-yellow-400"
                    />
                  </div>
                </div>

                {/* Category */}

                <p
                  className="
                    mt-8
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[4px]
                    text-yellow-400
                  "
                >
                  {chronicle.category}
                </p>

                {/* Title */}

                <h3
                  className="
                    mt-3
                    text-2xl
                    font-black
                    leading-tight
                    text-white
                    sm:text-3xl
                  "
                >
                  {chronicle.title}
                </h3>

                {/* Description */}

                <p
                  className="
                    mt-5
                    text-sm
                    leading-7
                    text-gray-400
                    sm:text-base
                    sm:leading-8
                  "
                >
                  {chronicle.description}
                </p>

                {/* Read More */}

                <button
                  type="button"
                  className="
                    mt-7
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-yellow-400
                    transition-all
                    duration-300
                    group-hover:gap-3
                  "
                >
                  Read Chronicle
                  <ArrowRight size={17} />
                </button>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Message */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mt-16 text-center sm:mt-20"
        >
          <div
            className="
              mx-auto
              h-px
              w-24
              bg-yellow-500
            "
          />

          <h3
            className="
              mt-7
              text-2xl
              font-black
              text-white
              sm:text-3xl
            "
          >
            Every Kingdom Has A Story.
          </h3>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-7
              text-gray-500
              sm:text-base
            "
          >
            This is only the beginning. The next chapter will
            be written with the citizens of Curved Kingdom.
          </p>
        </motion.div>
      </div>
    </section>
  );
}