import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section
      id="hero"
      className="relative min-h-screen hero-gradient flex flex-col lg:flex-row items-center justify-center lg:px-20 overflow-hidden gap-20"
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center gap-12">
        <div className="w-1/2">
          <p className="text-sm text-gray-400 mb-4">{t("subtitle")}</p>
          <h1 className="text-5xl md:text-7xl text-white h1 leading-tight mb-6">
            {t("title")}{" "}
            <span className="text-blue-700">{t("title_highlight")}</span>.
          </h1>
          <div className="flex items-center gap-4">
            <Link href="/contact">
              {/* <button className="btn btn-accent glass hover:bg-blue-700">
                Contact Us →
              </button> */}
              <Button
                size={"lg"}
                className="rounded-full bg-blue-600 hover:bg-blue-700 text-white border-none"
              >
                {t("contact_us")} →
              </Button>
            </Link>
          </div>
          <p className="mt-12 text-gray-500">{t("trusted_customers")}</p>
        </div>

        <div className="w-1/2">
          <Image
            src="/assets/DLT_B.png"
            alt="Mockup"
            width={800}
            height={800}
            className="max-w-full drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
