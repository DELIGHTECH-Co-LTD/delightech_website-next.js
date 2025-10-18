import React from "react";
import Image from "next/image";
import History from "@/components/History";
import { useTranslations } from "next-intl";
import MessageFrom from "@/components/MessageFrom";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "About Us"
}

export default function AboutPage() {
  const t = useTranslations("AboutPage");
  return (
    <>
      {/* Hero Section with Vision */}
      <section className="relative min-h-screen bg-blue-700 from-gray-900 via-black to-slate-900 dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-slate-900 flex items-center justify-center lg:px-20 overflow-hidden transition-all duration-700">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/Angkor_Wat.webp"
            alt="About Us Background"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Professional Background Animations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-700/15 via-blue-800/12 to-blue-900/15 dark:from-blue-500/15 dark:via-purple-600/12 dark:to-indigo-600/15 animate-gradientFlow opacity-60"></div>

          {/* Secondary Animated Gradient */}
          <div className="absolute inset-0 bg-gradient-to-tl from-blue-800/10 via-blue-700/15 to-blue-950/12 dark:from-purple-600/10 dark:via-blue-500/15 dark:to-slate-700/12 animate-gradientFlowReverse opacity-50"></div>

          {/* Dynamic Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-blue-900/30 to-blue-800/50 dark:from-black/70 dark:via-gray-900/30 dark:to-slate-800/50 transition-all duration-700"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center px-8 md:px-24">
          <div className="text-center max-w-4xl">
            <h2 className="text-white text-4xl md:text-6xl font-bold mb-6">
              {t("vision_title")}
            </h2>
            <p className="text-blue-100 text-xl md:text-2xl leading-relaxed">
              {t("vision_description")}
            </p>
          </div>
        </div>
      </section>
      <MessageFrom />
      <History />
    </>
  );
}
