"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslations } from "next-intl";
import {
  Calculator as CalculatorIcon,
  TrendingUp,
  PiggyBank,
  CreditCard,
  BarChart3,
  DollarSign,
} from "lucide-react";
import { Particles } from "@/components/ui/shadcn-io/particles";

export default function Calculator() {
  const t = useTranslations("Calculator");

  // Loan Calculator State
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [loanResult, setLoanResult] = useState<{
    monthlyPayment: number;
    totalPayment: number;
    totalInterest: number;
    amortizationSchedule: Array<{
      month: number;
      payment: number;
      principal: number;
      interest: number;
      remainingBalance: number;
    }>;
  } | null>(null);

  // Investment Calculator State
  const [principal, setPrincipal] = useState("");
  const [monthlyContribution, setMonthlyContribution] = useState("");
  const [investmentRate, setInvestmentRate] = useState("");
  const [investmentTime, setInvestmentTime] = useState("");
  const [investmentResult, setInvestmentResult] = useState<{
    finalAmount: number;
    totalContributions: number;
    totalEarnings: number;
  } | null>(null);

  // Savings Calculator State
  const [savingsGoal, setSavingsGoal] = useState("");
  const [currentSavings, setCurrentSavings] = useState("");
  const [monthlySavings, setMonthlySavings] = useState("");
  const [savingsRate, setSavingsRate] = useState("");
  const [savingsResult, setSavingsResult] = useState<{
    timeToGoal: number;
    totalSaved: number;
    interestEarned: number;
  } | null>(null);

  // Loan Calculator Functions - Amortization Formula
  const calculateLoan = () => {
    const P = parseFloat(loanAmount); // Principal
    const r = parseFloat(interestRate) / 100 / 12; // Monthly interest rate
    const n = parseFloat(loanTerm) * 12; // Total number of payments

    if (P && r && n) {
      // Amortization Formula: M = P * [r(1+r)^n] / [(1+r)^n - 1]
      const monthlyPayment =
        (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const totalPayment = monthlyPayment * n;
      const totalInterest = totalPayment - P;

      // Generate Amortization Schedule
      const amortizationSchedule = [];
      let remainingBalance = P;

      for (let month = 1; month <= n; month++) {
        // Interest payment for current month
        const interestPayment = remainingBalance * r;

        // Principal payment for current month
        const principalPayment = monthlyPayment - interestPayment;

        // Update remaining balance
        remainingBalance = remainingBalance - principalPayment;

        // Ensure remaining balance doesn't go negative due to rounding
        if (remainingBalance < 0.01) remainingBalance = 0;

        amortizationSchedule.push({
          month,
          payment: monthlyPayment,
          principal: principalPayment,
          interest: interestPayment,
          remainingBalance,
        });
      }

      setLoanResult({
        monthlyPayment,
        totalPayment,
        totalInterest,
        amortizationSchedule,
      });
    }
  };

  // Investment Calculator Functions
  const calculateInvestment = () => {
    const P = parseFloat(principal) || 0;
    const PMT = parseFloat(monthlyContribution) || 0;
    const r = parseFloat(investmentRate) / 100 / 12;
    const t = parseFloat(investmentTime) * 12;

    if (r && t) {
      const futureValuePrincipal = P * Math.pow(1 + r, t);
      const futureValueAnnuity = (PMT * (Math.pow(1 + r, t) - 1)) / r;
      const finalAmount = futureValuePrincipal + futureValueAnnuity;
      const totalContributions = P + PMT * t;
      const totalEarnings = finalAmount - totalContributions;

      setInvestmentResult({
        finalAmount,
        totalContributions,
        totalEarnings,
      });
    }
  };

  // Savings Calculator Functions
  const calculateSavings = () => {
    const goal = parseFloat(savingsGoal);
    const current = parseFloat(currentSavings) || 0;
    const monthly = parseFloat(monthlySavings);
    const rate = parseFloat(savingsRate) / 100 / 12;

    if (goal && monthly && rate) {
      const remaining = goal - current;
      let months = 0;
      let balance = current;

      while (balance < goal && months < 1000) {
        balance = balance * (1 + rate) + monthly;
        months++;
      }

      const totalSaved = current + monthly * months;
      const interestEarned = balance - totalSaved;

      setSavingsResult({
        timeToGoal: months,
        totalSaved,
        interestEarned,
      });
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
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
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
              <CalculatorIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <Badge
              variant="outline"
              className="border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 px-4 py-2"
            >
              {t("badge")}
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 dark:from-blue-400 dark:via-indigo-400 dark:to-blue-500 bg-clip-text text-transparent mb-4">
            {t("title")}
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            {t("description")}
          </p>
        </div>

        {/* Calculator Tabs */}
        <Tabs defaultValue="loan" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-12">
            <TabsTrigger value="loan" className="flex items-center gap-2">
              <CreditCard className="w-4 h-4" />
              {t("tabs.loan")}
            </TabsTrigger>
            <TabsTrigger value="investment" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              {t("tabs.investment")}
            </TabsTrigger>
            <TabsTrigger value="savings" className="flex items-center gap-2">
              <PiggyBank className="w-4 h-4" />
              {t("tabs.savings")}
            </TabsTrigger>
          </TabsList>

          {/* Loan Calculator */}
          <TabsContent value="loan">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Input Card */}
              <Card className="group bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-blue-200/30 dark:border-blue-800/30 shadow-xl hover:shadow-2xl transition-all duration-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <CreditCard className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    {t("loan.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="loanAmount">{t("loan.amount")} ($)</Label>
                    <Input
                      id="loanAmount"
                      type="number"
                      placeholder="100000"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(e.target.value)}
                      className="focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interestRate">
                      {t("loan.interestRate")} (%)
                    </Label>
                    <Input
                      id="interestRate"
                      type="number"
                      step="0.01"
                      placeholder="5.5"
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value)}
                      className="focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="loanTerm">{t("loan.term")}</Label>
                    <Select value={loanTerm} onValueChange={setLoanTerm}>
                      <SelectTrigger className="focus:ring-blue-500">
                        <SelectValue placeholder={t("loan.selectTerm")} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0.25">3 {t("months")}</SelectItem>
                        <SelectItem value="0.5">6 {t("months")}</SelectItem>
                        <SelectItem value="0.75">9 {t("months")}</SelectItem>
                        <SelectItem value="1">
                          12 {t("months")} (1 {t("years")})
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    onClick={calculateLoan}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={!loanAmount || !interestRate || !loanTerm}
                  >
                    {t("calculate")}
                  </Button>
                </CardContent>
              </Card>

              {/* Results Card */}
              <Card className="group bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-green-200/30 dark:border-green-800/30 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <BarChart3 className="w-6 h-6 text-green-600 dark:text-green-400" />
                    {t("results")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {loanResult ? (
                    <div className="space-y-6">
                      {/* Main Results */}
                      <div className="space-y-4">
                        <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                          <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                            {t("loan.monthlyPayment")}
                          </div>
                          <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                            {formatCurrency(loanResult.monthlyPayment)}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                            <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                              {t("loan.totalPayment")}
                            </div>
                            <div className="text-lg font-bold text-slate-700 dark:text-slate-300">
                              {formatCurrency(loanResult.totalPayment)}
                            </div>
                          </div>

                          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                            <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                              {t("loan.totalInterest")}
                            </div>
                            <div className="text-lg font-bold text-slate-700 dark:text-slate-300">
                              {formatCurrency(loanResult.totalInterest)}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Amortization Summary */}
                      <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
                        <h4 className="text-lg font-semibold mb-3">
                          {t("loan.amortizationSummary")}
                        </h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-slate-600 dark:text-slate-400">
                              First Year Interest:
                            </span>
                            <div className="font-semibold">
                              {formatCurrency(
                                loanResult.amortizationSchedule
                                  .slice(0, 12)
                                  .reduce(
                                    (sum, payment) => sum + payment.interest,
                                    0
                                  )
                              )}
                            </div>
                          </div>
                          <div>
                            <span className="text-slate-600 dark:text-slate-400">
                              First Year Principal:
                            </span>
                            <div className="font-semibold">
                              {formatCurrency(
                                loanResult.amortizationSchedule
                                  .slice(0, 12)
                                  .reduce(
                                    (sum, payment) => sum + payment.principal,
                                    0
                                  )
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Amortization Schedule Preview */}
                      <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
                        <h4 className="text-lg font-semibold mb-3">
                          {t("loan.paymentSchedule")}
                        </h4>
                        <div className="max-h-60 overflow-y-auto">
                          <table className="w-full text-sm">
                            <thead className="sticky top-0 bg-slate-50 dark:bg-slate-800">
                              <tr>
                                <th className="text-left p-2 font-medium">
                                  Month
                                </th>
                                <th className="text-right p-2 font-medium">
                                  Payment
                                </th>
                                <th className="text-right p-2 font-medium">
                                  Principal
                                </th>
                                <th className="text-right p-2 font-medium">
                                  Interest
                                </th>
                                <th className="text-right p-2 font-medium">
                                  Balance
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {loanResult.amortizationSchedule
                                .slice(0, 12)
                                .map((payment) => (
                                  <tr
                                    key={payment.month}
                                    className="border-t border-slate-200 dark:border-slate-700"
                                  >
                                    <td className="p-2">{payment.month}</td>
                                    <td className="p-2 text-right">
                                      {formatCurrency(payment.payment)}
                                    </td>
                                    <td className="p-2 text-right text-green-600 dark:text-green-400">
                                      {formatCurrency(payment.principal)}
                                    </td>
                                    <td className="p-2 text-right text-red-600 dark:text-red-400">
                                      {formatCurrency(payment.interest)}
                                    </td>
                                    <td className="p-2 text-right">
                                      {formatCurrency(payment.remainingBalance)}
                                    </td>
                                  </tr>
                                ))}
                            </tbody>
                          </table>
                          {loanResult.amortizationSchedule.length > 12 && (
                            <div className="text-center py-2 text-xs text-slate-500 dark:text-slate-400">
                              Showing first 12 months of{" "}
                              {loanResult.amortizationSchedule.length} total
                              payments
                            </div>
                          )}
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
            </div>
          </TabsContent>

          {/* Investment Calculator */}
          <TabsContent value="investment">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Input Card */}
              <Card className="group bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-blue-200/30 dark:border-blue-800/30 shadow-xl hover:shadow-2xl transition-all duration-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    {t("investment.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="principal">
                      {t("investment.initialAmount")} ($)
                    </Label>
                    <Input
                      id="principal"
                      type="number"
                      placeholder="10000"
                      value={principal}
                      onChange={(e) => setPrincipal(e.target.value)}
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
                      onChange={(e) => setMonthlyContribution(e.target.value)}
                      className="focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="investmentRate">
                      {t("investment.expectedReturn")} (%)
                    </Label>
                    <Input
                      id="investmentRate"
                      type="number"
                      step="0.01"
                      placeholder="7"
                      value={investmentRate}
                      onChange={(e) => setInvestmentRate(e.target.value)}
                      className="focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="investmentTime">
                      {t("investment.timeHorizon")} ({t("years")})
                    </Label>
                    <Input
                      id="investmentTime"
                      type="number"
                      placeholder="20"
                      value={investmentTime}
                      onChange={(e) => setInvestmentTime(e.target.value)}
                      className="focus:ring-blue-500"
                    />
                  </div>

                  <Button
                    onClick={calculateInvestment}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={!investmentRate || !investmentTime}
                  >
                    {t("calculate")}
                  </Button>
                </CardContent>
              </Card>

              {/* Results Card */}
              <Card className="group bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-green-200/30 dark:border-green-800/30 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <DollarSign className="w-6 h-6 text-green-600 dark:text-green-400" />
                    {t("results")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {investmentResult ? (
                    <div className="space-y-4">
                      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg">
                        <div className="text-sm text-green-600 dark:text-green-400 font-medium">
                          {t("investment.finalAmount")}
                        </div>
                        <div className="text-2xl font-bold text-green-700 dark:text-green-300">
                          {formatCurrency(investmentResult.finalAmount)}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                          <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                            {t("investment.totalContributions")}
                          </div>
                          <div className="text-lg font-bold text-slate-700 dark:text-slate-300">
                            {formatCurrency(
                              investmentResult.totalContributions
                            )}
                          </div>
                        </div>

                        <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                          <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                            {t("investment.totalEarnings")}
                          </div>
                          <div className="text-lg font-bold text-slate-700 dark:text-slate-300">
                            {formatCurrency(investmentResult.totalEarnings)}
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
            </div>
          </TabsContent>

          {/* Savings Calculator */}
          <TabsContent value="savings">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Input Card */}
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
                      onChange={(e) => setSavingsGoal(e.target.value)}
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
                      onChange={(e) => setCurrentSavings(e.target.value)}
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
                      onChange={(e) => setMonthlySavings(e.target.value)}
                      className="focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="savingsRate">
                      {t("savings.interestRate")} (%)
                    </Label>
                    <Input
                      id="savingsRate"
                      type="number"
                      step="0.01"
                      placeholder="3"
                      value={savingsRate}
                      onChange={(e) => setSavingsRate(e.target.value)}
                      className="focus:ring-blue-500"
                    />
                  </div>

                  <Button
                    onClick={calculateSavings}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={!savingsGoal || !monthlySavings || !savingsRate}
                  >
                    {t("calculate")}
                  </Button>
                </CardContent>
              </Card>

              {/* Results Card */}
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
                          {Math.round(savingsResult.timeToGoal / 12)}{" "}
                          {t("years")} {savingsResult.timeToGoal % 12}{" "}
                          {t("months")}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                          <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                            {t("savings.totalSaved")}
                          </div>
                          <div className="text-lg font-bold text-slate-700 dark:text-slate-300">
                            {formatCurrency(savingsResult.totalSaved)}
                          </div>
                        </div>

                        <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                          <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                            {t("savings.interestEarned")}
                          </div>
                          <div className="text-lg font-bold text-slate-700 dark:text-slate-300">
                            {formatCurrency(savingsResult.interestEarned)}
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
            </div>
          </TabsContent>
        </Tabs>

        {/* Features Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="group bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-blue-200/30 dark:border-blue-800/30 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CalculatorIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {t("features.accurate.title")}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t("features.accurate.description")}
              </p>
            </CardContent>
          </Card>

          <Card className="group bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-green-200/30 dark:border-green-800/30 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {t("features.planning.title")}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t("features.planning.description")}
              </p>
            </CardContent>
          </Card>

          <Card className="group bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-purple-200/30 dark:border-purple-800/30 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <PiggyBank className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {t("features.goals.title")}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t("features.goals.description")}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
