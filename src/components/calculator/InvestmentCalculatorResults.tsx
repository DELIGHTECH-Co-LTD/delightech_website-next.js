"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";
import { useTranslations } from "next-intl";
import { InvestmentResult } from "./types";
import { formatCurrency } from "./utils";

interface InvestmentCalculatorResultsProps {
  investmentResult: InvestmentResult | null;
}

export default function InvestmentCalculatorResults({
  investmentResult,
}: InvestmentCalculatorResultsProps) {
  const t = useTranslations("Calculator");

  return (
    <Card className="group bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-green-200/30 dark:border-green-800/30 shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <BarChart3 className="w-6 h-6 text-green-600 dark:text-green-400" />
          {t("results")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {investmentResult ? (
          <div className="space-y-4">
            <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg">
              <div className="text-sm text-green-600 dark:text-green-400 font-medium">
                {t("investment.futureValue")}
              </div>
              <div className="text-2xl font-bold text-green-700 dark:text-green-300">
                {formatCurrency(investmentResult.futureValue)}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                  {t("investment.totalContributions")}
                </div>
                <div className="text-lg font-bold text-slate-700 dark:text-slate-300">
                  {formatCurrency(investmentResult.totalContributions)}
                </div>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                  {t("investment.totalGrowth")}
                </div>
                <div className="text-lg font-bold text-green-700 dark:text-green-300">
                  {formatCurrency(investmentResult.totalGrowth)}
                </div>
              </div>
            </div>

            <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
              <h4 className="text-lg font-semibold mb-3">
                {t("investment.growthBreakdown")}
              </h4>
              <div className="text-sm space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-400">
                    {t("investment.totalReturn")}:
                  </span>
                  <span className="font-semibold text-green-600">
                    {(
                      (investmentResult.totalGrowth /
                        investmentResult.totalContributions) *
                      100
                    ).toFixed(1)}
                    %
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-400">
                    {t("investment.growthAmount")}:
                  </span>
                  <span className="font-semibold">
                    {formatCurrency(investmentResult.totalGrowth)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            {t("enterValues")}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
