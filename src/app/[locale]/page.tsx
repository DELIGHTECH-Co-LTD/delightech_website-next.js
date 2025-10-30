"use client";

import About from "@/components/About";
import { motion } from "framer-motion";
import { Blog } from "@/components/Blog";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ShowReel from "@/components/ShowReel";
import Team from "@/components/Team";

export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <div>
      <Hero />
      <About />
      <Services />
      {/* <OurCorporate /> */}
      <ShowReel />
      <Team />
      <Blog posts={[]} />
      <FAQ />
    </div>
  );
}
