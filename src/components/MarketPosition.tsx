import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import { Icon } from "@iconify/react";

export default function MarketPosition() {
  const t = useTranslations("InvestorPage");

  const expansionPoints = [
    {
      icon: "heroicons:globe-asia-australia-solid",
      title: t("market_position.expansion_strategy.points.point1"),
    },
    {
      icon: "heroicons:building-library-solid",
      title: t("market_position.expansion_strategy.points.point2"),
    },
    {
      icon: "heroicons:users-solid",
      title: t("market_position.expansion_strategy.points.point3"),
    },
    {
      icon: "heroicons:cpu-chip-solid",
      title: t("market_position.expansion_strategy.points.point4"),
    },
    {
      icon: "heroicons:building-office-solid",
      title: t("market_position.expansion_strategy.points.point5"),
    },
  ];

  return (
    <section className="py-24 bg-background transition-all duration-500">
      <div className="max-w-7xl mx-auto px-8">
        {/* Professional Section Header */}
        <div className="mb-16" data-usal-md="fade-d duration-400">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-linear-to-b from-blue-600 to-blue-700 dark:from-blue-400 dark:to-blue-500 rounded-sm"></div>
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider bg-blue-50/50 dark:bg-accent px-3 py-1 rounded-md border border-blue-100/50 dark:border-border">
              {t("market_position.badge")}
            </span>
          </div>
          <h2 className="text-4xl font-light text-foreground mb-6 max-w-3xl">
            {t("market_position.title")}{" "}
            <span className="text-blue-600 dark:text-blue-400 font-normal">
              {t("market_position.title_highlight")}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl font-light leading-relaxed">
            {t("market_position.description")}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Current Position */}
          <div data-usal-md="fade-r duration-600 delay-100">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-blue-50 dark:bg-accent rounded-lg flex items-center justify-center border border-blue-100/50 dark:border-border">
                  <Icon
                    icon="heroicons:building-office-2-solid"
                    className="w-4 h-4 text-blue-600 dark:text-blue-400"
                  />
                </div>
                <h3 className="text-2xl font-light text-foreground">
                  {t("market_position.current_position.title")}
                </h3>
              </div>
            </div>

            <div className="space-y-6">
              <div className="group p-6 bg-card rounded-xl border border-border hover:border-blue-200/60 dark:hover:border-blue-600/30 hover:shadow-lg dark:hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 dark:bg-accent rounded-lg flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-muted transition-colors duration-300 border border-blue-100/50 dark:border-border shrink-0">
                    <Icon
                      icon="heroicons:map-pin-solid"
                      className="w-5 h-5 text-blue-600 dark:text-blue-400"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-muted-foreground/80 transition-colors duration-300">
                    {t("market_position.current_position.description1")}
                  </p>
                </div>
              </div>

              <div className="group p-6 bg-card rounded-xl border border-border hover:border-blue-200/60 dark:hover:border-blue-600/30 hover:shadow-lg dark:hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 dark:bg-accent rounded-lg flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-muted transition-colors duration-300 border border-blue-100/50 dark:border-border shrink-0">
                    <Icon
                      icon="heroicons:chart-pie-solid"
                      className="w-5 h-5 text-blue-600 dark:text-blue-400"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-muted-foreground/80 transition-colors duration-300">
                    {t("market_position.current_position.description2")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Expansion Strategy */}
          <div data-usal-md="fade-l duration-600 delay-200">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-blue-50 dark:bg-accent rounded-lg flex items-center justify-center border border-blue-100/50 dark:border-border">
                  <Icon
                    icon="heroicons:rocket-launch-solid"
                    className="w-4 h-4 text-blue-600 dark:text-blue-400"
                  />
                </div>
                <h3 className="text-2xl font-light text-foreground">
                  {t("market_position.expansion_strategy.title")}
                </h3>
              </div>
            </div>

            <div className="grid gap-4">
              {expansionPoints.map((point, index) => (
                <div
                  key={index}
                  className="group p-6 bg-card rounded-xl border border-border hover:border-blue-200/60 dark:hover:border-blue-600/30 hover:shadow-lg dark:hover:shadow-xl transition-all duration-300 cursor-default"
                  data-usal-md={`fade-u duration-400 delay-${index * 100 + 300}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-50 dark:bg-accent rounded-lg flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-muted transition-colors duration-300 border border-blue-100/50 dark:border-border shrink-0">
                      <Icon
                        icon={point.icon}
                        className="w-5 h-5 text-blue-600 dark:text-blue-400"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-muted-foreground/80 transition-colors duration-300">
                      {point.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
