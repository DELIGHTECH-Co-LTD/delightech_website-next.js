import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import OurCorporate from "@/components/OurCorporate";
import Services from "@/components/Services";
import ShowReel from "@/components/ShowReel";
import Team from "@/components/Team";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <OurCorporate />
      <ShowReel />
      <Team />
      <FAQ />
    </div>
  );
}
