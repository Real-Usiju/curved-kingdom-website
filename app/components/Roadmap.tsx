"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Castle,
  Globe2,
  Crown,
} from "lucide-react";

const journey = [
  {
    title: "The Awakening",
    status: "Completed",
    description:
      "The vision of Curved Kingdom was born. The dream of building a digital civilization became reality.",
    icon: Sparkles,
  },
  {
    title: "The Foundation",
    status: "Current Mission",
    description:
      "Building the Kingdom's website, ecosystem, and welcoming the first citizens into the realm.",
    icon: Castle,
  },
  {
    title: "The Expansion",
    status: "Coming Soon",
    description:
      "Opening new opportunities, communities, and experiences for citizens around the world.",
    icon: Globe2,
  },
  {
    title: "The Legacy",
    status: "Future",
    description:
      "Creating a digital civilization where every contribution becomes part of history.",
    icon: Crown,
  },
];

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="relative bg-[#050505] py-32 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-24 h-125 w-125 -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[8px] text-yellow-400">
            The Royal Journey
          </p>

          <h2 className="mt-5 text-4xl md:text-6xl font-black text-white">
            The Rise of Curved Kingdom
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Every great kingdom begins with a vision.
            This is the journey from an idea to a thriving digital civilization.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {journey.map((step, index) => {

            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
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
                  hover:border-yellow-400
                  hover:shadow-[0_0_35px_rgba(255,200,0,0.25)]
                "
              >

                <div className="
                  mx-auto
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-full
                  bg-yellow-500/10
                  transition
                  group-hover:bg-yellow-500/20
                ">
                  <Icon
                    size={40}
                    className="text-yellow-400 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <p className="mt-6 text-center text-sm uppercase tracking-widest text-yellow-400">
                  {step.status}
                </p>

                <h3 className="mt-3 text-center text-2xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-5 text-center leading-7 text-gray-400">
                  {step.description}
                </p>

              </motion.div>
            );

          })}

        </div>

      </div>
    </section>
  );
}