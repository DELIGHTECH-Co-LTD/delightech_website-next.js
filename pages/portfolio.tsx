import Layout from "../components/Layout";
import Image from "next/image";
import React from "react";

const timeline = [
  {
    year: "2020",
    title: "Grand Royal Golf and Resorts",
    desc: "Golf Course",
    details:
      "Capacity: Grand Phnom Penh Golf Club and Royal Phnom Penh Golf Club",
    logo: "/assets/grandroyal.png",
  },
  {
    year: "2019",
    title: "Grand Phnom Penh",
    desc: "Residential Area",
    details:
      "Capacity: 260 hectares of land featuring residential areas, golf course and water park",
    logo: "/assets/grandphnompenh.png",
  },
  {
    year: "2018",
    title: "Chip Mong Bank",
    desc: "Banking",
    details:
      "Products: Digital Banking, Personal Banking, Business Banking, Agent Banking",
    logo: "/assets/chipmongbank.png",
  },
  {
    year: "2017",
    title: "Chip Mong Retail",
    desc: "Retail",
    details: "Chip Mong Mall, Chip Mong Supermarket, Chip Mong Express",
    logo: "/assets/chipmongretail.png",
  },
  {
    year: "2017",
    title: "Fairfield by Marriott Phnom Penh",
    desc: "3 Stars Hotel",
    details: "Capacity: 300 rooms",
    logo: "/assets/fairfield.png",
  },
  {
    year: "2016",
    title: "Hyatt Regency Phnom Penh",
    desc: "5 Stars Hotel",
    details: "",
    logo: "/assets/hyatt.png",
  },
  {
    year: "2014",
    title: "Chip Mong Insee Cement Corporation",
    desc: "Cements",
    details: "Capacity: 5,000 tons per day",
    logo: "/assets/chipmonginsee.png",
  },
  {
    year: "2014",
    title: "Crown Khmer Beverages",
    desc: "Cans",
    details:
      "Capacity: 750 million cans per year (future expansion to 1000 million per year)",
    logo: "/assets/crown.png",
  },
];

export default function History() {
  return (
    <Layout>
      <section className="bg-[#0b0b0b] text-white py-20 px-6 md:px-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 uppercase text-[#007C3D]">
          Our Journey
        </h1>

        <div className="relative max-w-6xl mx-auto">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#007C3D]/50 transform -translate-x-1/2" />

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
                        <h2 className="text-2xl font-bold text-[#007C3D]">
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
                        <div className="w-32 h-14 relative">
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
                  <span className="absolute left-1/2 top-8 w-5 h-5 bg-[#007C3D] rounded-full border-4 border-[#0b0b0b] transform -translate-x-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
