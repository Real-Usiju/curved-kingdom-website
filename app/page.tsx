"use client";

import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Roadmap from "./components/Roadmap";
import Community from "./components/community";
import Footer from "./components/Footer";
import RoyalIntro from "./components/RoyalIntro";
import RoyalProclamation from "./components/RoyalProclamation";


export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && (
        <RoyalIntro
          onFinish={() => setShowIntro(false)}
        />
      )}

      <main className="bg-black min-h-screen text-white">
        <Navbar />

        <Hero />

        <Features />

        <RoyalProclamation />

        <Roadmap />

        <Community />

        <Footer />
      </main>
    </>
  );
}