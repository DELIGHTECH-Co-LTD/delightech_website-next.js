import React from "react";
import { useTranslations } from "next-intl";

export default function InvestorHero() {
  const t = useTranslations("InvestorPage");

  return (
    <section
      className="relative z-10 w-screen h-screen max-w-9xl mx-auto bg-cover bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: "url('/assets/angkorwat.png')",
      }}
    >
      <div className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-24">
        <div className="bg-black/40 dark:bg-black/60 p-4 md:p-6 rounded-lg max-w-3xl backdrop-blur-sm">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
            {t("hero.title")}
          </h1>
          <p className="text-white text-lg md:text-2xl font-semibold leading-relaxed">
            {t("hero.description")}
          </p>
        </div>
      </div>
    </section>
  );
}
