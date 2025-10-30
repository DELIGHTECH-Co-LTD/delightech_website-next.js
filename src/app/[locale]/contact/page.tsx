import React from "react";
import { Badge } from "@/components/ui/badge";
import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("ContactPage");
  return {
    title: t("badge"),
  };
}

export default function ContactPage() {
  const t = useTranslations("ContactPage");

  return (
    <section className="relative min-h-screen bg-background pt-32 pb-24 px-6 lg:px-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 text-sm uppercase tracking-wider"
            data-usal="zoomin duration-500"
          >
            {t("badge")}
          </Badge>
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-4 uppercase"
            data-usal="fade-u split-letter split-delay-50 duration-750 delay-200"
          >
            {t("title")}{" "}
            <span className="text-blue-600 dark:text-blue-700">
              {t("title_highlight")}
            </span>
          </h2>
          <p
            className="text-muted-foreground text-lg max-w-3xl mx-auto"
            data-usal="fade-u duration-500 delay-400"
          >
            {t("description")}
          </p>
        </div>

        <div data-usal="zoomin-u blur duration-600 delay-600">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
