"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Menu, X, ChevronRight } from "lucide-react";
import { ModeToggle } from "./DarkModeToggle";
import LanguageSwitcher from "./language-switcher";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations("Navbar");

  // Optimized scroll handler with throttling
  useEffect(() => {
    let rafId: number;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        if (Math.abs(currentScrollY - lastScrollY) > 10) {
          setIsScrolled(currentScrollY > 50);
          lastScrollY = currentScrollY;
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const navigationLinks = [
    { href: "/about", label: t("about") },
    { href: "/services", label: t("service") },
    { href: "/investors", label: t("investor") },
    { href: "/careers", label: t("careers") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-b border-gray-200/50 dark:border-white/10 shadow-lg"
            : "nav-gradient backdrop-blur-sm"
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
              aria-label="Delightech home"
            >
              <div className="relative">
                <Image
                  src="/assets/DLT_B.png"
                  alt="Delightech logo"
                  width={50}
                  height={50}
                  className="cursor-pointer transition-transform duration-300 group-hover:scale-110"
                  priority
                />
                <div
                  className="absolute inset-0 bg-primary/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"
                  aria-hidden="true"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                {navigationLinks.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={link.href}
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "font-medium text-sm uppercase tracking-wider transition-colors duration-200 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent relative px-4 py-2",
                          "before:absolute before:bottom-0 before:left-0 before:w-0 before:h-px before:bg-current before:transition-all before:duration-200 before:ease-out hover:before:w-full",
                          isScrolled
                            ? "text-gray-700 dark:text-gray-300"
                            : "text-white/80"
                        )}
                      >
                        {link.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-2">
              <ModeToggle />

              <Button
                variant="ghost"
                size="sm"
                asChild
                className={cn(
                  "gap-2 rounded-full transition-all duration-300 hover:scale-105 hover:bg-transparent focus:bg-transparent active:bg-transparent",
                  isScrolled
                    ? "text-gray-700 dark:text-gray-300"
                    : "text-white/90"
                )}
              >
                <a href="https://maps.app.goo.gl/2Rgf7xrg5aDfTzAR8">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  <span className="font-medium text-sm">{t("find_us")}</span>
                </a>
              </Button>

              <LanguageSwitcher />
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden flex items-center space-x-2">
              <ModeToggle />

              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={cn(
                      "rounded-lg transition-all duration-300 hover:bg-transparent focus:bg-transparent active:bg-transparent",
                      isScrolled
                        ? "text-gray-700 dark:text-gray-300"
                        : "text-white"
                    )}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                  >
                    {isMenuOpen ? (
                      <X className="h-6 w-6" />
                    ) : (
                      <Menu className="h-6 w-6" />
                    )}
                  </Button>
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="w-full sm:max-w-sm bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-l border-gray-200/50 dark:border-white/10"
                >
                  <SheetHeader className="border-b border-gray-200/50 dark:border-white/10 pb-6">
                    <SheetTitle className="flex items-center">
                      <Image
                        src="/assets/DLT_B.png"
                        alt="Delightech logo"
                        width={40}
                        height={40}
                      />
                    </SheetTitle>
                  </SheetHeader>

                  {/* Mobile Navigation Links */}
                  <nav className="flex flex-col py-6" role="navigation">
                    <div className="space-y-2">
                      {navigationLinks.map((link, index) => (
                        <SheetClose asChild key={link.href}>
                          <Link
                            href={link.href}
                            className={cn(
                              "flex items-center justify-between py-4 px-4 rounded-xl transition-colors duration-200 relative hover:bg-transparent focus:bg-transparent active:bg-transparent",
                              "text-gray-700 dark:text-gray-300",
                              "before:absolute before:bottom-2 before:left-4 before:w-0 before:h-px before:bg-current before:transition-all before:duration-200 before:ease-out hover:before:w-[calc(100%-2rem)]",
                              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            )}
                            style={{
                              animation: `fadeInUp 0.3s ease-out ${
                                index * 0.1
                              }s both`,
                            }}
                          >
                            <span className="font-medium text-lg relative z-10">
                              {link.label}
                            </span>
                            <ChevronRight
                              className="w-4 h-4 transition-transform duration-200 hover:translate-x-1 relative z-10"
                              aria-hidden="true"
                            />
                          </Link>
                        </SheetClose>
                      ))}
                    </div>

                    {/* Mobile Actions */}
                    <div className="mt-8 space-y-4">
                      <SheetClose asChild>
                        <a
                          href="https://maps.app.goo.gl/2Rgf7xrg5aDfTzAR8"
                          className={cn(
                            "flex items-center justify-between w-full py-4 px-4 rounded-xl transition-colors",
                            "text-gray-700 dark:text-gray-300",
                            "hover:bg-transparent focus:bg-transparent active:bg-transparent",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          )}
                        >
                          <span className="font-medium text-lg">
                            {t("find_us")}
                          </span>
                          <MapPin className="w-5 h-5" aria-hidden="true" />
                        </a>
                      </SheetClose>

                      <div className="flex items-center justify-center w-full py-4 px-4 rounded-xl">
                        <LanguageSwitcher />
                      </div>
                    </div>
                  </nav>

                  {/* Mobile Menu Footer */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200/50 dark:border-white/10">
                    <p className="text-center text-sm text-muted-foreground">
                      © 2025 Delightech. All rights reserved.
                    </p>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
