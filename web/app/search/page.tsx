import Header from "@/components/header"
import Footer from "@/components/footer"
import ArticleCard from "@/components/article-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { searchContent } from "@/lib/search"
import Link from "next/link"
import { BookOpen } from "lucide-react" // Icons for guides

interface GuideCardProps {
  title: string
  description: string
  slug: string
}

// Reusable component for Guide cards in search results
function GuideCard({ title, description, slug }: GuideCardProps) {
  // You might want to make this dynamic based on guide type
  const Icon = BookOpen // Default icon for now

  return (
    <Link href={`/guides/${slug}`} className="block group">
      <Card className="hover:shadow-lg transition-shadow h-full">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Icon className="h-8 w-8 text-primary" />
          <CardTitle className="group-hover:text-primary transition-colors text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}

export default function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const query = searchParams.q || ""
  const { articles, guides } = searchContent(query)

  const hasResults = articles.length > 0 || guides.length > 0

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Search Results for: &quot;{query}&quot;</h1>

        {!hasResults && <p className="text-gray-500 text-center text-lg">No results found for your search.</p>}

        {articles.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <ArticleCard key={index} {...article} />
              ))}
            </div>
          </section>
        )}

        {guides.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guides.map((guide, index) => (
                <GuideCard key={index} {...guide} />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}
