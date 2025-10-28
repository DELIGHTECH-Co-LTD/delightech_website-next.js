import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
export default function InvestorHero() {
  const t = useTranslations("InvestorPage");

  return (
    <section className="min-h-screen flex items-center justify-center bg-background px-6 lg:px-20">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          {t("hero.title")}
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
          {t("hero.description")}
        </p>
      </div>
    </section>
  );
}
