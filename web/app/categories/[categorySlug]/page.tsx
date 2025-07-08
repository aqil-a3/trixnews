import Header from "@/components/header"
import Footer from "@/components/footer"
import ArticleCard from "@/components/article-card"
import { getArticlesByCategorySlug, getCategoryDisplayName } from "@/lib/articles"

export default function CategoryPage({ params }: { params: { categorySlug: string } }) {
  const articles = getArticlesByCategorySlug(params.categorySlug)
  const categoryName = getCategoryDisplayName(params.categorySlug)

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Category: {categoryName}</h1>

        {articles.length === 0 ? (
          <p className="text-gray-500 text-center text-lg">No articles found for this category.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
