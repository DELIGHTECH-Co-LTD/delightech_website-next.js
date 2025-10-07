import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Team from "../components/Team";
import Showreel from "../components/Showreel";
import Footer from "../components/Footer";
import OurCorporate from "../components/OurCorporate";

export default function Home() {
  return (
    <>
      <Head>
        <title>DLT WEB</title>
        <meta name="description" content="Glassy dark/light Delightech" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <About />
          <div className="max-w-6xl mx-auto px-6">
            <Services />
            <OurCorporate />
            <Showreel />
          </div>
          <Team />
        </main>
        <Footer />
      </div>
    </>
  );
}
