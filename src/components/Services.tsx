import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
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
      className="relative min-h-screen bg-background pt-32 pb-24 px-6 lg:px-20 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto z-10">
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

        <div className="flex flex-col space-y-12">
          {businessUnits.map((unit, index) => (
            <div
              key={unit.id}
              className="group overflow-hidden hover:border-blue-600/50 dark:hover:border-blue-400/50 hover:shadow-2xl transition-all duration-500 bg-transparent rounded-lg"
            >
              <div
                className={`flex flex-col md:flex-row items-center gap-0 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="relative w-full md:w-1/2 h-80 md:h-96 overflow-hidden bg-muted rounded-l-lg">
                  <Image
                    src={unit.image}
                    alt={unit.name}
                    fill
                    className="object-contain p-8 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/20 pointer-events-none rounded-l-lg"></div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 p-8 md:p-12 rounded-r-lg">
                  <Badge variant="secondary" className="mb-4">
                    {unit.badge}
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
                      {t("innovation_driven")}
                    </span>
                  </div>

                  {/* Learn More - always visible */}
                  <div className="mt-6 opacity-100 transition-opacity duration-500">
                    <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-medium">
                      <span>{t("learn_more")}</span>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
