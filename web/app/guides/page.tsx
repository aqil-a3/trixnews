import Header from "@/components/layouts/Header/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Lightbulb, GraduationCap } from "lucide-react" // Icons for guides
import { allGuides } from "@/lib/guides"
import type { Metadata } from "next" // Import Metadata type

export const metadata: Metadata = {
  title: "All Guides & Tutorials - Trixnews.com",
  description:
    "Find comprehensive guides and tutorials on Web3, crypto, blockchain, DeFi, NFTs, and other related topics on Trixnews.com.",
  keywords: ["crypto guides", "web3 tutorials", "learn blockchain", "defi guide", "nft tutorial", "Trixnews"],
  openGraph: {
    title: "All Guides & Tutorials - Trixnews.com",
    description:
      "Find comprehensive guides and tutorials on Web3, crypto, blockchain, DeFi, NFTs, and other related topics on Trixnews.com.",
    url: "https://trixnews.com/guides", // Replace with your actual domain URL
    siteName: "Trixnews.com",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200&text=All Guides Trixnews", // Open Graph image
        width: 1200,
        height: 630,
        alt: "All Guides & Tutorials Trixnews.com",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Guides & Tutorials - Trixnews.com",
    description:
      "Find comprehensive guides and tutorials on Web3, crypto, blockchain, DeFi, NFTs, and other related topics on Trixnews.com.",
    images: ["/placeholder.svg?height=630&width=1200&text=All Guides Trixnews"], // Twitter Card image
  },
}

export default function GuidesPage() {
  // Helper to determine icon based on slug, similar to GuidesTutorialsSection
  const getIconComponent = (slug: string) => {
    switch (slug) {
      case "what-is-blockchain":
        return BookOpen
      case "getting-started-with-defi":
        return Lightbulb
      case "how-to-buy-your-first-nft":
        return GraduationCap
      case "crypto-security-tips":
        return BookOpen
      case "understanding-smart-contracts":
        return Lightbulb
      case "staking-vs-yield-farming":
        return GraduationCap
      default:
        return BookOpen // Default icon
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">All Guides & Tutorials</h1>

        {allGuides.length === 0 ? (
          <p className="text-gray-500 text-center text-lg">No guides found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allGuides.map((guide, index) => {
              const Icon = getIconComponent(guide.slug)
              return (
                <Link href={`/guides/${guide.slug}`} key={index} className="block group">
                  <Card className="hover:shadow-lg transition-shadow h-full">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <Icon className="h-8 w-8 text-primary" />
                      <CardTitle className="group-hover:text-primary transition-colors text-xl">
                        {guide.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">{guide.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
