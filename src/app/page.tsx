import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import Mockup from "@/components/Mockup";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-[#0a0a0f] min-h-screen">
      <Navbar />
      <Hero />
      <Logos />
      <Features />
      <Mockup />
      <CTA />
    </main>
  );
}
