import Image from "next/image";
import founderImg from "../public/assets/bng vila.png";
import Layout from "../components/Layout";

export default function AboutPage() {
  return (
    <Layout>
      <section className="bg-black-white py-20 px-6 md:px-20 min-h-screen flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
        {/* LEFT: Founder Message */}
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 uppercase">
            Message from Founder
          </h1>
          <p className="text-lg mb-6">Lay Vila, Founder of Delightech .</p>

          <div className="space-y-4 text-justify leading-relaxed">
            <p>
              When I started Delightech, I had one clear belief — that
              technology should serve people, not the other way around. Our goal
              has always been to build digital products that don’t just work,
              but truly make life better, simpler, and smarter.
            </p>

            <p>
              With our flagship project LUYLEUN, we’re redefining how Cambodians
              experience finance — offering fast, transparent, and reliable
              access to opportunities that help them grow. We believe financial
              technology should be empowering, inclusive, and built for
              everyone.
            </p>

            <p>
              At Delightech, we are driven by passion and purpose. Every idea,
              every line of code, and every user experience is guided by our
              vision to create meaningful impact through innovation.
            </p>

            <p>
              ThWe’re not just building apps — we’re building the future of how
              people connect with technology. Thank you for being part of this
              journey. Together, we’ll continue to dream bigger, innovate
              smarter, and grow stronger.
            </p>

            <p>
              As we look to the years ahead, we must remain committed to
              excellence, keep abreast of changes and innovations, adopt better
              management practices and successfully overcome all challenges
              before us.
            </p>
          </div>
        </div>

        {/* RIGHT: Founder Image */}
        <div className="flex-shrink-0">
          <Image
            src={founderImg}
            alt="Founder of Chip Mong"
            width={400}
            height={600}
            className="rounded-lg object-contain"
            priority
          />
        </div>
      </section>
    </Layout>
  );
}
