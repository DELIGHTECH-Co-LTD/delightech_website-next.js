import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const businessUnits = [
  {
    id: 1,
    name: "LUYLEUN Mobile App",
    description:
      "Our manufacturing unit is a cornerstone of our success, producing top-quality products with modern technology and sustainability at the core. From cement and building materials to beverages, we ensure the highest production standards.",
    image: "/assets/luyleun2.png",
    badge: "Fintech",
  },
  {
    id: 2,
    name: "BOM NIN",
    description:
      "Delivering high-value infrastructure and engineering projects that meet international standards. Our construction unit focuses on innovation, precision, and long-term structural integrity for every development.",
    image: "/assets/bomnin_1.png",
    badge: "E-Commerce",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative min-h-screen items-center justify-center pt-32 pb-24 px-6 lg:px-20 overflow-hidden bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl text-gray-900 dark:text-white font-bold uppercase">
            OUR BUSINESS UNIT
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-3xl mx-auto text-lg">
            Our diversified business units work together to deliver sustainable
            growth, innovation, and value across multiple industries.
          </p>
        </div>

        {/* Business Units */}
        <div className="flex flex-col space-y-20">
          {businessUnits.map((unit, index) => (
            <div
              key={unit.id}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image Section */}
              <div className="relative w-full md:w-1/2 h-80 md:h-96 group overflow-hidden rounded-lg">
                <Image
                  src={unit.image}
                  alt={unit.name}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content Section */}
              <div className="md:w-1/2 space-y-4">
                <div className="space-y-2">
                  <Badge variant="secondary" className="mb-2">
                    {unit.badge}
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {unit.name}
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                  {unit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
