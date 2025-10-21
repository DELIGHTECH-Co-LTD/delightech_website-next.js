// Calculator Types
export interface RepaymentEntry {
    month: number;
    monthlyPayment: string;
    interest: string;
    principalPayment: string;
    remainingBalance: string;
    dueDate: string;
}

export interface RepaymentResult {
    totalInterest: number;
    schedule: RepaymentEntry[];
}

export interface SavingsResult {
    timeToGoal: number;
    totalSaved: number;
}

export interface InvestmentResult {
    futureValue: number;
    totalContributions: number;
    totalGrowth: number;
    monthlyGrowth: number[];
}

export interface LoanCalculatorState {
    loanPrincipal: number;
    loanMonths: number;
    loanRate: number;
    repaymentData: RepaymentResult | null;
}

export interface SavingsCalculatorState {
    savingsGoal: string;
    currentSavings: string;
    monthlySavings: string;
    savingsResult: SavingsResult | null;
}

export interface InvestmentCalculatorState {
    initialAmount: string;
    monthlyContribution: string;
    investmentYears: string;
    expectedReturn: string;
    investmentResult: InvestmentResult | null;
}