import Image from "next/image";
import founderImg from "../public/assets/bng vila.png";
import Layout from "../components/Layout";
import History from "../components/History";
export default function AboutPage() {
  return (
    <Layout>
      <section
        className="relative z-10 w-screen h-screen max-w-9xl mx-auto bg-cover bg-no-repeat flex items-center justify-center "
        style={{
          backgroundImage: "url('/assets/Angkorwat.png')",
        }}
      >
        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-24">
          <div className="bg-black/40   p-4 md:p-6 rounded-lg max-w-2xl">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">
              OUR VISION:
            </h2>
            <p className="text-white text-lg md:text-2xl font-semibold leading-relaxed">
              To revolutionize financial solutions through technology and to
              empower individuals and businesses worldwide to achieve financial
              freedom and stability.
            </p>
          </div>
        </div>
      </section>
      <section className=" relative min-h-screen hero-gradient flex flex-col lg:flex-row items-center justify-center lg:px-20 overflow-hidden gap-20">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 uppercase">
            Message from Founder
          </h1>
          <p className="text-lg mb-6">Mr. Lay Vila, Founder of Delightech</p>

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
              This great success is owed to our visionary leadership and We’re
              not just building apps — we’re building the future of how people
              connect with technology. Thank you for being part of this journey.
              Together, we’ll continue to dream bigger, innovate smarter, and
              grow stronger.
            </p>
          </div>
        </div>

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
      <History />
    </Layout>
  );
}
