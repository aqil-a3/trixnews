import ArticleCard from "./article-card"
import { allArticles } from "@/lib/articles"

export default function InDepthAnalysisSection() {
  // Filter articles that are categorized as "Analisis" or "Opini"
  const analysisArticles = allArticles.filter(
    (article) => article.category === "Analysis" || article.category === "Opinion",
  )

  // Sort by date (latest first) and take the first 6 for display
  const displayedArticles = [...analysisArticles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6) // Display 6 articles to fill two rows

  if (displayedArticles.length === 0) {
    return null // Don't render section if no articles
  }

  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">In-Depth Analysis & Opinion</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedArticles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </section>
  )
}
