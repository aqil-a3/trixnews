import type { Metadata } from "next"; // Import Metadata type
import { getAllArticles } from "../../utils/posts";
import ArticlesTemplate from "@/components/templates/ArticlesTemplate";

export const metadata: Metadata = {
  title: "All Articles - Trixnews.com",
  description:
    "Explore a complete list of all the latest news articles and analysis on Web3, crypto, DeFi, NFTs, and blockchain on Trixnews.com.",
  keywords: [
    "crypto articles",
    "web3 news",
    "article list",
    "blockchain analysis",
    "crypto guides",
    "Trixnews",
  ],
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
    images: [
      "/placeholder.svg?height=630&width=1200&text=All Articles Trixnews",
    ], // Twitter Card image
  },
};

export const dynamic = "force-dynamic";
export const revalidate = 0;
export default async function ArticlesPage() {
  const articles = await getAllArticles();

  return <ArticlesTemplate articles={articles} />;
}
