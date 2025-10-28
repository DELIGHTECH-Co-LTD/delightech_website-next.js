import { Building2, Globe, TrendingUp, Users } from "lucide-react";
import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import { Particles } from "./ui/shadcn-io/particles";

export default function OurCorporate() {
  const t = useTranslations("Corporate");

  const features = [
    {
      icon: Building2,
      title: t("features.diversified.title"),
      description: t("features.diversified.description"),
      color: "text-yellow-500 dark:text-yellow-400",
    },
    {
      icon: Globe,
      title: t("features.global.title"),
      description: t("features.global.description"),
      color: "text-green-500 dark:text-green-400",
    },
    {
      icon: Users,
      title: t("features.people.title"),
      description: t("features.people.description"),
      color: "text-blue-700 dark:text-blue-700",
    },
    {
      icon: TrendingUp,
      title: t("features.growth.title"),
      description: t("features.growth.description"),
      color: "text-red-500 dark:text-red-400",
    },
  ];

  return (
    <section
      id="corporate"
      className="relative min-h-screen bg-background py-24 px-6 lg:px-20 overflow-hidden"
    >
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        staticity={50}
        color="#ffffff"
        size={0.8}
      />

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
            <span className="text-blue-700 dark:text-blue-700">
              {t("title_highlight")}
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            {t("description")}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-blue-600/50 dark:hover:border-blue-400/50 transition-all duration-500"
              >
                {/* Icon Container */}
                <div className="relative w-full h-40 overflow-hidden bg-muted flex items-center justify-center">
                  <div className="relative z-10">
                    <IconComponent
                      className={`${feature.color} transform group-hover:scale-110 transition-transform duration-700 ease-out`}
                      size={60}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold mb-2 uppercase text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-4 w-12 h-[2px] bg-blue-600 dark:bg-blue-400 mx-auto group-hover:w-20 transition-all duration-300"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Corporate Overview Section */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Image Section */}
          <div className="relative w-full md:w-1/2 h-80 md:h-96 group overflow-hidden rounded-lg">
            <Image
              src="/assets/Angkor_Wat.webp"
              alt="Our Corporate"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-4">
            <div className="space-y-2">
              <Badge variant="secondary" className="mb-2">
                {t("overview.badge")}
              </Badge>
              <h3 className="text-2xl md:text-3xl font-bold text-blue-700 dark:text-blue-700">
                {t("overview.title")}
              </h3>
            </div>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              <p>{t("overview.description1")}</p>
              <p>{t("overview.description2")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
