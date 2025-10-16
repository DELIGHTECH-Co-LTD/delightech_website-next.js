import React from "react";
import Image from "next/image";
import History from "@/components/History";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section with Vision */}
      <section
        className="relative z-10 w-screen h-screen max-w-9xl mx-auto bg-cover bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: "url('/assets/angkorWat.png')",
        }}
      >
        <div className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-24">
          <Card className="bg-black/40 dark:bg-black/60 border-none backdrop-blur-sm max-w-2xl">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
                OUR VISION:
              </h2>
              <p className="text-white text-lg md:text-2xl font-semibold leading-relaxed">
                To revolutionize financial solutions through technology and to
                empower individuals and businesses worldwide to achieve
                financial freedom and stability.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Founder Message Section */}
      <section className="relative min-h-screen hero-gradient flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 py-16 overflow-hidden gap-12 lg:gap-20">
        <Card className="max-w-3xl bg-transparent border-none shadow-none">
          <CardContent className="p-0 text-white space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 uppercase">
                Message from Founder
              </h1>
              <Separator className="bg-white/20 mb-4" />
              <p className="text-lg mb-6 text-white/90">
                Mr. Lay Vila, Founder of Delightech
              </p>
            </div>

            <div className="space-y-4 text-justify leading-relaxed text-white/95">
              <p>
                When I started DelighTech, I had one clear belief — that
                technology should serve people, not the other way around. Our
                goal has always been to build digital products that don't just
                work, but truly make life better, simpler, and smarter.
              </p>
              <p>
                With our flagship project LUYLEUN, we're redefining how
                Cambodians experience finance — offering fast, transparent, and
                reliable access to opportunities that help them grow. We believe
                financial technology should be empowering, inclusive, and built
                for everyone.
              </p>
              <p>
                At DelighTech, we are driven by passion and purpose. Every idea,
                every line of code, and every user experience is guided by our
                vision to create meaningful impact through innovation.
              </p>
              <p>
                This great success is owed to our visionary leadership and We're
                not just building apps — we're building the future of how people
                connect with technology. Thank you for being part of this
                journey. Together, we'll continue to dream bigger, innovate
                smarter, and grow stronger.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="flex-shrink-0 bg-transparent border-none shadow-2xl overflow-hidden">
          <CardContent className="p-0">
            <Image
              src="/assets/bVila.png"
              alt="Founder of Chip Mong"
              width={400}
              height={600}
              className="rounded-lg object-contain"
              priority
            />
          </CardContent>
        </Card>
      </section>

      <History />
    </>
  );
}
