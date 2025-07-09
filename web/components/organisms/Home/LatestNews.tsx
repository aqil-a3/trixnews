import { useHomeData } from "@/components/providers/HomeProvider"
import ArticleCard from "../../molecules/Cards/ArticleCard"
import { allArticles } from "@/lib/articles"

export default function LatestNews() {
  const { articles } = useHomeData()
  const latestArticles = articles
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 6)

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {latestArticles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
    </div>
  )
}
