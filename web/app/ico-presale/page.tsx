import PresaleTemplate from "@/components/templates/PresaleTemplate";
import { getApprovedPresales } from "@/lib/presales";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ICO Presales - Trixnews.com",
  description:
    "Discover the latest ICO presales and submit your own token presale for review by Trixnews.com admins.",
  keywords: [
    "ICO presale",
    "token presale",
    "presale list",
    "new crypto",
    "crypto investment",
    "Trixnews",
  ],
  openGraph: {
    title: "ICO Presales - Trixnews.com",
    description:
      "Discover the latest ICO presales and submit your own token presale for review by Trixnews.com admins.",
    url: "https://trixnews.com/ico-presale", // Replace with your actual domain URL
    siteName: "Trixnews.com",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200&text=ICO Presale Trixnews", // Open Graph image
        width: 1200,
        height: 630,
        alt: "ICO Presales Trixnews.com",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ICO Presales - Trixnews.com",
    description:
      "Discover the latest ICO presales and submit your own token presale for review by Trixnews.com admins.",
    images: [
      "/placeholder.svg?height=630&width=1200&text=ICO Presale Trixnews",
    ], // Twitter Card image
  },
};

export default async function ICOPresalePage() {
  const approvedPresales = await getApprovedPresales();
  return <PresaleTemplate presales={approvedPresales} />;
}
