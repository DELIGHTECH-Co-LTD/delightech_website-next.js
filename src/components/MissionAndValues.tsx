"use client";

import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import { Particles } from "./ui/shadcn-io/particles";
import { Target, Diamond, Star, Lightbulb, Shield, Award } from "lucide-react";

export default function MissionAndValues() {
  const t = useTranslations("MissionAndValues");

  // STRIDE Values with icons and animations
  const strideValues = [
    {
      icon: Target,
      title: t("values.passion.title"),
      description: t("values.passion.description"),
      color: "red", // Red theme
      from: "from-red-500",
      to: "to-red-600",
      darkFrom: "dark:from-red-400",
      darkTo: "dark:to-red-500",
      textColor: "text-red-600",
      darkTextColor: "dark:text-red-400",
      bgColor: "bg-red-500/10",
      darkBgColor: "dark:bg-red-400/10",
    },
    {
      icon: Shield,
      title: t("values.collaboration.title"),
      description: t("values.collaboration.description"),
      color: "yellow", // Yellow theme
      from: "from-yellow-500",
      to: "to-yellow-600",
      darkFrom: "dark:from-yellow-400",
      darkTo: "dark:to-yellow-500",
      textColor: "text-yellow-600",
      darkTextColor: "dark:text-yellow-400",
      bgColor: "bg-yellow-500/10",
      darkBgColor: "dark:bg-yellow-400/10",
    },
    {
      icon: Diamond,
      title: t("values.innovation.title"),
      description: t("values.innovation.description"),
      color: "green", // Green theme
      from: "from-green-500",
      to: "to-green-600",
      darkFrom: "dark:from-green-400",
      darkTo: "dark:to-green-500",
      textColor: "text-green-600",
      darkTextColor: "dark:text-green-400",
      bgColor: "bg-green-500/10",
      darkBgColor: "dark:bg-green-400/10",
    },
    {
      icon: Lightbulb,
      title: t("values.integrity.title"),
      description: t("values.integrity.description"),
      color: "blue", // Blue theme
      from: "from-blue-500",
      to: "to-blue-600",
      darkFrom: "dark:from-blue-400",
      darkTo: "dark:to-blue-500",
      textColor: "text-blue-600",
      darkTextColor: "dark:text-blue-400",
      bgColor: "bg-blue-500/10",
      darkBgColor: "dark:bg-blue-400/10",
    },
    {
      icon: Star,
      title: t("values.excellence.title"),
      description: t("values.excellence.description"),
      color: "sky", // Sky blue theme
      from: "from-sky-500",
      to: "to-sky-600",
      darkFrom: "dark:from-sky-400",
      darkTo: "dark:to-sky-500",
      textColor: "text-sky-600",
      darkTextColor: "dark:text-sky-400",
      bgColor: "bg-sky-500/10",
      darkBgColor: "dark:bg-sky-400/10",
    },
    {
      icon: Award,
      title: t("values.excellent.title"),
      description: t("values.excellent.description"),
      color: "indigo", // Royal blue (indigo) theme
      from: "from-indigo-500",
      to: "to-indigo-600",
      darkFrom: "dark:from-indigo-400",
      darkTo: "dark:to-indigo-500",
      textColor: "text-indigo-600",
      darkTextColor: "dark:text-indigo-400",
      bgColor: "bg-indigo-500/10",
      darkBgColor: "dark:bg-indigo-400/10",
    },
  ];

  return (
    <section className="relative min-h-screen items-center justify-center pt-32 pb-24 px-6 lg:px-20 overflow-hidden bg-background">
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        staticity={50}
        color="#ffffff"
        size={0.8}
      />

      <div className="max-w-7xl mx-auto">
        {/* Mission Section */}
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 text-sm uppercase tracking-wider"
          >
            {t("mission.badge")}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 uppercase">
            {t("mission.our_mission")}
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            {t("mission.description")}
          </p>
        </div>

        {/* Mission Content */}
        <div className="relative max-w-6xl mx-auto mt-16">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Logo Section - Now on the left */}
            <div className="w-full lg:w-1/2 relative transform hover:scale-105 transition-transform duration-500">
              <div className="relative aspect-square max-w-[500px] mx-auto">
                <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-400/10 rounded-full animate-pulse"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-blue-500/20 to-blue-700/20 dark:from-blue-400/20 dark:to-blue-600/20 rounded-full blur-xl"></div>
                <Image
                  src="/assets/DLT.png"
                  alt="Delightech Mission"
                  fill
                  className="object-contain p-8"
                  priority
                />
              </div>
            </div>

            {/* Mission Details - Now on the right */}
            <div className="w-full lg:w-1/2 flex flex-col gap-8">
              {/* Vision Section */}
              <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-100 dark:border-blue-900 shadow-lg hover:shadow-blue-500/30 dark:hover:shadow-blue-600/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-xl">
                    <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {t("mission.our_vision")}
                  </h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t("mission.vision")}
                </p>
              </div>

              {/* Approach Section */}
              <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-100 dark:border-blue-900 shadow-lg hover:shadow-blue-500/30 dark:hover:shadow-blue-600/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-xl">
                    <Diamond className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {t("mission.our_approach")}
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 group">
                    <div className="w-2 h-2 mt-3 rounded-full bg-blue-500 dark:bg-blue-400 group-hover:scale-150 transition-transform" />
                    <p className="text-gray-700 dark:text-gray-300 flex-1 leading-relaxed">
                      {t("mission.keyPoint1")}
                    </p>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <div className="w-2 h-2 mt-3 rounded-full bg-blue-500 dark:bg-blue-400 group-hover:scale-150 transition-transform" />
                    <p className="text-gray-700 dark:text-gray-300 flex-1 leading-relaxed">
                      {t("mission.keyPoint2")}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* STRIDE Values Section */}
        <div className="mt-32">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="mb-4 text-sm uppercase tracking-wider"
            >
              {t("values.badge")}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 uppercase">
              {t("values.title")}
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              {t("values.description")}
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {strideValues.map((value, index) => (
              <div
                key={index}
                className={`group relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border ${value.textColor}/20 dark:border-${value.color}-900 rounded-2xl shadow-lg hover:shadow-${value.color}-500/30 dark:hover:shadow-${value.color}-600/50 p-8 transition-all duration-500 hover:-translate-y-2 overflow-hidden`}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${value.from}/5 via-transparent ${value.to}/5 ${value.darkFrom}/10 dark:via-transparent ${value.darkTo}/10 transition-opacity duration-500 group-hover:opacity-100`}
                />

                {/* Glowing Effect */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${value.from} ${value.to} rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}
                />

                {/* Content Container */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="mb-6 relative">
                    <div className="relative inline-flex">
                      <div
                        className={`absolute -inset-4 ${value.bgColor} ${value.darkBgColor} rounded-full blur-lg group-hover:animate-pulse transition-opacity duration-500`}
                      />
                      <div
                        className={`relative flex items-center justify-center w-16 h-16 bg-gradient-to-br ${value.from} ${value.to} ${value.darkFrom} ${value.darkTo} rounded-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
                      >
                        <value.icon className="w-8 h-8 text-white transform transition-transform duration-500 group-hover:scale-110" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3
                      className={`text-2xl font-bold ${value.textColor} ${value.darkTextColor} transform transition-all duration-500 group-hover:translate-x-2`}
                    >
                      {value.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed transform transition-all duration-500 group-hover:translate-x-2">
                      {value.description}
                    </p>
                  </div>

                  {/* Bottom Accent */}
                  <div
                    className={`mt-6 h-1 bg-gradient-to-r ${value.from} ${value.to} ${value.darkFrom} ${value.darkTo} rounded-full transform origin-left transition-all duration-500 scale-x-0 group-hover:scale-x-100`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
