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
    description:
      "Build a unique digital identity that reflects your values, achievements, and purpose within Curved Kingdom.",
    icon: Crown,
  },
  {
    title: "Meaningful Connections",
    description:
      "Create genuine relationships, strengthen communities, and collaborate with citizens across the Kingdom.",
    icon: Users,
  },
  {
    title: "Growth & Opportunity",
    description:
      "Discover opportunities, develop your talents, and expand your influence throughout the ecosystem.",
    icon: Rocket,
  },
  {
    title: "Legacy",
    description:
      "Every contribution becomes part of your story, leaving an impact that future citizens will remember.",
    icon: Landmark,
  },
  {
    title: "Innovation",
    description:
      "Turn ideas into meaningful creations that inspire progress and strengthen the Kingdom.",
    icon: Lightbulb,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative bg-[#050505] py-28 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-125 h-125 rounded-full bg-yellow-500/10 blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="uppercase tracking-[8px] text-yellow-400">
            The Foundations
          </p>

          <h2 className="mt-5 text-4xl md:text-6xl font-black text-white">
            OF CURVED KINGDOM
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-gray-400 text-lg leading-8">
            Every great kingdom stands upon strong foundations.
            Curved Kingdom is built on timeless principles that empower
            every citizen to connect, grow, innovate, and leave a legacy.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-5">

          {pillars.map((pillar, index) => {

            const Icon = pillar.icon;

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                className="
                  group
                  rounded-3xl
                  border
                  border-yellow-500/20
                  bg-white/5
                  backdrop-blur-xl
                  p-8
                  transition-all
                  duration-300
                  hover:border-yellow-400
                  hover:shadow-[0_0_35px_rgba(255,200,0,0.25)]
                "
              >
                <div
                  className="
                    mx-auto
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    bg-yellow-500/10
                    group-hover:bg-yellow-500/20
                    transition
                  "
                >
                  <Icon
                    size={38}
                    className="text-yellow-400 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <h3 className="mt-8 text-center text-2xl font-bold text-white">
                  {pillar.title}
                </h3>

                <p className="mt-5 text-center text-gray-400 leading-7">
                  {pillar.description}
                </p>
              </motion.div>
            );

          })}

        </div>

      </div>
    </section>
  );
}