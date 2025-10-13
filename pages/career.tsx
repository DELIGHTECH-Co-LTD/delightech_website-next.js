import Layout from "../components/Layout";
import Image from "next/image";
import React from "react";
import careerImg from "../public/assets/1.png"; // replace with your image

export default function Career() {
  return (
    <Layout>
      <section className="min-h-screen bg-[#0a0a0a] text-white py-20 px-6 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text Section */}
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 uppercase bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-300">
            Join Our Team
          </h1>
          <p className="text-lg mb-6 text-gray-300">
            At Delightech, we’re driven by innovation, creativity, and teamwork.
            We believe that great ideas come from passionate people working
            together to create meaningful solutions.
          </p>

          <p className="text-gray-400 mb-8">
            Whether you’re a developer, designer, marketer, or strategist — we
            value your unique skills and fresh perspectives. Together, we can
            shape the future of digital experiences.
          </p>

          <a
            href="mailto:hr@delightech.com"
            className="inline-block bg-blue-600 hover:bg-blue -500 transition-all px-6 py-3 rounded-2xl font-semibold shadow-lg shadow-blue-500/30"
          >
            Apply Now
          </a>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <div className="relative w-[320px] h-[420px] lg:w-[400px] lg:h-[520px]">
            <Image
              src={careerImg}
              alt="Career at Delightech"
              fill
              className="rounded-2xl object-cover shadow-xl shadow-blue-500/30"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-[#111111] py-16 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Work With Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Creative Environment",
              desc: "Work with passionate people who inspire creativity every day.",
            },
            {
              title: "Career Growth",
              desc: "Opportunities to learn, grow, and advance within the company.",
            },
            {
              title: "Flexible Culture",
              desc: "Balance work and life with our supportive and open environment.",
            },
          ].map((perk, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a]/80 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/10 hover:border-blue-500/40 transition-all"
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                {perk.title}
              </h3>
              <p className="text-gray-400">{perk.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
