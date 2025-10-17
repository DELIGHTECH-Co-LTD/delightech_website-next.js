import React from "react";
import InvestorHero from "@/components/InvestorHero";
import InvestmentOpportunity from "@/components/InvestmentOpportunity";
import FinancialHighlights from "@/components/FinancialHighlights";
import MarketPosition from "@/components/MarketPosition";
import InvestmentProcess from "@/components/InvestmentProcess";
import TeamLeadership from "@/components/TeamLeadership";
import InvestorContact from "@/components/InvestorContact";

export default function InvestorPage() {
  return (
    <div>
      <InvestorHero />
      <InvestmentOpportunity />
      <FinancialHighlights />
      <MarketPosition />
      <InvestmentProcess />
      <TeamLeadership />
      <InvestorContact />
    </div>
  );
}
