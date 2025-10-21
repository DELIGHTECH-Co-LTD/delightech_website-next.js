import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import { Particles } from "./ui/shadcn-io/particles";

export default function History() {
  const t = useTranslations("History");
  const timeline = [
    {
      year: t("timeline.2025.year"),
      title: t("timeline.2025.title"),
      desc: t("timeline.2025.desc"),
      details: t("timeline.2025.details"),
      logo: "/assets/bomnin_1.png",
    },
    {
      year: t("timeline.2019.year"),
      title: t("timeline.2019.title"),
      desc: t("timeline.2019.desc"),
      details: t("timeline.2019.details"),
      logo: "/assets/luyleun2.png",
    },
  ];
  return (
    <section
      id="history"
      className="relative min-h-screen items-center justify-center pt-32 pb-24 px-6 lg:px-20 overflow-hidden bg-background"
    >
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        staticity={50}
        color="#ffffff"
        size={0.8}
      />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 text-sm uppercase tracking-wider"
          >
            {t("badge")}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 uppercase">
            {t("title")}{" "}
            <span className="text-blue-600 dark:text-blue-400">
              {t("title_highlight")}
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 dark:bg-blue-800/30 transform -translate-x-1/2" />

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
                    className={`bg-white dark:bg-gray-800 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-blue-500/30 dark:hover:shadow-blue-600/50 w-full md:w-[45%] p-6 transition-all duration-300 hover:-translate-y-2 ${
                      isLeft ? "md:mr-10" : "md:ml-10"
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                      {/* Text */}
                      <div>
                        <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                          {item.year}
                        </h2>
                        <h3 className="text-xl text-gray-900 dark:text-white font-semibold mt-1 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          {item.desc}
                        </p>
                        {item.details && (
                          <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
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
                  <span className="absolute left-1/2 top-8 w-5 h-5 bg-blue-600 dark:bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 transform -translate-x-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
