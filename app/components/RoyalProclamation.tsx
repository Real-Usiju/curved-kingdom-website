"use client";

import { motion } from "framer-motion";

export default function RoyalProclamation() {
  return (
    <section className="relative overflow-hidden bg-black py-32">
      {/* Golden Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-125 w-125 rounded-full bg-yellow-500/10 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "120px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto h-0.5 bg-yellow-500"
        />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 uppercase tracking-[8px] text-yellow-400"
        >
          The Royal Proclamation
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-4xl md:text-6xl font-black leading-tight text-white"
        >
          We Are Not Building
          <br />
          <span className="text-yellow-400">
            Another Social Platform.
          </span>
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-2xl md:text-3xl font-semibold text-yellow-300"
        >
          We Are Building A Digital Civilization.
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-gray-300"
        >
          Every citizen deserves a place where identity has meaning,
          every connection has purpose, every idea has value,
          and every contribution becomes part of a lasting legacy.
          Curved Kingdom exists to build that future.
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.3 }}
          className="mt-16 italic text-yellow-400 text-xl md:text-2xl"
        >
          "The Kingdom is not built by one ruler.
          It is built by every citizen."
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "120px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mx-auto mt-10 h-0.5 bg-yellow-500"
        />

      </div>
    </section>
  );
}