import React from "react";
import InvestorHero from "@/components/InvestorHero";
import InvestmentOpportunity from "@/components/InvestmentOpportunity";
import MarketPosition from "@/components/MarketPosition";
import InvestmentProcess from "@/components/InvestmentProcess";

export default function InvestorPage() {
  return (
    <div>
      <InvestorHero />
      <InvestmentOpportunity />
      <MarketPosition />
    </div>
  );
}
