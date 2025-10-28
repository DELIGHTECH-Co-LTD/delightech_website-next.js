"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Calendar } from "lucide-react";
import { useTranslations } from "next-intl";

interface LoanCalculatorInputProps {
  loanPrincipal: number;
  loanMonths: number;
  loanRate: number;
  disbursementDate: string;
  onPrincipalChange: (value: number) => void;
  onMonthsChange: (value: number) => void;
  onRateChange: (value: number) => void;
  onDisbursementDateChange: (value: string) => void;
  onCalculate: () => void;
}

export default function LoanCalculatorInput({
  loanPrincipal,
  loanMonths,
  loanRate,
  disbursementDate,
  onPrincipalChange,
  onMonthsChange,
  onRateChange,
  onDisbursementDateChange,
  onCalculate,
}: LoanCalculatorInputProps) {
  const t = useTranslations("Calculator");

  return (
    <div className="lg:sticky lg:top-8 lg:self-start">
      <Card className="group bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-blue-200/30 dark:border-blue-800/30 shadow-xl hover:shadow-2xl transition-all duration-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <CreditCard className="w-6 h-6 text-blue-700 dark:text-blue-700" />
            {t("loan.title")}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="loanPrincipal">Loan Amount ($)</Label>
            <Input
              id="loanPrincipal"
              type="number"
              placeholder="Enter loan amount (50-500)"
              value={loanPrincipal || ""}
              onChange={(e) => onPrincipalChange(Number(e.target.value) || 0)}
              min="50"
              max="500"
              className="focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="loanMonths">Loan Term (Months)</Label>
            <Input
              id="loanMonths"
              type="number"
              placeholder="Enter term in months (1-24)"
              value={loanMonths || ""}
              onChange={(e) => onMonthsChange(Number(e.target.value) || 0)}
              min="1"
              max="24"
              className="focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="loanRate">Monthly Interest Rate (%)</Label>
            <Input
              id="loanRate"
              type="number"
              step="0.1"
              placeholder="Enter rate (1.0-5.0)"
              value={loanRate || ""}
              onChange={(e) => onRateChange(Number(e.target.value) || 0)}
              min="1"
              max="5"
              className="focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="disbursementDate"
              className="flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-blue-700 dark:text-blue-700" />
              Disbursement Date
            </Label>
            <Input
              id="disbursementDate"
              type="date"
              value={disbursementDate}
              onChange={(e) => onDisbursementDateChange(e.target.value)}
              className="focus:ring-blue-500"
              min={new Date().toISOString().split("T")[0]}
            />
          </div>

          <Button
            onClick={onCalculate}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            disabled={
              !loanPrincipal || !loanMonths || !loanRate || !disbursementDate
            }
          >
            Calculate Loan
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
