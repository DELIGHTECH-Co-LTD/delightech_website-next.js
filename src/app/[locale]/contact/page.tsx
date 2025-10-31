import { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function Page() {
  return <ContactPage />;
}
