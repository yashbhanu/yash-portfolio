import type { Metadata } from "next";
import { McLaren } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";

const mclaren = McLaren({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yash Bhanushali",
  description:
    "Software Engineer with experience in web application development & expertise in various technologies",
  openGraph: {
    images: [
      {
        url: "https://ik.imagekit.io/yashbhanu/cover.svg?updatedAt=1716523243430",
        alt: "linkPreview",
      },
    ],
    url: "https://yash-bhanushali.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mclaren.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
