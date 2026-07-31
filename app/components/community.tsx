"use client";

import { motion } from "framer-motion";
import { Users, MessageCircle, Globe2 } from "lucide-react";
import Button from "./ui/Button";

const stats = [
  {
    icon: Users,
    value: "1,000+",
    label: "Future Citizens",
  },
  {
    icon: MessageCircle,
    value: "Growing",
    label: "Community",
  },
  {
    icon: Globe2,
    value: "Global",
    label: "Vision",
  },
];

export default function Community() {
  return (
    <section className="bg-[#05070d] py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] text-yellow-400">
            Community
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Build The Kingdom Together
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            Curved Kingdom is more than software. It is a community of people
            who believe in creativity, connection, and building a better
            digital future together.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="rounded-3xl bg-white/5 border border-yellow-500/20 p-8 text-center"
              >
                <Icon size={42} className="mx-auto text-yellow-400 mb-4" />

                <h3 className="text-4xl font-bold text-white">
                  {item.value}
                </h3>

                <p className="text-gray-400 mt-3">
                  {item.label}
                </p>
              </motion.div>
            );
          })}

        </div>

        <div className="text-center mt-16">
          <Button href="/register">
             Join the Community
          </Button>
        </div>

      </div>
    </section>
  );
}