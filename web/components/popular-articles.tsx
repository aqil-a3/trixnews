import ArticleCard from "./article-card"
import { allArticles } from "@/lib/articles"

export default function PopularArticles() {
  // Get popular articles based on the 'popularity' property
  // Sort by highest popularity and take the top 6
  const popularArticles = [...allArticles].sort((a, b) => b.popularity - a.popularity).slice(0, 6) // Display 6 popular articles

  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {popularArticles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </section>
  )
}
