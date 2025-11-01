import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import { Icon } from "@iconify/react";

export default function InvestmentOpportunity() {
  const t = useTranslations("InvestorPage");

  const investmentHighlights = [
    {
      icon: "heroicons:check-circle-solid",
      title: t("opportunity.why_invest.points.point1"),
    },
    {
      icon: "heroicons:check-circle-solid",
      title: t("opportunity.why_invest.points.point2"),
    },
    {
      icon: "heroicons:check-circle-solid",
      title: t("opportunity.why_invest.points.point3"),
    },
    {
      icon: "heroicons:check-circle-solid",
      title: t("opportunity.why_invest.points.point4"),
    },
    {
      icon: "heroicons:check-circle-solid",
      title: t("opportunity.why_invest.points.point5"),
    },
    {
      icon: "heroicons:check-circle-solid",
      title: t("opportunity.why_invest.points.point6"),
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
              {t("opportunity.badge")}
            </span>
          </div>
          <h2 className="text-4xl font-light text-foreground mb-6 max-w-3xl">
            {t("opportunity.title")}{" "}
            <span className="text-blue-600 dark:text-blue-400 font-normal">
              {t("opportunity.title_highlight")}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl font-light leading-relaxed">
            {t("opportunity.description")}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Investment Highlights */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-light text-foreground mb-6">
                {t("opportunity.why_invest.title")}
              </h3>
            </div>

            <div className="grid gap-4">
              {investmentHighlights.map((highlight, index) => (
                <div
                  key={index}
                  className="group p-6 bg-card rounded-xl border border-border hover:border-blue-200/60 dark:hover:border-blue-600/30 hover:shadow-lg dark:hover:shadow-xl transition-all duration-300 cursor-default"
                  data-usal-md={`fade-u duration-400 delay-${index * 100}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-50 dark:bg-accent rounded-lg flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-muted transition-colors duration-300 border border-blue-100/50 dark:border-border shrink-0">
                      <Icon
                        icon={highlight.icon}
                        className="w-5 h-5 text-blue-600 dark:text-blue-400"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-muted-foreground/80 transition-colors duration-300">
                      {highlight.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* App Showcase */}
          <div
            className="flex justify-center lg:justify-end"
            data-usal-md="fade-l duration-600 delay-200"
          >
            <div className="relative">
              <Image
                src="/assets/LL_glass.png"
                alt="LUYLEUN App"
                width={350}
                height={350}
                className="relative max-w-full drop-shadow-2xl transform hover:scale-105 transition-transform duration-500 animate-pulse hover:animate-none"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
