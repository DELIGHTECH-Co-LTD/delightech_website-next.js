"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitted(true);
    setIsLoading(false);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Phnom Penh, Cambodia"],
      color: "text-blue-600",
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+855 (0) 123 456 789"],
      color: "text-green-600",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@delightech.com"],
      color: "text-purple-600",
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon - Fri: 8AM - 6PM"],
      color: "text-orange-600",
    },
  ];

  const subjectOptions = [
    "General Inquiry",
    "Business Partnership",
    "Technical Support",
    "Investment Opportunities",
    "Career Opportunities",
    "Other",
  ];

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

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <Card
                key={index}
                className="group overflow-hidden border-border hover:border-blue-600/50 dark:hover:border-blue-400/50 hover:shadow-2xl transition-all duration-500"
              >
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-500">
                    <IconComponent
                      className={`w-6 h-6 ${info.color} group-hover:text-white transition-colors duration-500`}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 uppercase">
                    {info.title}
                  </h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}

                  {/* Decorative Line */}
                  <div className="mt-4 flex items-center justify-center">
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-600 dark:from-blue-400 dark:to-purple-400 rounded-full group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-500"></div>
                  </div>
                </CardContent>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-blue-600/5 pointer-events-none transition-opacity duration-500"></div>
              </Card>
            );
          })}
        </div>

        {/* Contact Form */}
        <Card className="group overflow-hidden border-border hover:border-blue-600/50 dark:hover:border-blue-400/50 hover:shadow-2xl transition-all duration-500">
          <CardContent className="p-0">
            <div className="flex flex-col lg:flex-row">
              {/* Form Content */}
              <div className="w-full lg:w-2/3 p-8 lg:p-12">
                <Badge variant="secondary" className="mb-4">
                  Contact Form
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6 uppercase">
                  Send Message
                </h3>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">
                          Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-muted border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-muted border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                          placeholder="Your email"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-muted border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                        required
                      >
                        <option value="">Select subject</option>
                        {subjectOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full px-3 py-2 bg-muted border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 resize-none"
                        placeholder="Your message..."
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isLoading}
                      size="lg"
                      className={`w-full text-base ${
                        isLoading ? "cursor-not-allowed" : ""
                      }`}
                    >
                      {isLoading ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-muted-foreground">
                      We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                {/* Decorative Line */}
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex-1 h-1 bg-gradient-to-r from-blue-600 to--600 dark:from-blue-400 dark:to-purple-400 rounded-full group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-500"></div>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                    Quick Response
                  </span>
                </div>

                {/* Hover Indicator */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-medium">
                    <span>24/7 Support</span>
                    <svg
                      className="w-4 h-4 animate-bounce"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Contact Information Side Panel */}
              <div className="w-full lg:w-1/3 bg-gradient-to-br from-blue-600 to-blue-500 dark:from-blue-700 dark:to-blue-900 p-8 lg:p-12 text-white">
                <h4 className="text-xl font-bold mb-6 uppercase">
                  Contact Information
                </h4>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-white/20">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h5 className="font-medium text-white mb-1">
                            {info.title}
                          </h5>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-white/80 text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Company Info */}
                <div className="mt-8 pt-8 border-t border-white/20">
                  <h5 className="font-bold text-white mb-2 uppercase">
                    Delightech Company
                  </h5>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Leading technology solutions provider committed to
                    innovation and excellence in digital transformation.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>

          {/* Hover Glow Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-blue-600/5 pointer-events-none transition-opacity duration-500"></div>
        </Card>
      </div>
    </section>
  );
}
