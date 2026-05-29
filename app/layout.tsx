import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RevTech - Solusi Digital Profesional",
  description: "Agensi digital modern untuk kebutuhan website dan undangan digital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased selection:bg-primary/20 selection:text-primary min-h-screen flex flex-col pt-20 bg-[#F8FAFC] overflow-x-hidden`}
      >
        <Navbar />
        <main className="flex-grow">
            {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
