import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function InvestorHero() {
  const t = useTranslations("InvestorPage");

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background px-6 lg:px-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/Angkor_Wat.webp"
          alt="Investor Hero Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-gray-900/60 to-black/70 dark:from-black/70 dark:via-gray-900/60 dark:to-blue-900/70"></div>

      <div className="relative z-10 max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          {t("hero.title")}
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
          {t("hero.description")}
        </p>
      </div>
    </section>
  );
}
