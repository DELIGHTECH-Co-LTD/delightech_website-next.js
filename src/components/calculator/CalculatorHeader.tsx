"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";

export default function CalculatorHeader() {
  const t = useTranslations("Calculator");

  return (
    <div className="text-center mb-16">
      <Badge
        variant="secondary"
        className="mb-4 text-sm uppercase tracking-wider"
      >
        {t("badge")}
      </Badge>
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 uppercase">
        {t("title")}{" "}
        <span className="text-blue-700 dark:text-blue-700">
          {t("title_highlight")}
        </span>
      </h1>
      <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
        {t("description")}
      </p>
    </div>
  );
}
