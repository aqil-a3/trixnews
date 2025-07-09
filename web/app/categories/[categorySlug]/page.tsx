import Footer from "@/components/layouts/Footer"
import ArticleCard from "@/components/molecules/Cards/ArticleCard"
import { getCategoryDisplayName, getPostsByCategorySlug } from "@/utils/posts"

export default async function CategoryPage({ params }: { params: { categorySlug: string } }) {
  const articles = await getPostsByCategorySlug(params.categorySlug)
  const categoryName = await getCategoryDisplayName(params.categorySlug)

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
      <main className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Category: {categoryName}</h1>

        {articles.length === 0 ? (
          <p className="text-gray-500 text-center text-lg">No articles found for this category.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
