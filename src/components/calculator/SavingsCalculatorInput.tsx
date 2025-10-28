"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PiggyBank } from "lucide-react";
import { useTranslations } from "next-intl";

interface SavingsCalculatorInputProps {
  savingsGoal: string;
  currentSavings: string;
  monthlySavings: string;
  onGoalChange: (value: string) => void;
  onCurrentChange: (value: string) => void;
  onMonthlyChange: (value: string) => void;
  onCalculate: () => void;
}

export default function SavingsCalculatorInput({
  savingsGoal,
  currentSavings,
  monthlySavings,
  onGoalChange,
  onCurrentChange,
  onMonthlyChange,
  onCalculate,
}: SavingsCalculatorInputProps) {
  const t = useTranslations("Calculator");

  return (
    <div className="lg:sticky lg:top-8 lg:self-start">
      <Card className="group bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-blue-200/30 dark:border-blue-800/30 shadow-xl hover:shadow-2xl transition-all duration-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <PiggyBank className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            {t("savings.title")}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="savingsGoal">{t("savings.goal")} ($)</Label>
            <Input
              id="savingsGoal"
              type="number"
              placeholder="50000"
              value={savingsGoal}
              onChange={(e) => onGoalChange(e.target.value)}
              className="focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="currentSavings">
              {t("savings.currentAmount")} ($)
            </Label>
            <Input
              id="currentSavings"
              type="number"
              placeholder="5000"
              value={currentSavings}
              onChange={(e) => onCurrentChange(e.target.value)}
              className="focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="monthlySavings">
              {t("savings.monthlyDeposit")} ($)
            </Label>
            <Input
              id="monthlySavings"
              type="number"
              placeholder="1000"
              value={monthlySavings}
              onChange={(e) => onMonthlyChange(e.target.value)}
              className="focus:ring-blue-500"
            />
          </div>

          <Button
            onClick={onCalculate}
            className="w-full bg-blue-600 hover:bg-blue-700"
            disabled={!savingsGoal || !monthlySavings}
          >
            {t("calculate")}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
