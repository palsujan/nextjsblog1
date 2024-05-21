import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Js Blog Page",
  description: "Next Js blog page done by Sujan Pal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-slate-900 text-white max-w-3xl mx-auto py-20 px-4" lang="en">
      <body>{children}</body>
    </html>
  );
}
