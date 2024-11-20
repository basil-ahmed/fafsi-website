"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function RefinancingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  return (
    <>
      {/* Header wrapper with hover interaction */}
      <div className="relative group">
        <div className="absolute inset-0 z-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Header />
        </div>
      </div>

      <main className="grow">{children}</main>

      <Footer border={true} />
    </>
  );
}
