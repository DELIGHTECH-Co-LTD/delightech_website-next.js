"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Particles } from "./ui/shadcn-io/particles";

const qaData = [
  {
    id: 1,
    question: "What is LUYLEUN and how does it work?",
    answer:
      "LUYLEUN is Cambodia's leading digital financial platform that provides secure, fast, and accessible financial services. It allows users to transfer money instantly, pay bills, access micro-lending services, and manage their digital wallet with multi-currency support. The app uses advanced security features including biometric authentication to ensure safe transactions.",
    category: "general",
  },
  {
    id: 2,
    question: "Is LUYLEUN safe and secure to use?",
    answer:
      "Yes, LUYLEUN employs bank-grade security measures including end-to-end encryption, multi-factor authentication, and biometric security. We maintain 99.9% uptime with real-time fraud detection and prevention systems. All transactions are protected by international banking security standards.",
    category: "security",
  },
  {
    id: 3,
    question: "How can I download and start using LUYLEUN?",
    answer:
      "You can download LUYLEUN from both the App Store and Google Play Store. After installation, simply create your account using your phone number, verify your identity, and you can start using all our financial services immediately. The registration process takes less than 5 minutes.",
    category: "general",
  },
  {
    id: 4,
    question: "What are the fees for using LUYLEUN services?",
    answer:
      "LUYLEUN offers competitive and transparent pricing. Basic money transfers within Cambodia are free for amounts under $100. For larger amounts and international transfers, we charge minimal fees starting from 0.5%. Bill payments and wallet top-ups are completely free.",
    category: "pricing",
  },
  {
    id: 5,
    question: "Can I use LUYLEUN for business transactions?",
    answer:
      "Absolutely! LUYLEUN offers comprehensive business solutions including merchant payment integration, bulk payment processing, invoice management, and business analytics. We support both small businesses and large enterprises with customized solutions.",
    category: "business",
  },
  {
    id: 6,
    question: "What currencies does LUYLEUN support?",
    answer:
      "LUYLEUN supports multiple currencies including Cambodian Riel (KHR), US Dollar (USD), and other major currencies. Our multi-currency wallet allows you to hold, exchange, and transact in different currencies seamlessly.",
    category: "general",
  },
  {
    id: 7,
    question: "How does the micro-lending feature work?",
    answer:
      "Our AI-powered micro-lending service provides quick access to credit based on your transaction history and financial behavior. Loan amounts range from $50 to $5,000 with flexible repayment terms. The approval process is instant for eligible users with competitive interest rates.",
    category: "lending",
  },
  {
    id: 8,
    question: "What customer support options are available?",
    answer:
      "We provide 24/7 customer support through multiple channels including in-app chat, phone support, email, and our help center. Our dedicated support team is available in Khmer and English to assist with any questions or issues.",
    category: "support",
  },
  {
    id: 9,
    question: "How does Delightech ensure regulatory compliance?",
    answer:
      "Delightech works closely with the National Bank of Cambodia and other regulatory bodies to ensure full compliance with all financial regulations. We maintain proper licensing, follow KYC/AML procedures, and regularly undergo security audits.",
    category: "compliance",
  },
  {
    id: 10,
    question: "What are Delightech's future expansion plans?",
    answer:
      "We're planning regional expansion into Vietnam and Thailand by 2025, introducing new products like digital banking services, enhanced AI features, and strategic partnerships with regional financial institutions. We're also developing SME financing solutions and blockchain integration.",
    category: "future",
  },
];

export default function FAQ() {
  const t = useTranslations("FAQ");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { value: "all", label: t("categories.all") },
    { value: "general", label: t("categories.general") },
    { value: "security", label: t("categories.security") },
    { value: "pricing", label: t("categories.pricing") },
    { value: "business", label: t("categories.business") },
    { value: "lending", label: t("categories.lending") },
    { value: "support", label: t("categories.support") },
    { value: "compliance", label: t("categories.compliance") },
    { value: "future", label: t("categories.future") },
  ];

  const qaData = [
    {
      id: 1,
      question: t("questions.q1.question"),
      answer: t("questions.q1.answer"),
      category: "general",
    },
    {
      id: 2,
      question: t("questions.q2.question"),
      answer: t("questions.q2.answer"),
      category: "security",
    },
    {
      id: 3,
      question: t("questions.q3.question"),
      answer: t("questions.q3.answer"),
      category: "general",
    },
    {
      id: 4,
      question: t("questions.q4.question"),
      answer: t("questions.q4.answer"),
      category: "pricing",
    },
    {
      id: 5,
      question: t("questions.q5.question"),
      answer: t("questions.q5.answer"),
      category: "business",
    },
    {
      id: 6,
      question: t("questions.q6.question"),
      answer: t("questions.q6.answer"),
      category: "general",
    },
    {
      id: 7,
      question: t("questions.q7.question"),
      answer: t("questions.q7.answer"),
      category: "lending",
    },
    {
      id: 8,
      question: t("questions.q8.question"),
      answer: t("questions.q8.answer"),
      category: "support",
    },
    {
      id: 9,
      question: t("questions.q9.question"),
      answer: t("questions.q9.answer"),
      category: "compliance",
    },
    {
      id: 10,
      question: t("questions.q10.question"),
      answer: t("questions.q10.answer"),
      category: "future",
    },
  ];

  const filteredQAs =
    selectedCategory === "all"
      ? qaData
      : qaData.filter((item) => item.category === selectedCategory);

  return (
    <section className="relative min-h-screen bg-background pt-32 pb-24 px-6 lg:px-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 dark:bg-purple-500/10 rounded-full filter blur-3xl animate-pulse"></div>
      </div>
      
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        staticity={50}
        color="#ffffff"
        size={0.8}
      />

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 text-sm uppercase tracking-wider"
          >
            {t("badge")}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 uppercase">
            {t("title")}{" "}
            <span className="text-blue-600 dark:text-blue-400">
              {t("title_highlight")}
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            {t("description")}
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={
                  selectedCategory === category.value ? "default" : "outline"
                }
                onClick={() => setSelectedCategory(category.value)}
                className="transition-all"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="multiple" className="space-y-4">
          {filteredQAs.map((item) => (
            <AccordionItem
              key={item.id}
              value={`item-${item.id}`}
              className="border rounded-lg px-6 bg-card hover:bg-accent/50 transition-colors"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <div className="flex flex-col items-start gap-2 pr-4">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground">
                    {item.question}
                  </h3>
                  <Badge variant="secondary" className="text-xs capitalize">
                    {item.category}
                  </Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 pt-2">
                <div className="bg-muted/50 rounded-lg p-6">
                  <p className="leading-relaxed">{item.answer}</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA Card */}
        <Card className="mt-16 text-center">
          <CardHeader>
            <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <CardTitle className="text-3xl md:text-4xl uppercase">
              {t("cta.title")}{" "}
              <span className="text-blue-600 dark:text-blue-400">
                {t("cta.title_highlight")}
              </span>
            </CardTitle>
            <CardDescription className="text-lg">
              {t("cta.description")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                {t("cta.contact_support")}
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                {t("cta.download_app")}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
