import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import { Bell } from "lucide-react";
import { Button } from "./ui/button";

export default function Services() {
  const t = useTranslations("Services");

  const businessUnits = [
    {
      id: 1,
      name: t("luyleun.name"),
      description: t("luyleun.description"),
      image: "/assets/luyleun2.png",
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
      image: "/assets/bomnin_1.png",
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
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <Badge
            variant="secondary"
            className="mb-4 text-xs sm:text-sm uppercase tracking-wider"
          >
            {t("badge")}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 uppercase">
            {t("title")}{" "}
            <span className="text-blue-600 dark:text-blue-400">
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
              className={`flex flex-col md:flex-row items-center gap-8 sm:gap-10 lg:gap-12 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image Section */}
              <div className="relative w-full md:w-1/2 h-64 sm:h-80 lg:h-96 group overflow-hidden rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
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
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400">
                    {unit.name}
                  </h3>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg text-justify">
                  {unit.description}
                </p>

                {/* Action Buttons */}
                <div className="pt-4 sm:pt-6">
                  {unit.type === "app" ? (
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <a
                        href={unit.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center gap-3 px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-lg transition-all duration-200 active:scale-95 min-h-[56px]"
                      >
                        <svg
                          className="w-6 h-6 sm:w-7 sm:h-7"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                        </svg>
                        <div className="text-left">
                          <div className="text-xs opacity-80">GET IT ON</div>
                          <div className="text-sm sm:text-base font-semibold">
                            Google Play
                          </div>
                        </div>
                      </a>

                      <a
                        href={unit.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center gap-3 px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-lg transition-all duration-200 active:scale-95 min-h-[56px]"
                      >
                        <svg
                          className="w-6 h-6 sm:w-7 sm:h-7"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                        </svg>
                        <div className="text-left">
                          <div className="text-xs opacity-80">
                            Download on the
                          </div>
                          <div className="text-sm sm:text-base font-semibold">
                            App Store
                          </div>
                        </div>
                      </a>
                    </div>
                  ) : (
                    // Subscribe Button for Bomnin
                    <Button
                      asChild
                      size="lg"
                      className="min-h-[56px] text-base sm:text-lg gap-2"
                    >
                      <a href={unit.subscribeUrl}>
                        <Bell className="w-5 h-5 sm:w-6 sm:h-6" />
                        Subscribe Now
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
