"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, PiggyBank, TrendingUp } from "lucide-react";
import { useTranslations } from "next-intl";
import { Particles } from "@/components/ui/shadcn-io/particles";

// Import separated components
import CalculatorHeader from "./calculator/CalculatorHeader";
import CalculatorFeatures from "./calculator/CalculatorFeatures";
import LoanCalculatorInput from "./calculator/LoanCalculatorInput";
import LoanCalculatorResults from "./calculator/LoanCalculatorResults";
import SavingsCalculatorInput from "./calculator/SavingsCalculatorInput";
import SavingsCalculatorResults from "./calculator/SavingsCalculatorResults";
import InvestmentCalculatorInput from "./calculator/InvestmentCalculatorInput";
import InvestmentCalculatorResults from "./calculator/InvestmentCalculatorResults";

// Import types and utilities
import {
  RepaymentResult,
  SavingsResult,
  InvestmentResult,
} from "./calculator/types";
import {
  calculateRepayment,
  calculateSavings,
  calculateInvestment,
} from "./calculator/utils";

export default function Calculator() {
  const t = useTranslations("Calculator");

  // Loan Calculator State
  const [loanPrincipal, setLoanPrincipal] = useState(0);
  const [loanMonths, setLoanMonths] = useState(0);
  const [loanRate, setLoanRate] = useState(0);
  const [repaymentData, setRepaymentData] = useState<RepaymentResult | null>(
    null
  );

  // Savings Calculator State
  const [savingsGoal, setSavingsGoal] = useState("");
  const [currentSavings, setCurrentSavings] = useState("");
  const [monthlySavings, setMonthlySavings] = useState("");
  const [savingsResult, setSavingsResult] = useState<SavingsResult | null>(
    null
  );

  // Investment Calculator State
  const [initialAmount, setInitialAmount] = useState("");
  const [monthlyContribution, setMonthlyContribution] = useState("");
  const [investmentYears, setInvestmentYears] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [investmentResult, setInvestmentResult] =
    useState<InvestmentResult | null>(null);

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

  // Savings Calculator Functions
  const handleSavingsCalculate = () => {
    const result = calculateSavings(
      savingsGoal,
      currentSavings,
      monthlySavings
    );
    setSavingsResult(result);
  };

  // Investment Calculator Functions
  const handleInvestmentCalculate = () => {
    const result = calculateInvestment(
      initialAmount,
      monthlyContribution,
      investmentYears,
      expectedReturn
    );
    setInvestmentResult(result);
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

        {/* Calculator Tabs */}
        <Tabs defaultValue="loan" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-12">
            <TabsTrigger value="loan" className="flex items-center gap-2">
              <CreditCard className="w-4 h-4" />
              {t("tabs.loan")}
            </TabsTrigger>
            <TabsTrigger value="savings" className="flex items-center gap-2">
              <PiggyBank className="w-4 h-4" />
              {t("tabs.savings")}
            </TabsTrigger>
            <TabsTrigger value="investment" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              {t("tabs.investment")}
            </TabsTrigger>
          </TabsList>

          {/* Loan Calculator */}
          <TabsContent value="loan">
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
          </TabsContent>

          {/* Savings Calculator */}
          <TabsContent value="savings">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <SavingsCalculatorInput
                savingsGoal={savingsGoal}
                currentSavings={currentSavings}
                monthlySavings={monthlySavings}
                onGoalChange={setSavingsGoal}
                onCurrentChange={setCurrentSavings}
                onMonthlyChange={setMonthlySavings}
                onCalculate={handleSavingsCalculate}
              />
              <SavingsCalculatorResults savingsResult={savingsResult} />
            </div>
          </TabsContent>

          {/* Investment Calculator */}
          <TabsContent value="investment">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <InvestmentCalculatorInput
                initialAmount={initialAmount}
                monthlyContribution={monthlyContribution}
                investmentYears={investmentYears}
                expectedReturn={expectedReturn}
                onInitialChange={setInitialAmount}
                onMonthlyChange={setMonthlyContribution}
                onYearsChange={setInvestmentYears}
                onReturnChange={setExpectedReturn}
                onCalculate={handleInvestmentCalculate}
              />
              <InvestmentCalculatorResults
                investmentResult={investmentResult}
              />
            </div>
          </TabsContent>
        </Tabs>

        {/* Features Section */}
        <CalculatorFeatures />
      </div>
    </section>
  );
}
