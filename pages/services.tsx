import React from "react";
import Image, { StaticImageData } from "next/image";
import service2 from "../public/assets/luyleun (2).png";
import service1 from "../public/assets/Bomnin_1.png";
import Layout from "../components/Layout";

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
    <Layout>
      <section className="flex flex-col bg-white dark:bg-gray-900 py-20 items-center text-center mt-24 px-6 ">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl  text-gray-900 dark:text-white  font-bold uppercase">
              OUR BUSINESS UNIT
            </h2>
            <p className=" text-gray-900 dark:text-white  mt-4 max-w-3xl mx-auto">
              Our diversified business units work together to deliver
              sustainable growth, innovation, and value across multiple
              industries.
            </p>
          </div>

          {/* Units */}
          <div className="flex flex-col space-y-12">
            {businessUnits.map((unit, index) => (
              <div
                key={unit.id}
                className={`flex flex-col md:flex-row items-center gap-10 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="relative w-full md:w-1/2 h-72 md:h-80 rounded-2xl overflow-hidden ">
                  <Image
                    src={unit.image}
                    alt={unit.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Text */}
                <div className="md:w-1/2 text-center md:text-left">
                  <h3 className="text-2xl  font-bold text-blue-700 mb-4">
                    {unit.name}
                  </h3>
                  <p className=" text-gray-900 dark:text-white  leading-relaxed">
                    {unit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BusinessUnit;
