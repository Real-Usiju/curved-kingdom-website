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

      {/* Google Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Curved Kingdom",
            url: "https://curvedkingdom.com",
            description:
              "Curved Kingdom is a digital civilization where citizens build their identity, connect with others, discover opportunities, create meaningful experiences, and leave a lasting legacy.",
          }),
        }}
      />

      <main className="min-h-screen bg-black text-white">
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