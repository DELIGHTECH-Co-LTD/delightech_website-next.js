﻿import { Metadata } from "next";
import ContactPage from "@/components/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function Page() {
  return <ContactPage />;
}
