"use client";
import { Globe, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";

const languages = [
  { code: "en", label: "English" },
  { code: "kh", label: "ខ្មែរ" },
];

export default function LanguageSwitcher() {
  const locale = useLocale(); // Get current locale
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const switchLanguage = (newLocale: string) => {
    if (newLocale !== locale) {
      // Use router.push instead of router.replace to ensure proper navigation
      router.push(pathname, { locale: newLocale });
    }
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

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative rounded-3xl  bg-white text-blue-500 dark:text-white dark:bg-gray-800 hover:bg-gray-300 dark:hover:text-gray-300 border-none transition-colors"
          aria-label="Switch language"
        >
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => switchLanguage(lang.code)}
            className="cursor-pointer"
          >
            <span>{lang.label}</span>
            {locale === lang.code && <Check className="ml-auto h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
