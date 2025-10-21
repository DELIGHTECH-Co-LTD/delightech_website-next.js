"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator as CalculatorIcon, PiggyBank } from "lucide-react";
import { useTranslations } from "next-intl";

export default function CalculatorFeatures() {
  const t = useTranslations("Calculator");

  return (
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
  );
}
