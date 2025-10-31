"use client";

import React, { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import ContactForm from "@/components/ContactForm";
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
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const elements = document.querySelectorAll(".fade-in-section");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-background pt-32 pb-24 px-6 lg:px-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-16 fade-in-section">
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

      <style jsx global>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(50px);
          transition:
            opacity 0.8s ease-out,
            transform 0.8s ease-out;
        }

        .fade-in-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
