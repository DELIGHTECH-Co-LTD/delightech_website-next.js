import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";

export default function FinancialHighlights() {
  const t = useTranslations("InvestorPage");

  return (
    <section className="py-24 px-6 lg:px-20 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground uppercase">
          {t("financial_highlights.title")}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {t("financial_highlights.active_users.value")}
                </h3>
                <p className="text-foreground font-semibold">
                  {t("financial_highlights.active_users.label")}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  {t("financial_highlights.active_users.description")}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                  {t("financial_highlights.transaction_volume.value")}
                </h3>
                <p className="text-foreground font-semibold">
                  {t("financial_highlights.transaction_volume.label")}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  {t("financial_highlights.transaction_volume.description")}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-red-600 dark:text-red-400 mb-2">
                  {t("financial_highlights.growth.value")}
                </h3>
                <p className="text-foreground font-semibold">
                  {t("financial_highlights.growth.label")}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  {t("financial_highlights.growth.description")}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
