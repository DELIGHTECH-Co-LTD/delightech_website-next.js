import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";

export default function MessageFrom() {
  const t = useTranslations("AboutPage");
  return (
    <section className="px-6 lg:px-20 hero-gradient relative">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Card className="bg-glass backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-500">
                {t("founder_message.subtitle")}
              </CardTitle>
              <Badge variant="secondary" className="w-fit">
                Founder & CEO
              </Badge>
            </CardHeader>
            <CardContent className="text-white space-y-4">
              <p>{t("founder_message.paragraph1")}</p>
              <p>{t("founder_message.paragraph2")}</p>
              <p>{t("founder_message.paragraph3")}</p>
              <p>{t("founder_message.paragraph4")}</p>
            </CardContent>
          </Card>
          <div className="flex justify-center">
            <Image
              src="/assets/bVila.png"
              alt={t("founder_message.subtitle") + " - Founder & CEO"}
              width={800}
              height={500}
              className="max-w-full drop-shadow-2xl rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
