import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diamond Nine Athletics | Elite Baseball Training",
  description:
    "Elite baseball training with Rapsodo technology. Pitching and hitting plans for high school and college athletes in the Dallas-Fort Worth area.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bebasNeue.variable} font-sans bg-[#080808] text-white antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
