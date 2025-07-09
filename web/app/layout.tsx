import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import CryptoTicker from "@/components/crypto-ticker";
import Header from "@/components/layouts/Header/header";

export const metadata: Metadata = {
  title: "Web3 News Portal",
  description:
    "Your daily source for Web3, Crypto, DeFi, and NFT news and analysis.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CryptoTicker />
        <Header />
        {children}
      </body>
    </html>
  );
}
