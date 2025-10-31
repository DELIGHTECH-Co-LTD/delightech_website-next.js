import { Metadata } from "next";
import InvestorPage from "@/components/InvestorPage";

export const metadata: Metadata = {
  title: "Invest with us",
};

export default function Page() {
  return <InvestorPage />;
}
