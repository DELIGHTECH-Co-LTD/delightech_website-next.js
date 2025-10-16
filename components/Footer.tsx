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
  Sun,
  Moon,
} from "lucide-react";
import logo from "../public/assets/DLT.png";
import { useTheme } from "../hooks/UseTheme";

const Footer: React.FC = () => {
  const { theme, toggleTheme, mounted } = useTheme();
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

  // Using the same navigation links as Navbar for consistency
  const navigationLinks = [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/investor", label: "Investors" },
    { href: "/career", label: "Careers" },
  ];

  const supportLinks = [
    { href: "/contact", label: "Contact Support" },
    { href: "/faq", label: "FAQ" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-gradient-to-r from-blue-600/80 to-blue-800 dark:from-gray-900/80 dark:to-blue-900/80 backdrop-blur-sm text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <Image
                  src={logo}
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
              Building sustainable growth through innovation, leadership, and
              excellence across industries. Transforming lives through
              technology.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
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

          {/* Navigation Links - Following Navbar Structure */}
          <div className="space-y-6">
            <h3 className="font-medium text-sm uppercase tracking-wide text-white">
              Company
            </h3>
            <div className="space-y-3">
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
          <div className="space-y-6">
            <h3 className="font-medium text-sm uppercase tracking-wide text-white">
              Support
            </h3>
            <div className="space-y-3">
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

          {/* Newsletter & Actions - Following Navbar Actions Structure */}
          <div className="space-y-6">
            <h3 className="font-medium text-sm uppercase tracking-wide text-white">
              Stay Connected
            </h3>

            <p className="text-white/90 text-sm leading-relaxed">
              Subscribe to receive updates and insights from our latest
              projects.
            </p>

            {/* Newsletter Form - Following Navbar Button Style */}
            <form onSubmit={handleSubscribe} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
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
                {isSubscribed ? "Subscribed!" : "Subscribe"}
              </button>
            </form>

            {/* Theme Toggle - Following Navbar Theme Toggle */}
            {mounted && (
              <div className="flex items-center justify-between">
                <span className="text-white/90 font-medium text-sm">Theme</span>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-110"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5 text-yellow-300" />
                  ) : (
                    <Moon className="w-5 h-5 text-white" />
                  )}
                </button>
              </div>
            )}

            {/* Social Links - Following Navbar Icon Style */}
            <div className="space-y-4">
              <h4 className="font-medium text-sm uppercase tracking-wide text-white">
                Follow Us
              </h4>
              <div className="flex gap-3">
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
        <div className="mt-12 sm:mt-16 pt-8 border-t border-white/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-center sm:text-left">
              <p className="text-white/70 text-sm">
                {currentYear} Delightech Co., Ltd. All rights reserved.
              </p>
            </div>

            {/* Legal Links - Following Navbar Link Style */}
            <div className="flex flex-wrap justify-center sm:justify-end gap-6 text-sm">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="relative font-medium text-sm transition-all duration-300 group text-white/70 hover:text-white"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Status Indicator - Following Navbar CTA Style */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-300">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white/90 text-sm font-medium">
                Proudly serving customers across Southeast Asia
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
