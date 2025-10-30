"use client";

import React, { useEffect, useRef } from "react";
import Services from "@/components/Services";

export default function ServicesPage() {
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
      <div className="fade-in-section">
        <Services />
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
