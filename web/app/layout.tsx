import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import CryptoTicker from "@/components/crypto-ticker";
import Header from "@/components/layouts/Header/header";
import Footer from "@/components/layouts/Footer";
import { getCryptoNews } from "@/lib/NewsData/getApiNews";
import CryptoNewsProvider from "@/components/providers/CryptoNewsProvider";

export const metadata: Metadata = {
  title: "Web3 News Portal",
  description:
    "Your daily source for Web3, Crypto, DeFi, and NFT news and analysis.",
  generator: "v0.dev",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cryptoNews = await getCryptoNews();
  return (
    <html lang="en">
      <body>
        <CryptoNewsProvider articles={cryptoNews}>
          <CryptoTicker />
          <Header />
          {children}
          <Footer />
        </CryptoNewsProvider>
      </body>
    </html>
  );
}
