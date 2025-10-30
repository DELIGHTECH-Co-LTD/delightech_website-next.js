"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Send } from "lucide-react";
import { useTranslations } from "next-intl";

const jobs = [
  {
    title: "Senior UX Designer",
    desc: "Lead design strategy for next-generation fintech platforms. Work with top global financial brands.",
  },
  {
    title: "Frontend Developer (React)",
    desc: "Implement pixel-perfect user interfaces and animations using modern frameworks and best practices.",
  },
  {
    title: "Product Strategist",
    desc: "Define user and business goals for financial products that impact millions of customers worldwide.",
  },
];

export default function CareerPage() {
  const t = useTranslations("Careers");
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
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px",
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
    <section
      id="careers"
      className="relative min-h-screen pt-32 pb-24 px-6 lg:px-20 overflow-hidden bg-background"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 fade-in-section">
          <Badge
            variant="secondary"
            className="mb-4 text-sm uppercase tracking-wider"
            data-usal="fade-d duration-1000"
          >
            {t("badge")}
          </Badge>
          <h1
            className="text-4xl md:text-5xl font-bold text-foreground mb-4 uppercase"
            data-usal="fade-u split-word split-delay-80 duration-1000 delay-200"
          >
            {t("title")}{" "}
            <span className="text-blue-600 dark:text-blue-700">
              {t("title_highlight")}
            </span>
          </h1>
          <p
            className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8"
            data-usal="fade-u duration-1000 delay-400"
          >
            {t("description")}
          </p>
          <div data-usal="zoomin duration-800 delay-600">
            <Button size="lg" className="rounded-full text-base">
              {t("view_positions")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {jobs.map((job, i) => (
            <Card
              key={i}
              className="hover:border-blue-600 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-lg flex flex-col"
              data-usal={`flip-u duration-1000 delay-${800 + i * 150}`}
            >
              <CardHeader>
                <CardTitle className="text-2xl">{job.title}</CardTitle>
              </CardHeader>
              <CardContent className="grow">
                <CardDescription className="text-base">
                  {job.desc}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="rounded-full w-full">
                  {t("apply_now")}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center pt-12 border-t border-border">
          <h3
            className="text-3xl md:text-4xl font-bold text-foreground mb-4 uppercase"
            data-usal="fade-r duration-500"
          >
            {t("cta.title")}{" "}
            <span className="text-blue-600 dark:text-blue-700">
              {t("cta.title_highlight")}
            </span>
          </h3>
          <p
            className="text-muted-foreground mb-6 max-w-3xl mx-auto text-lg"
            data-usal="fade-l duration-800 delay-200"
          >
            {t("cta.description")}
          </p>
          <div data-usal="zoomin-u blur duration-500 delay-400">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full text-base"
            >
              {t("cta.send_portfolio")}
              <Send />
            </Button>
          </div>
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
