"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TrendingUp } from "lucide-react";
import { useTranslations } from "next-intl";

interface InvestmentCalculatorInputProps {
  initialAmount: string;
  monthlyContribution: string;
  investmentYears: string;
  expectedReturn: string;
  onInitialChange: (value: string) => void;
  onMonthlyChange: (value: string) => void;
  onYearsChange: (value: string) => void;
  onReturnChange: (value: string) => void;
  onCalculate: () => void;
}

export default function InvestmentCalculatorInput({
  initialAmount,
  monthlyContribution,
  investmentYears,
  expectedReturn,
  onInitialChange,
  onMonthlyChange,
  onYearsChange,
  onReturnChange,
  onCalculate,
}: InvestmentCalculatorInputProps) {
  const t = useTranslations("Calculator");

  return (
    <div className="lg:sticky lg:top-8 lg:self-start">
      <Card className="group bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-blue-200/30 dark:border-blue-800/30 shadow-xl hover:shadow-2xl transition-all duration-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            {t("investment.title")}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="initialAmount">
              {t("investment.initialAmount")} ($)
            </Label>
            <Input
              id="initialAmount"
              type="number"
              placeholder="10000"
              value={initialAmount}
              onChange={(e) => onInitialChange(e.target.value)}
              className="focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="monthlyContribution">
              {t("investment.monthlyContribution")} ($)
            </Label>
            <Input
              id="monthlyContribution"
              type="number"
              placeholder="500"
              value={monthlyContribution}
              onChange={(e) => onMonthlyChange(e.target.value)}
              className="focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="investmentYears">
              {t("investment.years")} (Years)
            </Label>
            <Input
              id="investmentYears"
              type="number"
              placeholder="10"
              value={investmentYears}
              onChange={(e) => onYearsChange(e.target.value)}
              className="focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="expectedReturn">
              {t("investment.expectedReturn")} (%)
            </Label>
            <Input
              id="expectedReturn"
              type="number"
              step="0.1"
              placeholder="7"
              value={expectedReturn}
              onChange={(e) => onReturnChange(e.target.value)}
              className="focus:ring-blue-500"
            />
          </div>

          <Button
            onClick={onCalculate}
            className="w-full bg-blue-600 hover:bg-blue-700"
            disabled={
              !monthlyContribution || !investmentYears || !expectedReturn
            }
          >
            {t("calculate")}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
