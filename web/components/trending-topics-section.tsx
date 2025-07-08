import TrendingCard from "./trending-card"
import { allArticles, type Article } from "@/lib/articles"
import { allGuides, type Guide } from "@/lib/guides"

export default function TrendingTopicsSection() {
  // Combine articles and guides into a single array
  const combinedItems: (Article | Guide)[] = [...allArticles, ...allGuides]

  // Sort by popularity in descending order and take the top 6
  const trendingItems = combinedItems
    .sort((a, b) => (b.popularity || 0) - (a.popularity || 0)) // Use 0 if popularity is undefined
    .slice(0, 6) // Display top 6 trending items

  if (trendingItems.length === 0) {
    return null // Don't render section if no trending items
  }

  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Trending Topics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trendingItems.map((item, index) => (
          <TrendingCard key={index} item={item} />
        ))}
      </div>
    </section>
  )
}
