import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const businessUnits = [
  {
    id: 1,
    name: "LUYLEUN Mobile App",
    description:
      "Our manufacturing unit is a cornerstone of our success, producing top-quality products with modern technology and sustainability at the core. From cement and building materials to beverages, we ensure the highest production standards.",
    image: "/assets/luyleun2.png",
  },
  {
    id: 2,
    name: "BOM NIN",
    description:
      "Delivering high-value infrastructure and engineering projects that meet international standards. Our construction unit focuses on innovation, precision, and long-term structural integrity for every development.",
    image: "/assets/bomnin_1.png",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative min-h-screen bg-background pt-32 pb-24 px-6 lg:px-20 overflow-hidden"
    >
      {/* Background Pattern - Same as FAQ */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 dark:bg-purple-500/10 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 text-sm uppercase tracking-wider"
          >
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 uppercase">
            Our{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Business Unit
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Our diversified business units work together to deliver sustainable
            growth, innovation, and value across multiple industries.
          </p>
        </div>

        {/* Business Units */}
        <div className="flex flex-col space-y-12">
          {businessUnits.map((unit, index) => (
            <Card
              key={unit.id}
              className="group overflow-hidden border-border hover:border-blue-600/50 dark:hover:border-blue-400/50 hover:shadow-2xl transition-all duration-500"
            >
              <CardContent className="p-0">
                <div
                  className={`flex flex-col md:flex-row items-center gap-0 ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="relative w-full md:w-1/2 h-80 md:h-96 overflow-hidden bg-muted">
                    <Image
                      src={unit.image}
                      alt={unit.name}
                      fill
                      className="object-contain p-8 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/20 pointer-events-none"></div>
                  </div>

                  {/* Content */}
                  <div className="w-full md:w-1/2 p-8 md:p-12">
                    <Badge variant="secondary" className="mb-4">
                      Business Unit {unit.id}
                    </Badge>
                    <h3 className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6 uppercase">
                      {unit.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {unit.description}
                    </p>

                    {/* Decorative Line */}
                    <div className="mt-8 flex items-center gap-4">
                      <div className="flex-1 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-500"></div>
                      <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                        Innovation Driven
                      </span>
                    </div>

                    {/* Hover Indicator */}
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-medium">
                        <span>Learn More</span>
                        <svg
                          className="w-4 h-4 animate-bounce"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-blue-600/5 pointer-events-none transition-opacity duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
