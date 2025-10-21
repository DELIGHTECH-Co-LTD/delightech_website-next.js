import React from "react";
import Calculator from "@/components/Calculator";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Calculator");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function CalculatorPage() {
  return (
    <main className="min-h-screen bg-background">
      <Calculator />
    </main>
  );
}
