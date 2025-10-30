"use client";

import React, { useEffect, useRef } from "react";
import InvestmentOpportunity from "@/components/InvestmentOpportunity";
import MarketPosition from "@/components/MarketPosition";
import { BackgroundCircles } from "@/components/ui/shadcn-io/background-circles";
import { useTranslations } from "next-intl";

export default function InvestorPage() {
  const t = useTranslations("InvestorPage");
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
    <div>
      <BackgroundCircles
        title={t("hero.title")}
        description={t("hero.description")}
        variant="senary"
      />

      <div className="fade-in-section">
        <InvestmentOpportunity />
      </div>

      <div className="fade-in-section">
        <MarketPosition />
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
    </div>
  );
}
