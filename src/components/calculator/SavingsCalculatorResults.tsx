"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";
import { useTranslations } from "next-intl";
import { SavingsResult } from "./types";
import { formatCurrency } from "./utils";

interface SavingsCalculatorResultsProps {
  savingsResult: SavingsResult | null;
}

export default function SavingsCalculatorResults({
  savingsResult,
}: SavingsCalculatorResultsProps) {
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
        {savingsResult ? (
          <div className="space-y-4">
            <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
              <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                {t("savings.timeToGoal")}
              </div>
              <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">
                {Math.round(savingsResult.timeToGoal / 12)} {t("years")}{" "}
                {savingsResult.timeToGoal % 12} {t("months")}
              </div>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
              <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                {t("savings.totalSaved")}
              </div>
              <div className="text-lg font-bold text-slate-700 dark:text-slate-300">
                {formatCurrency(savingsResult.totalSaved)}
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
