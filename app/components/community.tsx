"use client";

import { motion } from "framer-motion";
import { Crown, Users, Globe2 } from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Crown,
    title: "One Kingdom",
    description:
      "Every citizen belongs to one united digital civilization built on respect, purpose, and shared progress.",
  },
  {
    icon: Users,
    title: "Growing Community",
    description:
      "Together we create meaningful relationships, inspire innovation, and support one another's journey.",
  },
  {
    icon: Globe2,
    title: "Global Vision",
    description:
      "Curved Kingdom is designed for citizens across the world, creating opportunities without borders.",
  },
];

export default function Community() {
  return (
    <section
      id="community"
      className="relative overflow-hidden bg-[#040404] py-32"
    >
      {/* Golden Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-125 w-125 rounded-full bg-yellow-500/10 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[8px] text-yellow-400">
            Our Community
          </p>

          <h2 className="mt-5 text-4xl md:text-6xl font-black text-white">
            Together We Build
            <br />
            <span className="text-yellow-400">
              The Kingdom
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">
            Curved Kingdom is built by citizens who believe that technology
            should bring people together, encourage creativity, and create
            opportunities for generations to come.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {values.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
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
                  text-center
                  transition-all
                  hover:border-yellow-400
                  hover:shadow-[0_0_35px_rgba(255,200,0,0.25)]
                "
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-yellow-500/10 group-hover:bg-yellow-500/20 transition">
                  <Icon
                    size={40}
                    className="text-yellow-400 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-5 leading-7 text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            );

          })}

        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 text-center"
        >
          <Link href="/register">
            <button className="rounded-full bg-yellow-500 px-10 py-4 font-bold text-black transition hover:bg-yellow-400 shadow-[0_0_30px_rgba(255,200,0,0.35)]">
              Join the Community
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}