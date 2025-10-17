import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";

export default function MarketPosition() {
  const t = useTranslations("InvestorPage");

  return (
    <section className="py-24 px-6 lg:px-20 hero-gradient">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white uppercase">
          {t("market_position.title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl text-blue-600 dark:text-blue-400">
                {t("market_position.current_position.title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <p>{t("market_position.current_position.description1")}</p>
              <p>{t("market_position.current_position.description2")}</p>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl text-blue-600 dark:text-blue-400">
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
