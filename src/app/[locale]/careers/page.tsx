import { Metadata } from "next";
import CareerPage from "@/components/pages/CareerPage";

export const metadata: Metadata = {
  title: "Our Careers",
};

export default function Page() {
  return <CareerPage />;
}
