import React from "react";
import { useTranslations } from "next-intl";

export default function InvestmentProcess() {
  const t = useTranslations("InvestorPage");

  return (
    <section className="py-24 px-6 lg:px-20 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground uppercase">
          {t("investment_process.title")}
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="text-center">
            <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl text-foreground font-semibold mb-2">
              {t("investment_process.steps.step1.title")}
            </h3>
            <p className="text-muted-foreground">
              {t("investment_process.steps.step1.description")}
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="bg-emerald-600 dark:bg-emerald-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {t("investment_process.steps.step2.title")}
            </h3>
            <p className="text-muted-foreground">
              {t("investment_process.steps.step2.description")}
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="bg-orange-600 dark:bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl text-foreground font-semibold mb-2">
              {t("investment_process.steps.step3.title")}
            </h3>
            <p className="text-muted-foreground">
              {t("investment_process.steps.step3.description")}
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center">
            <div className="bg-purple-600 dark:bg-purple-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              4
            </div>
            <h3 className="text-xl text-foreground font-semibold mb-2">
              {t("investment_process.steps.step4.title")}
            </h3>
            <p className="text-muted-foreground">
              {t("investment_process.steps.step4.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
