"use client";
import React from "react";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");

  return (
    <section
      id="about_us"
      className="relative z-10 w-screen h-screen max-w-9xl mx-auto bg-cover bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: "url('/assets/Angkor_Wat.webp')",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h2
          data-usal="fade-d duration-800"
          className="text-4xl md:text-5xl font-bold mb-5 text-center text-white"
        >
          {t("title")}
        </h2>
        <h3
          data-usal="fade-u split-word split-delay-100 duration-1000"
          className="text-white text-2xl md:text-4xl font-bold leading-relaxed mb-6"
        >
          "{t("quote")}"
        </h3>
        <a
          href="/about"
          data-usal="fade-u delay-400 duration-800"
          className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-3xl transition"
        >
          {t("find_more")}
        </a>
      </div>
    </section>
  );
}
