import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Particles } from "./ui/shadcn-io/particles";

export default function MessageFrom() {
  const t = useTranslations("AboutPage");

  return (
    <section className="relative min-h-screen items-center justify-center px-4 sm:px-6 lg:px-20 py-16 sm:py-20 lg:py-24 bg-background overflow-hidden">
      <div className="absolute inset-0">
        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          staticity={50}
          color="#ffffff"
          size={0.8}
        />
        {/* Soft accent shapes */}
        <div className="absolute top-20 right-20 w-80 h-80 bg-blue-50 dark:bg-blue-950/20 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-slate-50 dark:bg-slate-800/20 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Clean Message Section */}
          <div className="order-2 lg:order-1 space-y-10">
            {/* Minimal Header */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 dark:bg-blue-950/50 rounded-xl">
                  <MessageCircle className="w-5 h-5 text-blue-700 dark:text-blue-700" />
                </div>
                <Badge
                  variant="outline"
                  className="border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 px-3 py-1 text-sm font-medium"
                >
                  Leadership Message
                </Badge>
              </div>

              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-900 dark:text-white leading-tight tracking-tight">
                  {t("founder_message.subtitle")}
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 font-light">
                  Founder & CEO
                </p>
              </div>
            </div>

            {/* Clean Content */}
            <div className="space-y-8">
              <div className="space-y-6 text-slate-700 dark:text-slate-300 text-lg leading-relaxed font-light">
                <p className="first-letter:text-5xl first-letter:font-light first-letter:text-blue-700 dark:first-letter:text-blue-700 first-letter:mr-3 first-letter:float-left first-letter:leading-none">
                  {t("founder_message.paragraph1")}
                </p>
                <p>{t("founder_message.paragraph2")}</p>
                <p>{t("founder_message.paragraph3")}</p>
              </div>

              {/* Clean Quote */}
              <div className="relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-blue-200 dark:bg-blue-800 rounded-full"></div>
                <blockquote className="pl-8 py-4">
                  <p className="text-xl text-slate-900 dark:text-white font-medium italic leading-relaxed">
                    "{t("founder_message.paragraph4")}"
                  </p>
                </blockquote>
              </div>

              {/* Clean CTA */}
              <div className="pt-4">
                <button className="group inline-flex items-center gap-3 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium rounded-full hover:bg-slate-800 dark:hover:bg-slate-100 transition-all duration-200 shadow-sm hover:shadow-md">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                </button>
              </div>
            </div>
          </div>

          {/* Stylish Image Section */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-lg group">
              {/* Modern Image Container */}
              <div className="relative">
                {/* Animated background elements */}
                <div className="absolute -inset-6 bg-gradient-to-r from-blue-100 via-indigo-50 to-purple-100 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>

                {/* Floating decorative elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-glass backdrop-blur-sm border border-blue-300/30 rounded-2xl rotate-45 opacity-80 animate-pulse shadow-lg"></div>
                <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-blue-400/20 backdrop-blur-sm border border-blue-300/30 rounded-full opacity-60 animate-pulse delay-500 shadow-lg"></div>
                <div className="absolute top-1/4 -right-2 w-6 h-6 bg-blue-300/20 backdrop-blur-sm border border-blue-200/30 rounded-lg rotate-12 opacity-70 animate-bounce delay-1000 shadow-lg"></div>

                {/* Main image frame with modern styling */}
                <div className="relative p-1 bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200 dark:from-blue-800 dark:via-green-800 dark:to-blue-800 rounded-[1.5rem] shadow-2xl group-hover:shadow-blue-500/25 transition-shadow duration-500">
                  <div className="relative p-3 bg-white dark:bg-slate-900 rounded-[1.25rem]">
                    <div className="relative overflow-hidden rounded-[1rem]">
                      <Image
                        src="/assets/bVila.png"
                        alt={t("founder_message.subtitle") + " - Founder & CEO"}
                        width={800}
                        height={500}
                        className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-105"
                        priority
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 40vw"
                      />

                      {/* Modern overlay effects */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                </div>

                {/* Modern badge design */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 group-hover:scale-105 transition-transform duration-300">
                  <div className="relative">
                    {/* Badge glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-50"></div>
                    <div className="relative bg-gradient-to-r from-blue-600 to-green-600 px-6 py-3 rounded-2xl shadow-xl border border-blue-400/30">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                          <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75"></div>
                        </div>
                        <span className="text-white font-semibold text-sm tracking-wide">
                          CEO & FOUNDER
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Geometric accent lines */}
                <div className="absolute top-8 left-0 w-16 h-0.5 bg-gradient-to-r from-blue-500 to-transparent opacity-60"></div>
                <div className="absolute bottom-8 right-0 w-16 h-0.5 bg-gradient-to-l from-indigo-500 to-transparent opacity-60"></div>

                {/* Corner accents */}
                <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-blue-400 opacity-60"></div>
                <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-indigo-400 opacity-60"></div>

                {/* Professional info overlay */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg border border-slate-200/50 dark:border-slate-600/50">
                    <div className="text-xs font-medium text-slate-700 dark:text-slate-300">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span>LEADERSHIP</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                        <span>INNOVATION</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clean Stats/Highlights */}
        <div className="mt-20 pt-16 border-t border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-2">
              <div
                className="text-3xl font-light text-slate-900 dark:text-white"
                data-usal="count-[10] duration-2000"
              >
                10+
              </div>
              <p className="text-slate-600 dark:text-slate-400 font-light">
                Years Experience
              </p>
            </div>
            <div className="text-center space-y-2">
              <div
                className="text-3xl font-light text-slate-900 dark:text-white"
                data-usal="count-[50] duration-2000"
              >
                50K+
              </div>
              <p className="text-slate-600 dark:text-slate-400 font-light">
                Users Served
              </p>
            </div>
            <div className="text-center space-y-2">
              <div
                className="text-3xl font-light text-slate-900 dark:text-white"
                data-usal="count-[100] duration-2000"
              >
                100%
              </div>
              <p className="text-slate-600 dark:text-slate-400 font-light">
                Commitment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
