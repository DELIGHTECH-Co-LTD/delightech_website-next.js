import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";

export default function InvestmentOpportunity() {
  const t = useTranslations("InvestorPage");

  return (
    <section className="relative min-h-screen items-center justify-center pt-32 pb-24 px-6 lg:px-20 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 text-sm uppercase tracking-wider"
          >
            {t("opportunity.badge")}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 uppercase">
            {t("opportunity.title")}{" "}
            <span className="text-blue-600 dark:text-blue-400">
              {t("opportunity.title_highlight")}
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            {t("opportunity.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Card className="border shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">
                {t("opportunity.why_invest.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-foreground mr-3 font-bold">•</span>
                  <span>{t("opportunity.why_invest.points.point1")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-foreground mr-3 font-bold">•</span>
                  <span>{t("opportunity.why_invest.points.point2")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-foreground mr-3 font-bold">•</span>
                  <span>{t("opportunity.why_invest.points.point3")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-foreground mr-3 font-bold">•</span>
                  <span>{t("opportunity.why_invest.points.point4")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-foreground mr-3 font-bold">•</span>
                  <span>{t("opportunity.why_invest.points.point5")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-foreground mr-3 font-bold">•</span>
                  <span>{t("opportunity.why_invest.points.point6")}</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <Image
              src="/assets/luyleun2.png"
              alt="LUYLEUN App"
              width={400}
              height={400}
              className="max-w-full drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
