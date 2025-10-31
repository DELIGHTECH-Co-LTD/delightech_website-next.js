import { Metadata } from "next";
import AboutPage from "@/components/AboutPage";

export const metadata: Metadata = {
  title: "About Us",
};

export default function Page() {
  return <AboutPage />;
}
