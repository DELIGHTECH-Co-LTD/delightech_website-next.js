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
import Link from "next/link";

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
    <section className="relative min-h-screen bg-background py-24 px-6 lg:px-20 overflow-hidden">
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
            <span className="text-blue-600 dark:text-blue-700">
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
      </div>
    </section>
  );
}
