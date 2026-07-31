"use client";

import { motion } from "framer-motion";

type WelcomeBannerProps = {
  fullName: string;
};

export default function WelcomeBanner({
  fullName,
}: WelcomeBannerProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="
        rounded-3xl
        border
        border-yellow-500/30
        bg-linear-to-r
        from-yellow-500/20
        to-transparent
        p-7
        mb-8
      "
    >
      <h1 className="text-4xl font-bold text-yellow-400">
  Welcome back,
</h1>

<h2 className="mt-2 text-2xl font-semibold text-white">
  {fullName}
</h2>

      <p className="mt-3 text-gray-300">
        The Kingdom recognizes your return.
        Your citizens await your next proclamation.
      </p>
    </motion.section>
  );
}