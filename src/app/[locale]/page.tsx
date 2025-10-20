import About from "@/components/About";
import { Blog } from "@/components/Blog";
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
      <Blog posts={[]} /> {/* Empty array - just UI, no data */}
      <FAQ />
    </div>
  );
}
