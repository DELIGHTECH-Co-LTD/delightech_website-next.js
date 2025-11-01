"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Icon } from "@iconify/react";

interface AchievementCardProps {
  icon: string;
  value: string;
  label: string;
  description: string;
  index: number;
  isActive: boolean;
}

function AchievementCard({
  icon,
  value,
  label,
  description,
  index,
  isActive,
}: AchievementCardProps) {
  return (
    <div
      className={`
        shrink-0 w-full sm:w-[380px] md:w-[420px] bg-white dark:bg-slate-900 rounded-none p-12 
        transition-all duration-300 border-0 border-l-4 relative mx-6
        ${isActive ? "border-l-blue-600 dark:border-l-blue-400 shadow-sm" : "border-l-gray-200 dark:border-l-slate-700 opacity-70"}
      `}
      data-usal-md={`fade-u duration-400 delay-${index * 50}`}
    >
      {/* Minimal Icon */}
      <div className="mb-8">
        <div className="w-12 h-12 flex items-center justify-center">
          <Icon
            icon={icon}
            className={`
              w-6 h-6 transition-colors duration-200
              ${isActive ? "text-blue-600 dark:text-blue-400" : "text-gray-400 dark:text-slate-500"}
            `}
          />
        </div>
      </div>

      {/* Professional Content */}
      <div>
        <div
          className={`
          text-3xl font-light text-slate-900 dark:text-white mb-2 transition-colors duration-200
          ${isActive ? "font-normal" : ""}
        `}
        >
          {value}
        </div>
        <div className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-4 uppercase tracking-wider">
          {label}
        </div>
        <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm font-light">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Achievement() {
  const t = useTranslations("InvestorPage.financial_highlights");
  const tAch = useTranslations("InvestorPage.achievements");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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

  // Professional auto-slide with appropriate pacing
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % achievements.length);
    }, 5000); // Professional 5-second intervals for executive review

    return () => clearInterval(interval);
  }, [achievements.length, isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 12 seconds for professional interaction time
    setTimeout(() => setIsAutoPlaying(true), 12000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % achievements.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 12000);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + achievements.length) % achievements.length
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 12000);
  };

  return (
    <section className="py-32 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-8">
        {/* Professional Section Header */}
        <div className="mb-24" data-usal-md="fade-d duration-400">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-blue-600 dark:bg-blue-400"></div>
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              {tAch("badge")}
            </span>
          </div>
          <h2 className="text-4xl font-light text-slate-900 dark:text-white mb-6 max-w-3xl">
            {tAch("title")}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl font-light leading-relaxed">
            {tAch("subtitle")}
          </p>
        </div>

        {/* Professional Sliding Achievement Cards */}
        <div
          className="relative mb-20"
          data-usal-md="fade-u duration-500 delay-200"
        >
          {/* Minimal Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors duration-200"
            aria-label="Previous metric"
          >
            <Icon icon="heroicons:chevron-left-solid" className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors duration-200"
            aria-label="Next metric"
          >
            <Icon icon="heroicons:chevron-right-solid" className="w-5 h-5" />
          </button>

          {/* Professional Sliding Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-400 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {achievements.map((achievement, index) => (
                <div key={index} className="w-full flex justify-center">
                  <AchievementCard
                    icon={achievement.icon}
                    value={achievement.value}
                    label={achievement.label}
                    description={achievement.description}
                    index={index}
                    isActive={index === currentSlide}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Minimal Slide Indicators */}
          <div className="flex justify-center mt-12 gap-3">
            {achievements.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`
                  w-1 h-8 transition-all duration-200
                  ${
                    index === currentSlide
                      ? "bg-blue-600 dark:bg-blue-400"
                      : "bg-gray-300 dark:bg-slate-600 hover:bg-gray-400 dark:hover:bg-slate-500"
                  }
                `}
                aria-label={`View metric ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Professional Statistics Grid */}
        <div className="border-t border-gray-200 dark:border-slate-800 pt-20">
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-12"
            data-usal-md="fade-u duration-400 delay-300"
          >
            <div className="text-center">
              <div className="text-2xl font-light text-slate-900 dark:text-white mb-2">
                {tAch("statistics.established.value")}
              </div>
              <div className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                {tAch("statistics.established.label")}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-light text-slate-900 dark:text-white mb-2">
                {tAch("statistics.years_operating.value")}
              </div>
              <div className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                {tAch("statistics.years_operating.label")}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-light text-slate-900 dark:text-white mb-2">
                {tAch("statistics.compliance_rate.value")}
              </div>
              <div className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                {tAch("statistics.compliance_rate.label")}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-light text-slate-900 dark:text-white mb-2">
                {tAch("statistics.support_available.value")}
              </div>
              <div className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                {tAch("statistics.support_available.label")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
