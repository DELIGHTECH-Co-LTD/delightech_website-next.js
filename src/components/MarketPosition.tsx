import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";

export default function MarketPosition() {
  const t = useTranslations("InvestorPage");

  return (
    <section className="relative min-h-screen items-center justify-center pt-32 pb-24 px-6 lg:px-20 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 text-sm uppercase tracking-wider"
          >
            {t("market_position.badge")}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 uppercase">
            {t("market_position.title")}{" "}
            <span className="text-blue-700 dark:text-blue-700">
              {t("market_position.title_highlight")}
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            {t("market_position.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="border shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">
                {t("market_position.current_position.title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <p>{t("market_position.current_position.description1")}</p>
              <p>{t("market_position.current_position.description2")}</p>
            </CardContent>
          </Card>

          <Card className="border shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">
                {t("market_position.expansion_strategy.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  • {t("market_position.expansion_strategy.points.point1")}
                </li>
                <li>
                  • {t("market_position.expansion_strategy.points.point2")}
                </li>
                <li>
                  • {t("market_position.expansion_strategy.points.point3")}
                </li>
                <li>
                  • {t("market_position.expansion_strategy.points.point4")}
                </li>
                <li>
                  • {t("market_position.expansion_strategy.points.point5")}
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
