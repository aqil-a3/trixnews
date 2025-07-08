import ArticleCard from "./article-card"
import { getRelatedArticles } from "@/lib/articles"

interface RelatedArticlesSectionProps {
  currentArticleSlug: string
}

export default function RelatedArticlesSection({ currentArticleSlug }: RelatedArticlesSectionProps) {
  const relatedArticles = getRelatedArticles(currentArticleSlug, 3) // Get 3 related articles

  if (relatedArticles.length === 0) {
    return null // Don't render the section if no related articles are found
  }

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedArticles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </section>
  )
}
