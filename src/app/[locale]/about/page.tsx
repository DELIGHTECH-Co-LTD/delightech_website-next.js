import React from "react";
import Image from "next/image";
import History from "@/components/History";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";
import MessageFrom from "@/components/MassageFrom";
export default function AboutPage() {
  const t = useTranslations("AboutPage");
  return (
    <>
      {/* Hero Section with Vision */}
      <section
        className="relative z-10 w-screen h-screen max-w-9xl mx-auto bg-cover bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: "url('/assets/angkor.jpg')",
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

      <MessageFrom />
      <History />
    </>
  );
}
