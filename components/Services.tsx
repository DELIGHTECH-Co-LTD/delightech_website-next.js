import React from "react";
import Image, { StaticImageData } from "next/image";
import service2 from "../public/assets/luyleun (2).png";
import service1 from "../public/assets/bomnin_1.png";

interface BusinessUnit {
  id: number;
  name: string;
  description: string;
  image: StaticImageData;
}

const businessUnits: BusinessUnit[] = [
  {
    id: 1,
    name: "LUYLEUN Mobile App",
    description:
      "Our manufacturing unit is a cornerstone of our success, producing top-quality products with modern technology and sustainability at the core. From cement and building materials to beverages, we ensure the highest production standards.",
    image: service2,
  },
  {
    id: 2,
    name: "BOM NIN",
    description:
      "Delivering high-value infrastructure and engineering projects that meet international standards. Our construction unit focuses on innovation, precision, and long-term structural integrity for every development.",
    image: service1,
  },
];

const BusinessUnit: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-black dark:bg-white  items-center justify-center py-20 lg:px-20 overflow-hidden gap-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl dark:text-black font-bold uppercase">
            OUR BUSINESS UNIT
          </h2>
          <p className="text-black dark:text-black  mt-4 max-w-3xl mx-auto">
            Our diversified business units work together to deliver sustainable
            growth, innovation, and value across multiple industries.
          </p>
        </div>

        <div className="flex flex-col space-y-20">
          {businessUnits.map((unit, index) => (
            <div
              key={unit.id}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="relative w-full md:w-1/2 h-80 md:h-80 group">
                <Image
                  src={unit.image}
                  alt={unit.name}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">
                  {unit.name}
                </h3>
                <p className=" text-white dark:text-black leading-relaxed">
                  {unit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessUnit;
