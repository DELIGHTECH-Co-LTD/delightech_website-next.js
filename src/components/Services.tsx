import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import { Bell } from "lucide-react";
import { Button } from "./ui/button";
import { Particles } from "./ui/shadcn-io/particles";

export default function Services() {
  const t = useTranslations("Services");

  const businessUnits = [
    {
      id: 1,
      name: t("luyleun.name"),
      description: t("luyleun.description"),
      image: "/assets/LL glass.png",
      badge: t("luyleun.badge"),
      type: "app",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.delightech.luyleun",
      appStoreUrl: "https://apps.apple.com/kh/app/luyleun/id1570756469LuyLeun",
    },
    {
      id: 2,
      name: t("bomnin.name"),
      description: t("bomnin.description"),
      image: "/assets/Bomnin glass.png",
      badge: t("bomnin.badge"),
      type: "subscription",
      subscribeUrl: "https://t.me/learnthinking",
    },
  ];

  return (
    <section
      id="services"
      className="relative min-h-screen items-center justify-center py-24 px-6 lg:px-20 overflow-hidden bg-background"
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
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <Badge
            variant="secondary"
            className="mb-4 text-xs sm:text-sm uppercase tracking-wider"
          >
            {t("badge")}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 uppercase">
            {t("title")}{" "}
            <span className="text-blue-700 dark:text-blue-700">
              {t("title_highlight")}
            </span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto px-4">
            {t("description")}
          </p>
        </div>

        {/* Business Units */}
        <div className="flex flex-col space-y-16 sm:space-y-20 lg:space-y-24">
          {businessUnits.map((unit, index) => (
            <div
              key={unit.id}
              data-usal-md="fade-in"
              data-usal-md-translate-x={index % 2 === 0 ? "-100" : "100"}
              data-usal-md-duration="1000"
              data-usal-md-delay="200"
              className={`flex flex-col md:flex-row items-center gap-8 sm:gap-10 lg:gap-12 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image Section */}
              <div className="relative w-full md:w-1/2 h-64 sm:h-80 lg:h-96 group overflow-hidden rounded-lg ">
                <Image
                  src={unit.image}
                  alt={unit.name}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500 p-4"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 space-y-4 sm:space-y-5 lg:space-y-6">
                <div className="space-y-2 sm:space-y-3">
                  <Badge
                    variant="secondary"
                    className="mb-2 text-xs sm:text-sm"
                  >
                    {unit.badge}
                  </Badge>
                  <h3
                    className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${
                      unit.type === "subscription"
                        ? "text-green-600 dark:text-green-400"
                        : "text-blue-700 dark:text-blue-700"
                    }`}
                  >
                    {unit.name}
                  </h3>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg text-justify">
                  {unit.description}
                </p>

                {/* Enhanced Action Buttons Section */}
                <div className="pt-6 sm:pt-8">
                  <div className="relative">
                    {/* Decorative Line */}
                    <div
                      className={`absolute -top-3 left-0 w-16 h-1 rounded-full ${
                        unit.type === "subscription"
                          ? "bg-gradient-to-r from-green-500 to-emerald-500"
                          : "bg-gradient-to-r from-blue-500 to-blue-600"
                      }`}
                    ></div>

                    {unit.type === "app" ? (
                      <div className="space-y-4">
                        {/* Download Header */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-700 mb-2">
                            Download LUYLEUN
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Available on both iOS and Android
                          </p>
                        </div>

                        {/* Enhanced Download Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                          <a
                            href={unit.playStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative overflow-hidden inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl transition-all duration-300 active:scale-95 min-h-[64px] shadow-lg hover:shadow-xl hover:shadow-blue-500/25"
                          >
                            {/* Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>

                            <svg
                              className="w-7 h-7 sm:w-8 sm:h-8 relative z-10"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                            </svg>
                            <div className="text-left relative z-10">
                              <div className="text-xs opacity-90 font-medium">
                                GET IT ON
                              </div>
                              <div className="text-base sm:text-lg font-bold">
                                Google Play
                              </div>
                            </div>
                          </a>

                          <a
                            href={unit.appStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative overflow-hidden inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl transition-all duration-300 active:scale-95 min-h-[64px] shadow-lg hover:shadow-xl hover:shadow-blue-500/25"
                          >
                            {/* Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>

                            <svg
                              className="w-7 h-7 sm:w-8 sm:h-8 relative z-10"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                            </svg>
                            <div className="text-left relative z-10">
                              <div className="text-xs opacity-90 font-medium">
                                Download on the
                              </div>
                              <div className="text-base sm:text-lg font-bold">
                                App Store
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    ) : (
                      // Enhanced Subscribe Button for Bomnin
                      <div className="space-y-4">
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-2">
                            Join Our Community
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Get updates and insights
                          </p>
                        </div>

                        <Button
                          asChild
                          size="lg"
                          className="group relative overflow-hidden w-full sm:w-auto min-h-[64px] text-base sm:text-lg gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg hover:shadow-xl hover:shadow-green-500/25 transition-all duration-300"
                        >
                          <a href={unit.subscribeUrl} className="relative z-10">
                            {/* Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
                            <Bell className="w-6 h-6 sm:w-7 sm:h-7 group-hover:animate-bounce" />
                            <span className="font-semibold">Subscribe Now</span>
                          </a>
                        </Button>
                      </div>
                    )}
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
