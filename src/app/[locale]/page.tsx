"use client";

import About from "@/components/About";
import { motion } from "framer-motion";
import { Blog } from "@/components/Blog";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import OurCorporate from "@/components/OurCorporate";
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
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <Hero />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <About />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <Services />
      </motion.div>
      {/* <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <OurCorporate />
      </motion.div> */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <ShowReel />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <Team />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <Blog posts={[]} />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <FAQ />
      </motion.div>
    </div>
  );
}
