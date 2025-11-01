"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Icon } from "@iconify/react";

interface AchievementCardProps {
  icon: string;
  value: string;
  label: string;
  description: string;
  index: number;
}

function AchievementCard({
  icon,
  value,
  label,
  description,
  index,
}: AchievementCardProps) {
  return (
    <div
      className="group p-8 bg-card rounded-2xl border border-border hover:border-blue-200/60 dark:hover:border-blue-600/30 hover:shadow-xl dark:hover:shadow-2xl hover:shadow-blue-500/5 dark:hover:shadow-blue-500/10 transition-all duration-500 cursor-default hover:-translate-y-1"
      data-usal-md={`fade-u duration-400 delay-${index * 100}`}
    >
      {/* Icon */}
      <div className="mb-6">
        <div className="w-12 h-12 bg-blue-50 dark:bg-accent rounded-lg flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-muted transition-colors duration-300 border border-blue-100/50 dark:border-border">
          <Icon
            icon={icon}
            className="w-6 h-6 text-blue-600 dark:text-blue-400"
          />
        </div>
      </div>

      {/* Content */}
      <div>
        <div className="text-3xl font-light text-foreground mb-2 group-hover:text-foreground/80 transition-colors duration-300">
          {value}
        </div>
        <h3 className="text-sm font-semibold text-foreground mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {label}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed group-hover:text-muted-foreground/80 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Achievement() {
  const t = useTranslations("InvestorPage.financial_highlights");
  const tAch = useTranslations("InvestorPage.achievements");

  const achievements = [
    {
      icon: "heroicons:users-solid",
      value: t("active_users.value"),
      label: t("active_users.label"),
      description: t("active_users.description"),
    },
    {
      icon: "heroicons:banknotes-solid",
      value: t("transaction_volume.value"),
      label: t("transaction_volume.label"),
      description: t("transaction_volume.description"),
    },
    {
      icon: "heroicons:chart-bar-solid",
      value: t("growth.value"),
      label: t("growth.label"),
      description: t("growth.description"),
    },
    {
      icon: "heroicons:globe-asia-australia-solid",
      value: t("markets_served.value"),
      label: t("markets_served.label"),
      description: t("markets_served.description"),
    },
    {
      icon: "heroicons:shield-check-solid",
      value: t("system_reliability.value"),
      label: t("system_reliability.label"),
      description: t("system_reliability.description"),
    },
    {
      icon: "heroicons:academic-cap-solid",
      value: t("security_certification.value"),
      label: t("security_certification.label"),
      description: t("security_certification.description"),
    },
    {
      icon: "heroicons:building-office-2-solid",
      value: t("financial_partners.value"),
      label: t("financial_partners.label"),
      description: t("financial_partners.description"),
    },
    {
      icon: "heroicons:clock-solid",
      value: t("processing_time.value"),
      label: t("processing_time.label"),
      description: t("processing_time.description"),
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
              Performance Metrics
            </span>
          </div>
          <h2 className="text-4xl font-light text-foreground mb-6 max-w-3xl">
            {tAch("title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl font-light leading-relaxed">
            {tAch("subtitle")}
          </p>
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              icon={achievement.icon}
              value={achievement.value}
              label={achievement.label}
              description={achievement.description}
              index={index}
            />
          ))}
        </div>

        {/* Professional Statistics Grid */}
        <div className="border-t border-border pt-16 bg-background">
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            data-usal-md="fade-u duration-400 delay-300"
          >
            <div className="text-center group cursor-default">
              <div className="text-2xl font-light text-foreground mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                2019
              </div>
              <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider group-hover:text-muted-foreground/80 transition-colors duration-300">
                Established
              </div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-2xl font-light text-foreground mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                5+
              </div>
              <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider group-hover:text-muted-foreground/80 transition-colors duration-300">
                Years Operating
              </div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-2xl font-light text-foreground mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                100%
              </div>
              <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider group-hover:text-muted-foreground/80 transition-colors duration-300">
                Compliance Rate
              </div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-2xl font-light text-foreground mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                24/7
              </div>
              <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider group-hover:text-muted-foreground/80 transition-colors duration-300">
                Support Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
