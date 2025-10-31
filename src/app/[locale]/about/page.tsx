import { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: "About Us",
};

export default function Page() {
  return <AboutPage />;
}
