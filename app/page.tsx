import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import Features from "./components/Features";
import Roadmap from "./components/Roadmap";
import Community from "./components/community";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white">

      <Navbar />

      <Hero />

      

      <Features />

      <Roadmap />

      <Community />

      <Footer />

    </main>
  );
}