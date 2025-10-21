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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useTranslations } from "next-intl";
import {
  Calculator as CalculatorIcon,
  CreditCard,
  BarChart3,
  PiggyBank,
} from "lucide-react";
import { Particles } from "@/components/ui/shadcn-io/particles";

// Senior Logic Interfaces
interface RepaymentEntry {
  month: number;
  monthlyPayment: string;
  interest: string;
  principalPayment: string;
  remainingBalance: string;
  dueDate: string;
}

interface RepaymentResult {
  totalInterest: number;
  schedule: RepaymentEntry[];
}

// Senior Logic Functions
function calculateRepayment(
  principal: number,
  days: number,
  monthlyRatePercent: number,
  depositDate: string
): RepaymentResult {
  const months = days <= 30 ? 1 : Math.floor(days / 30);
  return generateRepaymentSchedule(
    days,
    principal,
    months,
    monthlyRatePercent,
    depositDate
  );
}

function generateRepaymentSchedule(
  days: number,
  principal: number,
  months: number,
  monthlyRatePercent: number,
  depositDate: string
): RepaymentResult {
  const schedule: RepaymentEntry[] = [];
  let remainingPrincipal = principal;
  const monthlyRate = monthlyRatePercent / 100;
  const startDate = new Date(depositDate);
  const monthlyPayment =
    Math.round(
      ((principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1)) *
        100
    ) / 100;
  let totalInterest = 0;

  for (let month = 1; month <= months; month++) {
    const interest = Math.round(remainingPrincipal * monthlyRate * 100) / 100;
    let principalPayment = Math.round((monthlyPayment - interest) * 100) / 100;
    const dueDate = new Date(
      startDate.getTime() + (30 * month - 1) * 24 * 60 * 60 * 1000
    );

    if (month === months) {
      principalPayment = Math.round(remainingPrincipal * 100) / 100;
    }

    const finalMonthlyPayment =
      month === months
        ? Math.round((principalPayment + interest) * 100) / 100
        : monthlyPayment;

    schedule.push({
      month,
      monthlyPayment: `$${finalMonthlyPayment.toFixed(2)}`,
      interest: `$${interest.toFixed(2)}`,
      principalPayment: `$${principalPayment.toFixed(2)}`,
      remainingBalance: `$${Math.round((remainingPrincipal - principalPayment) * 100) / 100}`,
      dueDate: dueDate.toISOString().split("T")[0],
    });

    remainingPrincipal -= principalPayment;
    totalInterest += interest;
  }

  return {
    totalInterest: Math.round(totalInterest * 100) / 100,
    schedule,
  };
}

export default function Calculator() {
  const t = useTranslations("Calculator");

  // Senior Logic State - Advanced Loan Calculator
  const [submitted, setSubmitted] = useState(false);
  const [loanPrincipal, setLoanPrincipal] = useState(100);
  const [loanMonths, setLoanMonths] = useState(1);
  const [loanRate, setLoanRate] = useState(5.0);
  const [repaymentData, setRepaymentData] = useState<RepaymentResult | null>(
    null
  );

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

  // Senior Logic Functions
  const handleCalculate = () => {
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

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleTrackLoan = () => {
    setSubmitted(false);
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
          <TabsList className="grid w-full grid-cols-2 max-w-xl mx-auto mb-12">
            <TabsTrigger value="loan" className="flex items-center gap-2">
              <CreditCard className="w-4 h-4" />
              {t("tabs.loan")}
            </TabsTrigger>
            <TabsTrigger value="savings" className="flex items-center gap-2">
              <PiggyBank className="w-4 h-4" />
              {t("tabs.savings")}
            </TabsTrigger>
          </TabsList>

          {/* Loan Calculator */}
          <TabsContent value="loan">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Input Card - Fixed Position */}
              <div className="lg:sticky lg:top-8 lg:self-start">
                <Card className="group bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-blue-200/30 dark:border-blue-800/30 shadow-xl hover:shadow-2xl transition-all duration-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <CreditCard className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      {t("loan.title")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Senior Logic Implementation */}
                    <div className="space-y-2">
                      <Label htmlFor="loanPrincipal">Loan Amount ($)</Label>
                      <Input
                        id="loanPrincipal"
                        type="number"
                        placeholder="Enter loan amount (50-500)"
                        value={loanPrincipal}
                        onChange={(e) =>
                          setLoanPrincipal(Number(e.target.value) || 0)
                        }
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
                        value={loanMonths}
                        onChange={(e) =>
                          setLoanMonths(Number(e.target.value) || 1)
                        }
                        min="1"
                        max="24"
                        className="focus:ring-blue-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="loanRate">
                        Monthly Interest Rate (%)
                      </Label>
                      <Input
                        id="loanRate"
                        type="number"
                        step="0.1"
                        placeholder="Enter rate (1.0-5.0)"
                        value={loanRate}
                        onChange={(e) =>
                          setLoanRate(Number(e.target.value) || 1.0)
                        }
                        min="1"
                        max="5"
                        className="focus:ring-blue-500"
                      />
                    </div>

                    <Button
                      onClick={handleCalculate}
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      Calculate Loan
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Results Card */}
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
                      {/* Senior Logic Results */}
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
                              $
                              {(
                                loanPrincipal + repaymentData.totalInterest
                              ).toFixed(2)}
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
                        <h4 className="text-lg font-semibold mb-3">
                          Loan Summary
                        </h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-slate-600 dark:text-slate-400">
                              Principal Amount:
                            </span>
                            <div className="font-semibold">
                              ${loanPrincipal}
                            </div>
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
                              {loanMonths}{" "}
                              {loanMonths === 1 ? "Month" : "Months"}
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

                      {/* Amortization Schedule Preview - Updated for Senior Logic */}
                      <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
                        <h4 className="text-lg font-semibold mb-3">
                          Advanced Repayment Schedule
                        </h4>
                        {repaymentData && (
                          <div className="max-h-60 overflow-y-auto">
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead>Month</TableHead>
                                  <TableHead>Payment</TableHead>
                                  <TableHead>Interest</TableHead>
                                  <TableHead>Principal</TableHead>
                                  <TableHead>Balance</TableHead>
                                  <TableHead>Due Date</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {repaymentData.schedule.map((entry) => (
                                  <TableRow key={entry.month}>
                                    <TableCell>{entry.month}</TableCell>
                                    <TableCell className="font-semibold text-blue-600">
                                      {entry.monthlyPayment}
                                    </TableCell>
                                    <TableCell className="text-red-600">
                                      {entry.interest}
                                    </TableCell>
                                    <TableCell className="text-green-600">
                                      {entry.principalPayment}
                                    </TableCell>
                                    <TableCell>
                                      {entry.remainingBalance}
                                    </TableCell>
                                    <TableCell className="text-sm">
                                      {entry.dueDate}
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <CreditCard className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                      <p className="text-slate-500 dark:text-slate-400">
                        Configure your loan parameters and click "Calculate
                        Loan" to see detailed repayment schedule with senior
                        logic.
                      </p>
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
                      <Label htmlFor="savingsGoal">
                        {t("savings.goal")} ($)
                      </Label>
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
              </div>

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
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
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
