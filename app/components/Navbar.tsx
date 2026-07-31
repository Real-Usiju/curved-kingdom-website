

"use client";

import { motion } from "framer-motion";
import Link from "next/link";


export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full z-50 
      bg-black/40 backdrop-blur-lg border-b border-yellow-500/20"
    >
      <div className="max-w-7xl mx-auto flex items-center 
      justify-between px-6 py-5">

        <h1 className="text-2xl font-bold text-yellow-400">
           Curved Kingdom
        </h1>

        <div className="hidden md:flex gap-8 text-white">
          <a href="#">Vision</a>
          <a href="#">Features</a>
          <a href="#">Roadmap</a>
          <a href="#">Community</a>
        </div>
        
        
        <Link href="/register">
  <button
    className="
      bg-yellow-500 text-black
      px-5 py-2 rounded-full
      font-semibold"
  >
    Join Now
  </button>
</Link>
        

      </div>
    </motion.nav>
  );
}