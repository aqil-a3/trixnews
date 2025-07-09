import ArticleCard from "./organisms/Articles/ArticleCard"
import { allArticles } from "@/lib/articles"

export default function LatestNews() {
  // Display a subset of allArticles for "Latest News"
  // Sort by date (latest first) and take the first 6
  const latestArticles = [...allArticles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6)

  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {latestArticles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </section>
  )
}
