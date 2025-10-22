"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Particles } from "@/components/ui/shadcn-io/particles";

// Import separated components
import CalculatorHeader from "./calculator/CalculatorHeader";
import LoanCalculatorInput from "./calculator/LoanCalculatorInput";
import LoanCalculatorResults from "./calculator/LoanCalculatorResults";

// Import types and utilities
import { RepaymentResult } from "./calculator/types";
import { calculateRepayment } from "./calculator/utils";

export default function Calculator() {
  // Loan Calculator State
  const [loanPrincipal, setLoanPrincipal] = useState(0);
  const [loanMonths, setLoanMonths] = useState(0);
  const [loanRate, setLoanRate] = useState(0);
  const [repaymentData, setRepaymentData] = useState<RepaymentResult | null>(
    null
  );

  // Loan Calculator Functions
  const handleLoanCalculate = () => {
    const days = loanMonths * 30;
    const depositDate = new Date().toISOString().split("T")[0];
    const result = calculateRepayment(
      loanPrincipal,
      days,
      loanRate,
      depositDate
    );
    setRepaymentData(result);
  };

  return (
    <section className="relative min-h-screen px-4 sm:px-6 lg:px-20 py-16 sm:py-20 lg:py-24 bg-background overflow-hidden">
      {/* Background Effects */}
      <Particles
        className="absolute inset-0"
        quantity={50}
        ease={80}
        staticity={50}
        color="#3b82f6"
        size={1}
      />

      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-blue-50 dark:bg-blue-950/20 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-indigo-50 dark:bg-indigo-950/20 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <CalculatorHeader />

        {/* Loan Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <LoanCalculatorInput
            loanPrincipal={loanPrincipal}
            loanMonths={loanMonths}
            loanRate={loanRate}
            onPrincipalChange={setLoanPrincipal}
            onMonthsChange={setLoanMonths}
            onRateChange={setLoanRate}
            onCalculate={handleLoanCalculate}
          />
          <LoanCalculatorResults
            repaymentData={repaymentData}
            loanPrincipal={loanPrincipal}
            loanMonths={loanMonths}
            loanRate={loanRate}
          />
        </div>
      </div>
    </section>
  );
}
