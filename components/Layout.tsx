import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[#0b0b0b] text-gray-200">
      <Navbar />
      <main className="flex-1 mx-auto">{children}</main>
      <Footer />
    </div>
  );
}
