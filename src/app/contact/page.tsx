import type { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description: "Email, GitHub, LinkedIn and Medium.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactSection as="h1" />;
}
