import React from "react";
import Services from "@/components/Services";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "Our Services"
}

export default function ServicesPage() {
  return (
    <div>
      <Services />
    </div>
  );
}
