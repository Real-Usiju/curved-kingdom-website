"use client";

import { motion } from "framer-motion";
import {
  Crown,
  Users,
  Rocket,
  Landmark,
  Lightbulb,
} from "lucide-react";

const pillars = [
  {
    title: "Royal Identity",
    subtitle: "The First Pillar",
    description:
      "Build a unique digital identity that represents your purpose, achievements and values inside Curved Kingdom.",
    icon: Crown,
  },
  {
    title: "Meaningful Connections",
    subtitle: "The Second Pillar",
    description:
      "Create genuine relationships, build communities and connect with citizens across the Kingdom.",
    icon: Users,
  },
  {
    title: "Growth & Opportunity",
    subtitle: "The Third Pillar",
    description:
      "Discover opportunities, develop your talents and unlock your potential in the Kingdom.",
    icon: Rocket,
  },
  {
    title: "Legacy",
    subtitle: "The Fourth Pillar",
    description:
      "Every contribution becomes part of history and inspires generations that follow.",
    icon: Landmark,
  },
  {
    title: "Innovation",
    subtitle: "The Fifth Pillar",
    description:
      "Transform ideas into meaningful creations that strengthen the future of Curved Kingdom.",
    icon: Lightbulb,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[#050505] py-24"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="
            absolute
            left-1/2
            top-24
            h-125
            w-125
            -translate-x-1/2
            rounded-full
            bg-yellow-500
            blur-[180px]
          "
        />

      </div>

      <div className="relative mx-auto max-w-4xl px-6">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center"
        >

          <p className="uppercase tracking-[8px] text-yellow-400">
            The Foundations
          </p>

          <h2 className="mt-5 text-4xl font-black text-white md:text-6xl">
            OF CURVED KINGDOM
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Every great kingdom is built upon strong foundations. These five
            royal pillars define every experience inside Curved Kingdom.
          </p>

        </motion.div>

        {/* Feature Cards */}

        <div className="mt-20 space-y-8">
                  {pillars.slice(0, 2).map((pillar, index) => {
          const Icon = pillar.icon;

          return (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                scale: 1.01,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-4xl
                border
                border-yellow-500/20
                bg-linear-to-br
                from-[#111111]
                to-[#1a1a1a]
                p-8
                shadow-[0_0_40px_rgba(255,200,0,0.08)]
                transition-all
                duration-500
                hover:border-yellow-400
                hover:shadow-[0_0_45px_rgba(255,200,0,0.25)]
              "
            >
              {/* Top Glow */}

              <div className="absolute left-0 top-0 h-1 w-full bg-linear-to-r from-transparent via-yellow-400 to-transparent" />

              {/* Icon */}

              <div className="flex justify-center">

                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                  }}
                  className="
                    flex
                    h-24
                    w-24
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-yellow-500/30
                    bg-yellow-500/10
                  "
                >
                  <Icon
                    size={46}
                    className="text-yellow-400"
                  />
                </motion.div>

              </div>

              {/* Badge */}

              <div className="mt-6 text-center">

                <span
                  className="
                    rounded-full
                    border
                    border-yellow-500/30
                    bg-yellow-500/10
                    px-4
                    py-1
                    text-xs
                    uppercase
                    tracking-[4px]
                    text-yellow-300
                  "
                >
                  {pillar.subtitle}
                </span>

              </div>

              {/* Title */}

              <h3 className="mt-6 text-center text-3xl font-black text-white">
                {pillar.title}
              </h3>

              {/* Description */}

              <p className="mx-auto mt-5 max-w-2xl text-center leading-8 text-gray-400">
                {pillar.description}
              </p>

            </motion.div>
          );
        })}
                {pillars.slice(2).map((pillar, index) => {
          const Icon = pillar.icon;

          return (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                scale: 1.01,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-4xl
                border
                border-yellow-500/20
                bg-linear-to-br
                from-[#111111]
                to-[#1a1a1a]
                p-8
                shadow-[0_0_40px_rgba(255,200,0,0.08)]
                transition-all
                duration-500
                hover:border-yellow-400
                hover:shadow-[0_0_45px_rgba(255,200,0,0.25)]
              "
            >
              {/* Top Glow */}
              <div className="absolute left-0 top-0 h-1 w-full bg-linear-to-r from-transparent via-yellow-400 to-transparent" />

              {/* Icon */}
              <div className="flex justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                  }}
                  className="
                    flex
                    h-24
                    w-24
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-yellow-500/30
                    bg-yellow-500/10
                  "
                >
                  <Icon size={46} className="text-yellow-400" />
                </motion.div>
              </div>

              {/* Badge */}
              <div className="mt-6 text-center">
                <span
                  className="
                    rounded-full
                    border
                    border-yellow-500/30
                    bg-yellow-500/10
                    px-4
                    py-1
                    text-xs
                    uppercase
                    tracking-[4px]
                    text-yellow-300
                  "
                >
                  {pillar.subtitle}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-6 text-center text-3xl font-black text-white">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="mx-auto mt-5 max-w-2xl text-center leading-8 text-gray-400">
                {pillar.description}
              </p>
            </motion.div>
          );
        })}
        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-12 text-center"
        >
          <div
            className="
              rounded-4xl
              border
              border-yellow-500/20
              bg-linear-to-br
              from-[#111111]
              to-[#1a1a1a]
              p-10
            "
          >
            <p className="uppercase tracking-[8px] text-yellow-400">
              The Kingdom Awaits
            </p>

            <h2 className="mt-5 text-4xl font-black text-white">
              Build Your Legacy
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
              Curved Kingdom is more than an application. It is a digital
              civilization where every citizen has the opportunity to build,
              inspire, connect, and leave a lasting legacy.
            </p>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 35px rgba(255,200,0,.45)",
              }}
              whileTap={{ scale: .96 }}
              className="
                mt-10
                rounded-full
                bg-yellow-500
                px-10
                py-4
                font-bold
                text-black
                transition
                hover:bg-yellow-400
              "
            >
              Enter The Kingdom
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}