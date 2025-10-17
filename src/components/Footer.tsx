"use client";
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { ModeToggle } from "./DarkModeToggle";
import { useTranslations } from "next-intl";

const Footer: React.FC = () => {
  const t = useTranslations("Footer");
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const navigationLinks = [
    { href: "/about", label: t("Navbar.about") },
    { href: "/services", label: t("Navbar.service") },
    { href: "/careers", label: t("Navbar.careers") },
  ];

  const supportLinks = [
    { href: "/store", label: t("links.store") },
    { href: "/signin", label: t("links.signin") },
    { href: "/join", label: t("links.join") },
    { href: "/contact", label: t("links.contact") },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-blue-700/20 footer-gradient text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-4">
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <Image
                  src="/assets/DLT.png"
                  alt="Delightech Logo"
                  width={50}
                  height={50}
                  className="cursor-pointer transition-all duration-300 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-blue-500/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
              </div>
              <span className="ml-3 text-xl font-bold transition-colors duration-300">
                Delightech
              </span>
            </Link>

            <p className="text-white/90 text-sm sm:text-base leading-relaxed">
              {t("description")}
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white/90 hover:text-white transition-all duration-300 group">
                <MapPin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="font-medium text-sm">
                  Phnom Penh, Cambodia
                </span>
              </div>
              <div className="flex items-center gap-2 text-white/90 hover:text-white transition-all duration-300 group">
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="font-medium text-sm">
                  +855 (0) 123 456 789
                </span>
              </div>
              <div className="flex items-center gap-2 text-white/90 hover:text-white transition-all duration-300 group">
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="font-medium text-sm">info@delightech.com</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="font-medium text-sm uppercase tracking-wide text-white">
              {t("company")}
            </h3>
            <div className="space-y-2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative font-medium text-sm uppercase tracking-wide transition-all duration-300 group text-white/90 hover:text-white block"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h3 className="font-medium text-sm uppercase tracking-wide text-white">
              {t("support")}
            </h3>
            <div className="space-y-2">
              {supportLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative font-medium text-sm uppercase tracking-wide transition-all duration-300 group text-white/90 hover:text-white block"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-4">
            <h3 className="font-medium text-sm uppercase tracking-wide text-white">
              {t("stay_connected")}
            </h3>

            <p className="text-white/90 text-sm leading-relaxed">
              {t("subscribe_description")}
            </p>

            {/* Newsletter Form */}
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("email_placeholder")}
                className="w-full px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                required
              />
              <button
                type="submit"
                disabled={isSubscribed}
                className={`w-full px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                  isSubscribed
                    ? "bg-green-600 text-white"
                    : "bg-gradient-to-r from-green-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 text-white"
                }`}
              >
                {isSubscribed ? t("subscribed") : t("subscribe")}
              </button>
            </form>

            {/* Theme Toggle */}
            <div className="flex items-center justify-between">
              <span className="text-white/90 font-medium text-sm">Theme</span>
              <ModeToggle />
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <h4 className="font-medium text-sm uppercase tracking-wide text-white">
                Follow Us
              </h4>
              <div className="flex gap-2">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-110"
                    >
                      <IconComponent className="w-4 h-4 text-white" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 sm:mt-10 pt-6 border-t border-white/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-center sm:text-left">
              <p className="text-white/70 text-sm">
                © {currentYear} {t("copyright")}
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center sm:justify-end gap-6 text-sm">
              {[
                t("privacy_policy"),
                t("terms_of_service"),
                t("cookie_policy"),
              ].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="relative font-medium text-sm transition-all duration-300 group text-white/70 hover:text-white"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Status Indicator */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-300">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white/90 text-sm font-medium">
                {t("status")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
