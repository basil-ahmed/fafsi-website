import React from "react";
import Contact from "@/components/contact"; // Assuming Contact is in components folder

export const metadata = {
  title: "Contact Us - Prequalify",
  description: "Reach out to us with your questions or comments.",
};

export default function ContactPage() {
  return (
    <div>
      <Contact />
    </div>
  );
}
