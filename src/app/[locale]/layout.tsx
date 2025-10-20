import type { Metadata } from "next";
import { Roboto, Kantumruy_Pro } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FixedModeToggle } from "@/components/FixedModeToggle";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
  preload: true,
});

const kantumruy = Kantumruy_Pro({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin", "khmer"],
  variable: "--font-kantumruy",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: { default: "Delightech", template: "%s - Delightech" },
  description: "Everyone can access finances.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();
  const fontClass = locale === "kh" ? kantumruy.className : roboto.className;

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link
          rel="alternate"
          hrefLang="en"
          href={`https://delightech.asia/en`}
        />
        <link
          rel="alternate"
          hrefLang="kh"
          href={`https://delightech.asia/kh`}
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`https://delightech.asia/en`}
        />
      </head>
      <body
        className={`${roboto.variable} ${kantumruy.variable} ${fontClass} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Navbar />
            {children}
            <Footer />
            <FixedModeToggle />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
