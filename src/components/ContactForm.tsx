"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

export default function ContactForm() {
  const t = useTranslations("ContactForm");

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

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        toast.error("Form Submission unsuccessful");
        setIsLoading(false);
        return; 
      }
      toast.success("Form Submission successful.");
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 3000);
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const subjectOptions = [
    { key: "general", label: t("subjects.general") },
    { key: "business", label: t("subjects.business") },
    { key: "technical", label: t("subjects.technical") },
    { key: "investment", label: t("subjects.investment") },
    { key: "career", label: t("subjects.career") },
    { key: "other", label: t("subjects.other") },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: t("address"),
      details: [t("contactInfo.address")],
      color: "text-blue-600",
    },
    {
      icon: Phone,
      title: t("phone"),
      details: [t("contactInfo.phone")],
      color: "text-green-600",
    },
    {
      icon: Mail,
      title: t("email"),
      details: [t("contactInfo.email")],
      color: "text-purple-600",
    },
    {
      icon: Clock,
      title: t("hours"),
      details: [t("contactInfo.hours")],
      color: "text-orange-600",
    },
  ];

  return (
    <div className="group overflow-hidden border border-border hover:border-blue-600/50 dark:hover:border-blue-400/50 hover:shadow-2xl transition-all duration-500 rounded-lg relative">
      <div className="h-full">
        <div className="flex flex-col lg:flex-row h-full">
          {/* Form Content */}
          <div className="w-full lg:w-2/3 p-8 lg:p-12 bg-accent">
            {/* <Badge variant="secondary" className="mb-4">
              Contact Form
            </Badge> */}
            <h3 className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6 uppercase">
              {t("title")}
            </h3>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t("name")} *</Label>
                    <Input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={t("yourName")}
                      required
                      className="focus-visible:ring-blue-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t("email")} *</Label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t("yourEmail")}
                      required
                      className="focus-visible:ring-blue-600"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">{t("subject")} *</Label>
                  <Select
                    name="subject"
                    value={formData.subject}
                    onValueChange={(value) =>
                      handleInputChange({
                        target: { name: "subject", value },
                      } as any)
                    }
                    required
                  >
                    <SelectTrigger className="focus:ring-blue-600">
                      <SelectValue placeholder={t("selectSubject")} />
                    </SelectTrigger>
                    <SelectContent>
                      {subjectOptions.map((option) => (
                        <SelectItem key={option.key} value={option.label}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t("message")} *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder={t("yourMessage")}
                    required
                    className="resize-none focus-visible:ring-blue-600"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  size="lg"
                  className="w-full text-base"
                >
                  {isLoading ? t("sending") : t("sendMessage")}
                </Button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {t("successTitle")}
                </h3>
                <p className="text-muted-foreground">{t("successMessage")}</p>
              </div>
            )}

            {/* Decorative Line */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex-1 h-1 bg-linear-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-300 rounded-full group-hover:from-blue-500 group-hover:to-blue-700 transition-all duration-500"></div>
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                {t("quickResponse")}
              </span>
            </div>

            {/* Hover Indicator */}
            <div className="mt-6 opacity-100 group-hover:opacity-100 transition-opacity duration-500">
              <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-medium">
                <span>{t("support24")}</span>
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
          <div className="w-full lg:w-1/3 bg-linear-to-br from-blue-600 to-blue-500 dark:from-blue-700 dark:to-blue-900 p-8 lg:p-12 text-white flex flex-col">
            <h4 className="text-xl font-bold mb-6 uppercase">
              {t("contactInformation")}
            </h4>
            <div className="space-y-6 grow">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm items-center justify-center">
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
            <div className="border-t border-blue-400/30">
              {/* <h5 className="font-bold text-white mb-2 uppercase">
                Delightech Company
              </h5> */}
              <Image
                src={"/assets/tagline.png"}
                width={250}
                height={250}
                alt={"tagline"}
                className="py-2"
              />
              <p className="text-white/80 text-sm leading-relaxed">
                {t("companyDescription")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-linear-to-r from-blue-500/5 via-blue-600/5 to-blue-700/5 pointer-events-none transition-opacity duration-500"></div>
    </div>
  );
}
