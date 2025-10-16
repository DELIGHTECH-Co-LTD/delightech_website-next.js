import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";

export default function InvestorPage() {
  const t = useTranslations("InvestorPage");

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative z-10 w-screen h-screen max-w-9xl mx-auto bg-cover bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: "url('/assets/Angkorwat.png')",
        }}
      >
        <div className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-24">
          <div className="bg-black/40 dark:bg-black/60 p-4 md:p-6 rounded-lg max-w-3xl backdrop-blur-sm">
            <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
              {t("hero.title")}
            </h1>
            <p className="text-white text-lg md:text-2xl font-semibold leading-relaxed">
              {t("hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Investment Opportunity Section */}
      <section className="relative min-h-screen pt-32 pb-24 px-6 lg:px-20 overflow-hidden hero-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white uppercase">
              {t("opportunity.title")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="border-2 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600 dark:text-blue-400">
                  {t("opportunity.why_invest.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3 font-bold">
                      •
                    </span>
                    <span>{t("opportunity.why_invest.points.point1")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3 font-bold">
                      •
                    </span>
                    <span>{t("opportunity.why_invest.points.point2")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3 font-bold">
                      •
                    </span>
                    <span>{t("opportunity.why_invest.points.point3")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3 font-bold">
                      •
                    </span>
                    <span>{t("opportunity.why_invest.points.point4")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3 font-bold">
                      •
                    </span>
                    <span>{t("opportunity.why_invest.points.point5")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3 font-bold">
                      •
                    </span>
                    <span>{t("opportunity.why_invest.points.point6")}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <Image
                src="/assets/luyleun2.png"
                alt="LUYLEUN App"
                width={400}
                height={400}
                className="max-w-full drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Financial Highlights Section */}
      <section className="py-24 px-6 lg:px-20 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground uppercase">
            {t("financial_highlights.title")}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {t("financial_highlights.active_users.value")}
                  </h3>
                  <p className="text-foreground font-semibold">
                    {t("financial_highlights.active_users.label")}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {t("financial_highlights.active_users.description")}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-green-500 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                    {t("financial_highlights.transaction_volume.value")}
                  </h3>
                  <p className="text-foreground font-semibold">
                    {t("financial_highlights.transaction_volume.label")}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {t("financial_highlights.transaction_volume.description")}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-red-500 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-red-600 dark:text-red-400 mb-2">
                    {t("financial_highlights.growth.value")}
                  </h3>
                  <p className="text-foreground font-semibold">
                    {t("financial_highlights.growth.label")}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {t("financial_highlights.growth.description")}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Market Position Section */}
      <section className="py-24 px-6 lg:px-20 hero-gradient">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white uppercase">
            {t("market_position.title")}
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600 dark:text-blue-400">
                  {t("market_position.current_position.title")}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>{t("market_position.current_position.description1")}</p>
                <p>{t("market_position.current_position.description2")}</p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600 dark:text-blue-400">
                  {t("market_position.expansion_strategy.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    • {t("market_position.expansion_strategy.points.point1")}
                  </li>
                  <li>
                    • {t("market_position.expansion_strategy.points.point2")}
                  </li>
                  <li>
                    • {t("market_position.expansion_strategy.points.point3")}
                  </li>
                  <li>
                    • {t("market_position.expansion_strategy.points.point4")}
                  </li>
                  <li>
                    • {t("market_position.expansion_strategy.points.point5")}
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Process Section */}
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

      {/* Team Leadership Section */}
      <section className="px-6 lg:px-20 hero-gradient">
        <div className="max-w-7xl mx-auto">
          <h2 className="pt-10 text-3xl md:text-4xl font-bold text-center text-white uppercase">
            {t("leadership.title")}
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600 dark:text-blue-400">
                  {t("leadership.vila.name")}
                </CardTitle>
                <Badge variant="secondary" className="w-fit">
                  {t("leadership.vila.position")}
                </Badge>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>{t("leadership.vila.description1")}</p>
                <p>{t("leadership.vila.description2")}</p>
              </CardContent>
            </Card>
            <div className="flex justify-center">
              <Image
                src="/assets/bVila.png"
                alt={
                  t("leadership.vila.name") +
                  " - " +
                  t("leadership.vila.position")
                }
                width={800}
                height={500}
                className="max-w-full drop-shadow-2xl rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-24 px-6 lg:px-20 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground uppercase">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            {t("contact.description")}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">
                  {t("contact.investor_relations.title")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground text-left">
                <p>
                  <span className="font-semibold text-foreground">Email:</span>{" "}
                  {t("contact.investor_relations.email")}
                </p>
                <p>
                  <span className="font-semibold text-foreground">Phone:</span>{" "}
                  {t("contact.investor_relations.phone")}
                </p>
                <p>
                  <span className="font-semibold text-foreground">
                    Address:
                  </span>{" "}
                  {t("contact.investor_relations.address")}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">
                  {t("contact.investment_range.title")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground text-left">
                <p>
                  <span className="font-semibold text-foreground">
                    {t("contact.investment_range.minimum")}
                  </span>{" "}
                  {t("contact.investment_range.minimum_value")}
                </p>
                <p>
                  <span className="font-semibold text-foreground">
                    {t("contact.investment_range.target")}
                  </span>{" "}
                  {t("contact.investment_range.target_value")}
                </p>
                <p>
                  <span className="font-semibold text-foreground">
                    {t("contact.investment_range.use_of_funds")}
                  </span>{" "}
                  {t("contact.investment_range.use_of_funds_value")}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <Button size="lg" className="text-lg">
              {t("contact.request_deck")}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
