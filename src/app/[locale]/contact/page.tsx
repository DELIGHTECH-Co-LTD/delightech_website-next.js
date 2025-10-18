import React from "react";
import { Badge } from "@/components/ui/badge";
import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "Contact"
}

export default function ContactPage() {

  return (
    <section className="relative min-h-screen bg-background pt-32 pb-24 px-6 lg:px-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 text-sm uppercase tracking-wider"
          >
            Contact Us
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 uppercase">
            Get{" "}
            <span className="text-blue-600 dark:text-blue-400">In Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We're here to help and answer any question you might have. We look
            forward to hearing from you.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
