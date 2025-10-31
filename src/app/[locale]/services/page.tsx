import { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";
import ServicesPage from "@/components/pages/ServicePage";

export const metadata: Metadata = {
  title: "Our Services",
};

export default function Page() {
  return <ServicesPage />;
}
