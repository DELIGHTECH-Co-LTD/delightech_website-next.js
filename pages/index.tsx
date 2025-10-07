import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { Services } from "../components/Services";
import About from "../components/About";
import Team from "../components/Team";
import Showreel from "../components/Showreel";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>DLT WEB</title>
        <meta
          name="description"
          content="Glassy dark landing built with Next.js, TS and Tailwind."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <div className="max-w-6xl mx-auto px-6">
            <About />
            <Services />
            <Team />
            <Showreel />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
