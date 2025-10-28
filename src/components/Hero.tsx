import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-blue-700 from-gray-900 via-black to-slate-900 dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-slate-900 flex flex-col lg:flex-row items-center justify-center lg:px-20 overflow-hidden gap-20 transition-all duration-700"
    >
      {/* Professional Background Animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-700/15 via-blue-800/12 to-blue-900/15 dark:from-blue-500/15 dark:via-purple-600/12 dark:to-indigo-600/15 animate-gradientFlow opacity-60"></div>

        {/* Secondary Animated Gradient */}
        <div className="absolute inset-0 bg-gradient-to-tl from-blue-800/10 via-blue-700/15 to-blue-950/12 dark:from-purple-600/10 dark:via-blue-500/15 dark:to-slate-700/12 animate-gradientFlowReverse opacity-50"></div>

        {/* Dynamic Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-blue-900/30 to-blue-800/50 dark:from-black/70 dark:via-gray-900/30 dark:to-slate-800/50 transition-all duration-700"></div>

        {/* Animated Background Clouds for Light Mode */}
        <div className="absolute inset-0 block dark:hidden">
          <div className="absolute top-16 left-16 w-72 h-36 bg-blue-700/20 rounded-full blur-3xl animate-pulse opacity-40"></div>
          <div className="absolute bottom-24 right-24 w-64 h-32 bg-blue-800/25 rounded-full blur-2xl animate-pulse delay-1000 opacity-35"></div>
          <div className="absolute top-1/2 left-8 w-48 h-24 bg-blue-900/30 rounded-full blur-xl animate-pulse delay-700 opacity-30"></div>
          <div className="absolute top-1/3 right-1/3 w-56 h-28 bg-blue-600/15 rounded-full blur-2xl animate-pulse delay-300 opacity-25"></div>
          <div className="absolute bottom-1/3 left-1/2 w-40 h-20 bg-blue-800/20 rounded-full blur-xl animate-pulse delay-900 opacity-30"></div>
        </div>

        <div className="absolute inset-0 block dark:hidden pointer-events-none">
          {/* Subtle Light Spots */}
          <div className="absolute top-10 left-1/4 w-1 h-1 bg-blue-200/40 rounded-full animate-pulse delay-200"></div>
          <div className="absolute top-1/4 right-1/4 w-0.5 h-0.5 bg-blue-100/35 rounded-full animate-pulse delay-800"></div>
          <div className="absolute bottom-1/3 left-1/5 w-0.5 h-0.5 bg-blue-200/30 rounded-full animate-pulse delay-1200"></div>
          <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-blue-300/45 rounded-full animate-pulse delay-400"></div>
          <div className="absolute bottom-1/4 right-1/3 w-0.5 h-0.5 bg-blue-200/35 rounded-full animate-pulse delay-1600"></div>

          {/* Blue Glow Effects */}
          <div className="absolute top-1/3 left-1/2 w-32 h-32 bg-blue-500/8 rounded-full blur-xl animate-pulse delay-600"></div>
          <div className="absolute bottom-1/2 right-1/5 w-24 h-24 bg-blue-600/12 rounded-full blur-lg animate-pulse delay-1000"></div>
        </div>

        {/* Animated Background for Dark Mode */}
        <div className="absolute inset-0 hidden dark:block">
          <div className="absolute top-16 left-16 w-72 h-36 bg-purple-900/20 rounded-full blur-3xl animate-pulse opacity-40"></div>
          <div className="absolute bottom-24 right-24 w-64 h-32 bg-blue-900/25 rounded-full blur-2xl animate-pulse delay-1000 opacity-35"></div>
          <div className="absolute top-1/2 left-8 w-48 h-24 bg-indigo-900/30 rounded-full blur-xl animate-pulse delay-700 opacity-30"></div>
          <div className="absolute top-1/3 right-1/3 w-56 h-28 bg-violet-900/15 rounded-full blur-2xl animate-pulse delay-300 opacity-25"></div>
          <div className="absolute bottom-1/3 left-1/2 w-40 h-20 bg-slate-700/20 rounded-full blur-xl animate-pulse delay-900 opacity-30"></div>
        </div>

        {/* Dark Mode Exclusive Effects */}
        <div className="absolute inset-0 hidden dark:block pointer-events-none">
          {/* Subtle Star Field */}
          <div className="absolute top-10 left-1/4 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-200"></div>
          <div className="absolute top-1/4 right-1/4 w-0.5 h-0.5 bg-white/25 rounded-full animate-pulse delay-800"></div>
          <div className="absolute bottom-1/3 left-1/5 w-0.5 h-0.5 bg-white/20 rounded-full animate-pulse delay-1200"></div>
          <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-white/35 rounded-full animate-pulse delay-400"></div>
          <div className="absolute bottom-1/4 right-1/3 w-0.5 h-0.5 bg-white/25 rounded-full animate-pulse delay-1600"></div>

          {/* Mystical Glow Effects */}
          <div className="absolute top-1/3 left-1/2 w-32 h-32 bg-purple-500/5 rounded-full blur-xl animate-pulse delay-600"></div>
          <div className="absolute bottom-1/2 right-1/5 w-24 h-24 bg-blue-500/8 rounded-full blur-lg animate-pulse delay-1000"></div>
        </div>

        {/* Professional Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30"></div>

        {/* Floating Gradient Orbs - Mode Responsive */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-linear-to-r from-blue-600/12 to-blue-700/15 dark:from-purple-600/12 dark:to-blue-600/15 rounded-full blur-3xl animate-pulse opacity-40"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-linear-to-r from-blue-700/14 to-blue-800/12 dark:from-indigo-600/14 dark:to-purple-600/12 rounded-full blur-3xl animate-pulse delay-1000 opacity-35"></div>
        <div className="absolute top-1/2 right-10 w-64 h-64 bg-linear-to-r from-blue-500/16 to-blue-800/14 dark:from-violet-600/16 dark:to-blue-600/14 rounded-full blur-2xl animate-pulse delay-500 opacity-30"></div>

        {/* Elegant Lines - Mode Responsive */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-400/25 dark:via-purple-400/25 to-transparent animate-pulse opacity-25"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-lineard-to-r from-transparent via-blue-300/20 dark:via-blue-400/20 to-transparent animate-pulse delay-1000 opacity-20"></div>

        {/* Professional Geometric Elements - Mode Responsive */}
        <div className="absolute top-1/6 right-1/4 w-2 h-32 bg-linear-to-b from-blue-400/25 dark:from-purple-400/25 to-transparent animate-pulse delay-300 opacity-30"></div>
        <div className="absolute bottom-1/5 left-1/3 w-2 h-24 bg-linear-to-t from-blue-300/22 dark:from-indigo-400/22 to-transparent animate-pulse delay-800 opacity-25"></div>

        {/* Subtle Corner Accents - Mode Responsive */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-blue-300/30 dark:border-purple-400/30 opacity-25"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-blue-300/30 dark:border-blue-400/30 opacity-25"></div>

        {/* Floating Dots - Mode Responsive */}
        <div className="absolute top-1/3 left-1/5 w-1 h-1 bg-blue-400/40 dark:bg-purple-400/40 rounded-full animate-pulse delay-400"></div>
        <div className="absolute bottom-1/4 right-1/6 w-1 h-1 bg-blue-300/35 dark:bg-blue-400/35 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-2/3 left-2/3 w-1 h-1 bg-blue-400/38 dark:bg-indigo-400/38 rounded-full animate-pulse delay-900"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 flex items-center gap-12 relative z-10">
        <div className="w-1/2 space-y-8">
          {/* Enhanced Title with Gradient Text */}
          <h1 className="text-5xl md:text-7xl text-white dark:text-slate-100 h1 leading-tight animate-fadeInUp transition-colors duration-700">
            <span className="inline-block transform hover:scale-105 transition-transform duration-300">
              {t("title")}
            </span>{" "}
            <span className="text-yellow-400 dark:text-blue-400">
              {t("title_highlight")}
            </span>
            <span className="inline-block animate-bounce bg-linear-to-r from-red-200 via-green-500 to-red-400 dark:from-blue-400 dark:via-red-400 dark:to-blue-400 bg-clip-text text-transparent">
              .
            </span>
          </h1>

          {/* Enhanced Description */}
          <p className="text-lg text-blue-100 dark:text-slate-300 leading-relaxed max-w-lg animate-fadeInUp delay-300 transition-colors duration-700">
            {t("description")}
          </p>

          {/* Enhanced Button Group */}
          <div className="flex items-center gap-6 animate-fadeInUp delay-500">
            <Link href="/contact">
              <Button
                size={"lg"}
                className="group relative overflow-hidden rounded-full bg-blue-600 hover:bg-blue-700 text-white border-none px-8 py-4 font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-500"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t("contact_us")}
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </span>
              </Button>
            </Link>
          </div>
        </div>

        <div className="w-1/2 relative">
          {/* Animated Logo Container */}
          <div className="relative flex items-center justify-center group">
            {/* Logo Glow Effect */}
            <div className="absolute inset-0 bg-linear-to-r from-blue-500/20 via-purple-500/10 to-cyan-500/20 dark:from-purple-500/20 dark:via-blue-500/10 dark:to-indigo-500/20 rounded-full blur-3xl animate-pulse opacity-0 group-hover:opacity-60 transition-opacity duration-700"></div>

            {/* Floating Ring Animation */}
            <div className="absolute inset-0 w-full h-full">
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-blue-300/20 dark:border-purple-400/20 rounded-full animate-spin opacity-30"
                style={{ animationDuration: "20s" }}
              ></div>
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-cyan-300/15 dark:border-indigo-400/15 rounded-full animate-spin opacity-20"
                style={{
                  animationDuration: "15s",
                  animationDirection: "reverse",
                }}
              ></div>
            </div>

            {/* Main Logo with Enhanced Animations */}
            <div className="relative z-10 animate-fadeInUp delay-700">
              <Image
                src="/assets/DLTGlass.png"
                alt="Delightech Logo"
                width={1000}
                height={700}
                className="object-contain transition-all duration-700 hover:scale-110 hover:rotate-2 drop-shadow-2xl hover:drop-shadow-[0_20px_35px_rgba(59,130,246,0.3)] dark:hover:drop-shadow-[0_20px_35px_rgba(147,51,234,0.3)] animate-float"
                priority
              />
            </div>

            {/* Orbiting Particles */}
            <div
              className="absolute inset-0 w-full h-full animate-spin"
              style={{ animationDuration: "30s" }}
            >
              <div className="absolute top-10 left-1/2 w-2 h-2 bg-blue-400/60 dark:bg-blue-400/60 rounded-full animate-pulse"></div>
              <div className="absolute bottom-10 left-1/2 w-1.5 h-1.5 bg-cyan-400/50 dark:bg-blue-400/50 rounded-full animate-pulse delay-500"></div>
              <div className="absolute top-1/2 left-10 w-1 h-1 bg-blue-300/40 dark:bg-blue-300/40 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 right-10 w-1 h-1 bg-blue-400/40 dark:bg-blue-400/40 rounded-full animate-pulse delay-1500"></div>
            </div>

            {/* Gradient Border Animation */}
            <div
              className="absolute inset-0 rounded-full bg-linear-to-r from-blue-500 via-blue-500 to-cyan-500 dark:from-blue-500 dark:via-blue-500 dark:to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-gradientSpin blur-sm"
              style={{ padding: "2px" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
