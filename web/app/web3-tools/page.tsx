import Header from "@/components/layouts/Header/header"
import Footer from "@/components/layouts/Footer"
import ToolCard from "@/components/tool-card"
import { allWeb3Tools } from "@/lib/web3-tools"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Web3 Tools & Resources - Trixnews.com",
  description:
    "Discover a complete list of essential tools and resources for the Web3 ecosystem, including wallets, DEXs, NFT marketplaces, and DeFi protocols.",
  keywords: ["web3 tools", "crypto resources", "crypto wallets", "DEX", "NFT marketplaces", "DeFi", "Trixnews"],
  openGraph: {
    title: "Web3 Tools & Resources - Trixnews.com",
    description:
      "Discover a complete list of essential tools and resources for the Web3 ecosystem, including wallets, DEXs, NFT marketplaces, and DeFi protocols.",
    url: "https://trixnews.com/web3-tools", // Replace with your actual domain URL
    siteName: "Trixnews.com",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200&text=Web3 Tools Trixnews", // Open Graph image
        width: 1200,
        height: 630,
        alt: "Web3 Tools & Resources Trixnews.com",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web3 Tools & Resources - Trixnews.com",
    description:
      "Discover a complete list of essential tools and resources for the Web3 ecosystem, including wallets, DEXs, NFT marketplaces, and DeFi protocols.",
    images: ["/placeholder.svg?height=630&width=1200&text=Web3 Tools Trixnews"], // Twitter Card image
  },
}

export default function Web3ToolsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
      <main className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Web3 Tools & Resources</h1>

        {allWeb3Tools.length === 0 ? (
          <p className="text-gray-500 text-center text-lg">No tools found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allWeb3Tools.map((tool, index) => (
              <ToolCard key={index} tool={tool} />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
