import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";

export default function MessageFrom() {
  const t = useTranslations("AboutPage");

  return (
    <section className="px-4 sm:px-6 lg:px-20 py-12 sm:py-16 lg:py-20 hero-gradient relative">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Message Card - Appears first on mobile */}
          <Card className="bg-glass backdrop-blur-sm border-none order-2 lg:order-1">
            <CardHeader className="space-y-3 sm:space-y-4 pb-4 sm:pb-6">
              <CardTitle className="text-xl sm:text-2xl lg:text-3xl text-blue-500 leading-tight">
                {t("founder_message.subtitle")}
              </CardTitle>
              <Badge
                variant="secondary"
                className="w-fit bg-blue-500 text-white dark:bg-blue-600 text-xs sm:text-sm px-3 py-1"
              >
                Founder & CEO
              </Badge>
            </CardHeader>

            <CardContent className="text-white space-y-4 sm:space-y-5 lg:space-y-6 text-sm sm:text-base lg:text-lg leading-relaxed">
              <p className="first-letter:text-2xl first-letter:font-bold first-letter:text-blue-400">
                {t("founder_message.paragraph1")}
              </p>
              <p>{t("founder_message.paragraph2")}</p>
              <p>{t("founder_message.paragraph3")}</p>
              <p className="font-medium italic text-blue-100">
                {t("founder_message.paragraph4")}
              </p>
            </CardContent>
          </Card>

          {/* Image - Appears second on mobile, optimized sizing */}
          <div className="flex justify-center items-center order-1 lg:order-2">
            <div className="relative w-full max-w-md lg:max-w-full">
              <Image
                src="/assets/bVila.png"
                alt={t("founder_message.subtitle") + " - Founder & CEO"}
                width={800}
                height={500}
                className="w-full h-auto drop-shadow-2xl rounded-lg object-cover"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
              />
              {/* Decorative element behind image */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg blur-2xl -z-10 opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
