"use client";
import { FC, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Menu, X, ChevronDown } from "lucide-react";
import { ModeToggle } from "./DarkModeToggle";
import LanguageSwitcher from "./language-switcher";

const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsMenuOpen(false);
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navigationLinks = [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/investors", label: "Investors" },
    { href: "/careers", label: "Careers" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-b border-gray-200/50 dark:border-white/10 shadow-lg"
            : "nav-gradient backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center group">
                <div className="relative">
                  <Image
                    src="/assets/DLT_B.png"
                    alt="Logo"
                    width={50}
                    height={50}
                    className="cursor-pointer transition-all duration-300 group-hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
                </div>
              </Link>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-medium text-sm uppercase tracking-wide transition-all duration-300 group ${
                    isScrolled
                      ? "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      isScrolled ? "bg-blue-600 dark:bg-blue-400" : "bg-white"
                    }`}
                  ></span>
                </Link>
              ))}
            </div>
            <div className="hidden lg:flex items-center space-x-4">
              <ModeToggle />
              <Link
                href="/stores"
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
                  isScrolled
                    ? "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    : "text-white/90 hover:bg-white/20 backdrop-blur-sm"
                }`}
              >
                <MapPin size={18} />
                <span className="font-medium text-sm">Find Us</span>
              </Link>
              <LanguageSwitcher />
            </div>
            <div className="lg:hidden flex items-center space-x-3">
              <ModeToggle />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMenuOpen(!isMenuOpen);
                }}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isScrolled
                    ? "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    : "text-white hover:bg-white/20"
                }`}
                aria-label="Toggle mobile menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        ></div>
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-l border-gray-200/50 dark:border-white/10 shadow-2xl transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b border-gray-200/50 dark:border-white/10">
              <div className="flex items-center">
                <Image
                  src="/assets/DLT_B.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="mr-3"
                />
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 py-6">
              <div className="space-y-2 px-6">
                {navigationLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between py-4 px-4 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="font-medium text-lg">{link.label}</span>
                    <ChevronDown className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
              <div className="mt-8 px-6 space-y-4">
                <Link
                  href="/stores"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between w-full py-4 px-4 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <span className="font-medium text-lg">Find Us</span>
                  <MapPin className="w-5 h-5" />
                </Link>
                <div className="flex items-center justify-between w-full py-4 px-4 rounded-xl">
                  <span className="font-medium text-lg text-gray-700 dark:text-gray-300">
                    Language
                  </span>
                  <LanguageSwitcher />
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200/50 dark:border-white/10">
              <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                © 2025 Delightech. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
