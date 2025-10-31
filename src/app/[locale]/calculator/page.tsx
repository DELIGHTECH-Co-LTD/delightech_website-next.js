import { Metadata } from "next";
import CalculatorPage from "@/components/pages/CalculatorPage";

export const metadata: Metadata = {
  title: "Try our Calculator",
};

export default function Page() {
  return <CalculatorPage />;
}
