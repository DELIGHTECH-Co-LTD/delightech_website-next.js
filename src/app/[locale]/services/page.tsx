import { Metadata } from "next";
import ContactPage from "@/components/ContactPage";
import ServicesPage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Our Services",
};

export default function Page() {
  return <ServicesPage />;
}
