"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Hammer, Rocket, Globe2 } from "lucide-react";

const roadmap = [
  {
    title: "Foundation",
    status: "Completed",
    description: "Building the Curved Kingdom vision and community.",
    icon: CheckCircle2,
  },
  {
    title: "Development",
    status: "In Progress",
    description: "Building the website and core application.",
    icon: Hammer,
  },
  {
    title: "Beta Launch",
    status: "Coming Soon",
    description: "Opening the gates for Early Citizens.",
    icon: Rocket,
  },
  {
    title: "Global Kingdom",
    status: "Future",
    description: "Expanding Curved Kingdom around the world.",
    icon: Globe2,
  },
];

export default function Roadmap() {
  return (
    <section className="bg-black py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-yellow-400">
            Our Roadmap
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Building The Kingdom
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Every great kingdom starts with a vision.
            Here is our journey from idea to global platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {roadmap.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{ y: -8 }}
                className="
                  rounded-3xl
                  bg-white/5
                  border border-yellow-500/20
                  p-8
                  text-center
                "
              >

                <Icon
                  size={45}
                  className="mx-auto text-yellow-400 mb-5"
                />

                <span className="text-yellow-400 text-sm uppercase">
                  {item.status}
                </span>

                <h3 className="text-white text-2xl font-semibold mt-3">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-4">
                  {item.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}