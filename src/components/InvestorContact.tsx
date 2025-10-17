import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";

export default function InvestorContact() {
  const t = useTranslations("InvestorPage");

  return (
    <section className="relative min-h-screen items-center justify-center pt-32 pb-24 px-6 lg:px-20 overflow-hidden bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 text-sm uppercase tracking-wider"
          >
            {t("contact.badge")}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 uppercase">
            {t("contact.title")}{" "}
            <span className="text-blue-600 dark:text-blue-400">
              {t("contact.title_highlight")}
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-12">
            {t("contact.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">
                {t("contact.investor_relations.title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground text-left">
              <p>
                <span className="font-semibold text-foreground">Email:</span>{" "}
                {t("contact.investor_relations.email")}
              </p>
              <p>
                <span className="font-semibold text-foreground">Phone:</span>{" "}
                {t("contact.investor_relations.phone")}
              </p>
              <p>
                <span className="font-semibold text-foreground">Address:</span>{" "}
                {t("contact.investor_relations.address")}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">
                {t("contact.investment_range.title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground text-left">
              <p>
                <span className="font-semibold text-foreground">
                  {t("contact.investment_range.minimum")}
                </span>{" "}
                {t("contact.investment_range.minimum_value")}
              </p>
              <p>
                <span className="font-semibold text-foreground">
                  {t("contact.investment_range.target")}
                </span>{" "}
                {t("contact.investment_range.target_value")}
              </p>
              <p>
                <span className="font-semibold text-foreground">
                  {t("contact.investment_range.use_of_funds")}
                </span>{" "}
                {t("contact.investment_range.use_of_funds_value")}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <Button size="lg" className="text-lg">
            {t("contact.request_deck")}
          </Button>
        </div>
      </div>
    </section>
  );
}
