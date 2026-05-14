import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const geistSans = Inter ({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Linear — Built for modern software teams",
  description: "A pixel-accurate Linear.app landing page clone built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
