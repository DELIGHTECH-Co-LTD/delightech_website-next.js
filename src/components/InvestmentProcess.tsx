import React from "react";
import { useTranslations } from "next-intl";

export default function InvestmentProcess() {
  const t = useTranslations("InvestorPage");

  return (
    <section className="py-24 px-6 lg:px-20 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground uppercase">
          {t("investment_process.title")}
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="text-center">
            <div className="bg-blue-600 dark:bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-2">
              {t("investment_process.steps.step1.title")}
            </h3>
            <p className="text-muted-foreground">
              {t("investment_process.steps.step1.description")}
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="bg-green-600 dark:bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-2">
              {t("investment_process.steps.step2.title")}
            </h3>
            <p className="text-muted-foreground">
              {t("investment_process.steps.step2.description")}
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="bg-red-600 dark:bg-red-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl text-red-600 dark:text-red-400 font-semibold mb-2">
              {t("investment_process.steps.step3.title")}
            </h3>
            <p className="text-muted-foreground">
              {t("investment_process.steps.step3.description")}
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center">
            <div className="bg-yellow-600 dark:bg-yellow-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              4
            </div>
            <h3 className="text-xl text-yellow-600 dark:text-yellow-400 font-semibold mb-2">
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
