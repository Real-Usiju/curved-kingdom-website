"use client";

import { motion } from "framer-motion";
import {
  Users,
  Palette,
  Rocket,
  Search,
  Crown
} from "lucide-react";

const features = [
  {
    title: "Connect",
    description:
      "Build meaningful connections and communities across the world.",
    icon: Users,
  },
  {
    title: "Create",
    description:
      "Share your creativity, ideas, and projects with the Kingdom.",
    icon: Palette,
  },
  {
    title: "Grow",
    description:
      "Develop your digital presence and discover opportunities.",
    icon: Rocket,
  },
  {
    title: "Discover",
    description:
      "Explore new people, communities, and experiences.",
    icon: Search,
  },
  {
    title: "Identity",
    description:
      "Create a unique digital identity inside Curved Kingdom.",
    icon: Crown,
  },
];

export default function Features() {
  return (
    <section className="bg-[#070b15] py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-yellow-400 uppercase tracking-widest">
            Kingdom Features
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Explore The Kingdom
          </h2>

        </div>


        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{opacity:0, y:40}}
                whileInView={{opacity:1, y:0}}
                transition={{
                  duration:0.5,
                  delay:index * 0.1
                }}
                whileHover={{
                  y:-10
                }}
                className="
                bg-white/5
                border
                border-yellow-500/20
                rounded-3xl
                p-6
                text-center
                backdrop-blur-lg
                "
              >

                <Icon
                  size={40}
                  className="mx-auto text-yellow-400"
                />

                <h3 className="
                text-white
                text-xl
                font-semibold
                mt-5
                ">
                  {feature.title}
                </h3>


                <p className="
                text-gray-400
                mt-3
                text-sm
                ">
                  {feature.description}
                </p>

              </motion.div>
            );

          })}

        </div>

      </div>

    </section>
  );
}