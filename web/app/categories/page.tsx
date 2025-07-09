import Header from "@/components/layouts/Header/header"
import Footer from "@/components/footer"
import CategoriesSection from "@/components/categories-section" // Reusing the existing component
import type { Metadata } from "next" // Import Metadata type

export const metadata: Metadata = {
  title: "All Categories - Trixnews.com",
  description:
    "Explore a complete list of news categories and topics on Trixnews.com, including Web3, Finance, NFT, Layer 2, Analysis, and Opinion.",
  keywords: ["crypto categories", "web3 topics", "category list", "blockchain news", "crypto analysis", "Trixnews"],
  openGraph: {
    title: "All Categories - Trixnews.com",
    description:
      "Explore a complete list of news categories and topics on Trixnews.com, including Web3, Finance, NFT, Layer 2, Analysis, and Opinion.",
    url: "https://trixnews.com/categories", // Replace with your actual domain URL
    siteName: "Trixnews.com",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200&text=All Categories Trixnews", // Open Graph image
        width: 1200,
        height: 630,
        alt: "All Categories Trixnews.com",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Categories - Trixnews.com",
    description:
      "Explore a complete list of news categories and topics on Trixnews.com, including Web3, Finance, NFT, Layer 2, Analysis, and Opinion.",
    images: ["/placeholder.svg?height=630&width=1200&text=All Categories Trixnews"], // Twitter Card image
  },
}

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">All Categories</h1>
        {/* Reusing CategoriesSection component */}
        <CategoriesSection />
      </main>
      <Footer />
    </div>
  )
}
