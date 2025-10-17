import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";

export default function TeamLeadership() {
  const t = useTranslations("InvestorPage");

  return (
    <section className="py-24 px-6 lg:px-20 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground uppercase mb-12">
          {t("leadership.title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Card className="border shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">
                {t("leadership.vila.name")}
              </CardTitle>
              <Badge variant="secondary" className="w-fit">
                {t("leadership.vila.position")}
              </Badge>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <p>{t("leadership.vila.description1")}</p>
              <p>{t("leadership.vila.description2")}</p>
            </CardContent>
          </Card>
          <div className="flex justify-center">
            <Image
              src="/assets/bVila.png"
              alt={
                t("leadership.vila.name") +
                " - " +
                t("leadership.vila.position")
              }
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
