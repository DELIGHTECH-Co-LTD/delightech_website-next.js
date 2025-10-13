import Image from "next/image";
import React from "react";
import luyleun from "../public/assets/luyleun (2).png";
const timeline = [
  {
    year: "2020",
    title: "LUYLEUN Moblie App",
    desc: "LUIYLEUN",
    details:
      "Our diversified business units work together to deliver sustainable growth, innovation, and value across multiple industries.",
    logo: luyleun,
  },
  {
    year: "2019",
    title: "BOMNIN",
    desc: "live learn lacru",
    details:
      "Capacity: 260 hectares of land featuring residential areas, golf course and water park",
    logo: "/assets/grandphnompenh.png",
  },
];

export default function History() {
  return (
    <section className="bg-[#0b0b0b] text-white py-20 px-6 md:px-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 uppercase text-white">
        Our Journey
      </h1>

      <div className="relative max-w-6xl mx-auto">
        {/* Center line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-800/30 transform -translate-x-1/2" />

        <div className="space-y-16">
          {timeline.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center md:items-start relative ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Card */}
                <div
                  className={`bg-[#141414]/80 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg w-full md:w-[45%] p-6 transition-transform duration-300 hover:-translate-y-2 ${
                    isLeft ? "md:mr-10" : "md:ml-10"
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    {/* Text */}
                    <div>
                      <h2 className="text-2xl font-bold text-blue-600">
                        {item.year}
                      </h2>
                      <h3 className="text-xl font-semibold mt-1 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-300">{item.desc}</p>
                      {item.details && (
                        <p className="text-gray-400 text-sm mt-2">
                          {item.details}
                        </p>
                      )}
                    </div>

                    {/* Logo */}
                    {item.logo && (
                      <div className="w-64 h-28 relative">
                        <Image
                          src={item.logo}
                          alt={item.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Dot */}
                <span className="absolute left-1/2 top-8 w-5 h-5 bg-blue-600 rounded-full border-4 border-[#0b0b0b] transform -translate-x-1/2" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
