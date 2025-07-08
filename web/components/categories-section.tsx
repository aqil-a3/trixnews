import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CategoriesSection() {
  const categories = [
    { name: "Web3", description: "In-depth news and analysis on Web3 technology and its applications.", slug: "web3" },
    {
      name: "Finance",
      description: "Latest developments in the world of decentralized finance (DeFi) and digital assets.",
      slug: "finance",
    },
    {
      name: "NFT",
      description: "All about Non-Fungible Tokens, digital art, collectibles, and marketplaces.",
      slug: "nft",
    },
    {
      name: "Layer 2",
      description: "Scalability solutions for blockchains, including rollups and sidechains.",
      slug: "layer-2",
    },
  ]

  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category, index) => (
          <Link href={`/categories/${category.slug}`} key={index} className="block group">
            <Card className="hover:shadow-lg transition-shadow h-full min-h-[120px]">
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{category.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
