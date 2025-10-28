"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, CreditCard } from "lucide-react";
import { useTranslations } from "next-intl";
import { RepaymentResult } from "./types";
import RepaymentScheduleTable from "./RepaymentScheduleTable";

interface LoanCalculatorResultsProps {
  repaymentData: RepaymentResult | null;
  loanPrincipal: number;
  loanMonths: number;
  loanRate: number;
}

export default function LoanCalculatorResults({
  repaymentData,
  loanPrincipal,
  loanMonths,
  loanRate,
}: LoanCalculatorResultsProps) {
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
        {repaymentData ? (
          <div className="space-y-6">
            {/* Results Summary */}
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                  Total Interest
                </div>
                <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                  ${repaymentData.totalInterest.toFixed(2)}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                    Total Cost
                  </div>
                  <div className="text-lg font-bold text-slate-700 dark:text-slate-300">
                    ${(loanPrincipal + repaymentData.totalInterest).toFixed(2)}
                  </div>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                    Payment Count
                  </div>
                  <div className="text-lg font-bold text-slate-700 dark:text-slate-300">
                    {repaymentData.schedule.length} payments
                  </div>
                </div>
              </div>
            </div>

            {/* Loan Summary */}
            <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
              <h4 className="text-lg font-semibold mb-3">Loan Summary</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-slate-600 dark:text-slate-400">
                    Principal Amount:
                  </span>
                  <div className="font-semibold">${loanPrincipal}</div>
                </div>
                <div>
                  <span className="text-slate-600 dark:text-slate-400">
                    Monthly Rate:
                  </span>
                  <div className="font-semibold">{loanRate}%</div>
                </div>
                <div>
                  <span className="text-slate-600 dark:text-slate-400">
                    Term:
                  </span>
                  <div className="font-semibold">
                    {loanMonths} {loanMonths === 1 ? "Month" : "Months"}
                  </div>
                </div>
                <div>
                  <span className="text-slate-600 dark:text-slate-400">
                    First Payment:
                  </span>
                  <div className="font-semibold">
                    {repaymentData.schedule[0]?.dueDate || "N/A"}
                  </div>
                </div>
              </div>
            </div>

            {/* Amortization Schedule */}
            <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
              <h4 className="text-lg font-semibold mb-3">
                Advanced Repayment Schedule
              </h4>
              <RepaymentScheduleTable schedule={repaymentData.schedule} />
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <CreditCard className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <p className="text-slate-500 dark:text-slate-400">
              Configure your loan parameters and click "Calculate Loan" to see
              detailed repayment schedule with senior logic.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
