import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("Services");

  const businessUnits = [
    {
      id: 1,
      name: t("luyleun.name"),
      description: t("luyleun.description"),
      image: "/assets/luyleun2.png",
      badge: t("luyleun.badge"),
    },
    {
      id: 2,
      name: t("bomnin.name"),
      description: t("bomnin.description"),
      image: "/assets/bomnin_1.png",
      badge: t("bomnin.badge"),
    },
  ];

  return (
    <section
      id="services"
      className="relative min-h-screen items-center justify-center pt-32 pb-24 px-6 lg:px-20 overflow-hidden bg-background"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 text-sm uppercase tracking-wider"
          >
            {t("badge")}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 uppercase">
            {t("title")}{" "}
            <span className="text-blue-600 dark:text-blue-400">
              {t("title_highlight")}
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            {t("description")}
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
