import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";

export default function InvestorContact() {
  const t = useTranslations("InvestorPage");

  return (
    <section className="py-24 px-6 lg:px-20 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground uppercase">
          {t("contact.title")}
        </h2>
        <p className="text-lg text-muted-foreground mb-12">
          {t("contact.description")}
        </p>

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
