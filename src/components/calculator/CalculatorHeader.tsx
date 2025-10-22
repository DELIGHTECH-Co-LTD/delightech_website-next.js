"use client";

import React from "react";
import { Calculator as CalculatorIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export default function CalculatorHeader() {
  const t = useTranslations("Calculator");

  return (
    <div className="text-center mb-16">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
          <CalculatorIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
        </div>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-600 via-indigo-600 to-blue-700 dark:from-blue-400 dark:via-indigo-400 dark:to-blue-500 bg-clip-text text-transparent mb-4">
        {t("title")}
      </h1>
      <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
        {t("description")}
      </p>
    </div>
  );
}
