"use client";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";

const languages = [
  { code: "en", label: "English", fullLabel: "English" },
  { code: "kh", label: "ភាសាខ្មែរ", fullLabel: "ខ្មែរ" },
];

export default function LanguageSwitcher() {
  const locale = useLocale(); // Get current locale
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    // Toggle between 'en' and 'kh'
    const newLocale = locale === "en" ? "kh" : "en";
    router.push(pathname, { locale: newLocale });
  };

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="relative bg-transparent border-none"
      >
        <Globe className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Switch language</span>
      </Button>
    );
  }

  const currentLanguage = languages.find((lang) => lang.code === locale);

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="relative rounded-3xl bg-white text-blue-500 dark:text-white dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-300 border-none transition-all duration-300 min-w-12 px-3"
      aria-label={`Switch to ${locale === "en" ? "Khmer" : "English"}`}
    >
      <span className="text-sm font-semibold transition-transform duration-300 hover:scale-110">
        {currentLanguage?.label || "EN"}
      </span>
      <span className="sr-only">Switch language</span>
    </Button>
  );
}
