import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";

export default function MessageFrom() {
  const t = useTranslations("AboutPage");
  return (
    <section className="px-6 lg:px-20 hero-gradient">
      <div className="max-w-7xl mx-auto">
        <h2 className="pt-10 text-3xl md:text-4xl font-bold text-center text-white uppercase mb-12">
          {t("founder_message.title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Card className="bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600 dark:text-blue-400">
                {t("founder_message.subtitle")}
              </CardTitle>
              <Badge variant="secondary" className="w-fit">
                Founder & CEO
              </Badge>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
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
