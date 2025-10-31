"use client";
import React from "react";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");
  return (
    <section
      id="about_us"
      className="relative z-10 w-screen min-h-screen max-w-9xl mx-auto bg-cover bg-no-repeat flex items-center justify-center py-20"
      style={{
        backgroundImage: "url('/assets/Angkor_Wat.webp')",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl w-full">
        <h2
          data-usal-md="fade-d duration-800"
          className="text-4xl md:text-5xl font-bold mb-5 text-center text-white"
        >
          {t("title")}
        </h2>
        <h3
          data-usal-md="fade-u split-word split-delay-100 duration-1000"
          className="text-white text-xl sm:text-2xl md:text-4xl font-bold leading-relaxed mb-6 wrap-break-words"
        >
          "{t("quote")}"
        </h3>
        <a
          href="/about"
          data-usal-md="fade-u delay-400 duration-800"
          className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-3xl transition"
        >
          {t("find_more")}
        </a>
      </div>
    </section>
  );
}
