"use client";

import React, { useEffect, useRef } from "react";
import InvestmentOpportunity from "@/components/InvestmentOpportunity";
import MarketPosition from "@/components/MarketPosition";
import { BackgroundCircles } from "@/components/ui/shadcn-io/background-circles";
import { useTranslations } from "next-intl";

export default function InvestorPage() {
  const t = useTranslations("InvestorPage");

  return (
    <div>
      <div data-usal-md="fade-d blur duration-750">
        <BackgroundCircles
          title={t("hero.title")}
          description={t("hero.description")}
          variant="senary"
          className="max-w-lg sm:max-w-xl md:max-w-2xl text-center mx-auto px-4 text-sm sm:text-base"
        />
      </div>

      <div data-usal-md="zoomin-u blur duration-800 delay-200">
        <InvestmentOpportunity />
      </div>

      <div data-usal-md="fade-l duration-600 delay-300">
        <MarketPosition />
      </div>
    </div>
  );
}
