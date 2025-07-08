import Header from "@/components/header"
import Footer from "@/components/footer"
import ArticleCard from "@/components/article-card"
import { allArticles } from "@/lib/articles"
import type { Metadata } from "next" // Import Metadata type

export const metadata: Metadata = {
  title: "All Articles - Trixnews.com",
  description:
    "Explore a complete list of all the latest news articles and analysis on Web3, crypto, DeFi, NFTs, and blockchain on Trixnews.com.",
  keywords: ["crypto articles", "web3 news", "article list", "blockchain analysis", "crypto guides", "Trixnews"],
  openGraph: {
    title: "All Articles - Trixnews.com",
    description:
      "Explore a complete list of all the latest news articles and analysis on Web3, crypto, DeFi, NFTs, and blockchain on Trixnews.com.",
    url: "https://trixnews.com/articles", // Replace with your actual domain URL
    siteName: "Trixnews.com",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200&text=All Articles Trixnews", // Open Graph image
        width: 1200,
        height: 630,
        alt: "All Articles Trixnews.com",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Articles - Trixnews.com",
    description:
      "Explore a complete list of all the latest news articles and analysis on Web3, crypto, DeFi, NFTs, and blockchain on Trixnews.com.",
    images: ["/placeholder.svg?height=630&width=1200&text=All Articles Trixnews"], // Twitter Card image
  },
}

export default function ArticlesPage() {
  // Sort articles by date (latest first) for consistent display
  const sortedArticles = [...allArticles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">All Articles</h1>

        {sortedArticles.length === 0 ? (
          <p className="text-gray-500 text-center text-lg">No articles found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedArticles.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
