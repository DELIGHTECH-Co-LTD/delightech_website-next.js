import { RepaymentEntry, RepaymentResult } from './types';

export function calculateRepayment(
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

export function generateRepaymentSchedule(
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

export function calculateSavings(
    savingsGoal: string,
    currentSavings: string,
    monthlySavings: string
) {
    const goal = parseFloat(savingsGoal);
    const current = parseFloat(currentSavings) || 0;
    const monthly = parseFloat(monthlySavings);

    if (goal && monthly) {
        const remaining = goal - current;
        const months = Math.ceil(remaining / monthly);
        const totalSaved = current + monthly * months;

        return {
            timeToGoal: months,
            totalSaved,
        };
    }
    return null;
}

export function calculateInvestment(
    initialAmount: string,
    monthlyContribution: string,
    investmentYears: string,
    expectedReturn: string
) {
    const initial = parseFloat(initialAmount) || 0;
    const monthly = parseFloat(monthlyContribution);
    const years = parseFloat(investmentYears);
    const annualRate = parseFloat(expectedReturn) / 100;
    const monthlyRate = annualRate / 12;
    const totalMonths = years * 12;

    if (monthly && years && annualRate >= 0) {
        let balance = initial;
        const monthlyGrowth: number[] = [];

        for (let month = 1; month <= totalMonths; month++) {
            balance = balance * (1 + monthlyRate) + monthly;
            monthlyGrowth.push(Math.round(balance * 100) / 100);
        }

        const totalContributions = initial + monthly * totalMonths;
        const futureValue = Math.round(balance * 100) / 100;
        const totalGrowth = futureValue - totalContributions;

        return {
            futureValue,
            totalContributions,
            totalGrowth: Math.round(totalGrowth * 100) / 100,
            monthlyGrowth,
        };
    }
    return null;
}

export const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(amount);
};