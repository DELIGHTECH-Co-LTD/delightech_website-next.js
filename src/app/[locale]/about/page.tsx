import React from "react";
import Image from "next/image";
import History from "@/components/History";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("AboutPage");
  return (
    <>
      {/* Hero Section with Vision */}
      <section
        className="relative z-10 w-screen h-screen max-w-9xl mx-auto bg-cover bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: "url('/assets/angkorWat.png')",
        }}
      >
        <div className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-24">
          <Card className="bg-black/40 dark:bg-black/60 border-none backdrop-blur-sm max-w-2xl">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
                {t("vision_title")}
              </h2>
              <p className="text-white text-lg md:text-2xl font-semibold leading-relaxed">
                {t("vision_description")}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Founder Message Section */}
      <section className="relative min-h-screen hero-gradient flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 py-16 overflow-hidden gap-12 lg:gap-20">
        <Card className="max-w-3xl bg-transparent border-none shadow-none">
          <CardContent className="p-0 text-white space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 uppercase">
                {t("founder_message.title")}
              </h1>
              <Separator className="bg-white/20 mb-4" />
              <p className="text-lg mb-6 text-white/90">
                {t("founder_message.subtitle")}
              </p>
            </div>

            <div className="space-y-4 text-justify leading-relaxed text-white/95">
              <p>{t("founder_message.paragraph1")}</p>
              <p>{t("founder_message.paragraph2")}</p>
              <p>{t("founder_message.paragraph3")}</p>
              <p>{t("founder_message.paragraph4")}</p>
            </div>
          </CardContent>
        </Card>
        <div className="flex justify-center">
          <Image
            src="/assets/bVila.png"
            alt="Mr. Lay Vila - Founder & CEO"
            width={700}
            height={500}
            className="max-w-full drop-shadow-2xl rounded-lg"
            priority
          />
        </div>
      </section>
      <History />
    </>
  );
}
