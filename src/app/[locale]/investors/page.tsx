import React from "react";
import InvestmentOpportunity from "@/components/InvestmentOpportunity";
import MarketPosition from "@/components/MarketPosition";
import InvestmentProcess from "@/components/InvestmentProcess";
import InvestorContact from "@/components/InvestorContact";
import { BackgroundCircles } from "@/components/ui/shadcn-io/background-circles";
import { useTranslations } from "next-intl";

export default function InvestorPage() {
  const t = useTranslations("InvestorPage");
  return (
    <div>
      <BackgroundCircles
        title={t("hero.title")}
        description={t("hero.description")}
        variant="senary"
      />
      <InvestmentOpportunity />
      <MarketPosition />
    </div>
  );
}
