import type { Metadata } from "next";
import { McLaren } from "next/font/google";
import "./globals.css";

const mclaren = McLaren({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yash Bhanushali Portfolio",
  description: "Yash Bhanushali Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mclaren.className}>{children}</body>
    </html>
  );
}
