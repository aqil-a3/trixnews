import Image from "next/image"
import Footer from "@/components/footer"
import { Separator } from "@/components/ui/separator"
import ArticleComments from "@/components/article-comments"
import SocialShareButtons from "@/components/social-share-buttons"
import RelatedArticlesSection from "@/components/related-articles-section"
import Breadcrumbs from "@/components/breadcrumbs" // Import Breadcrumbs component
import { headers } from "next/headers"
import { getArticleBySlug, formatDateForDisplay, getCategoryDisplayName } from "@/lib/articles" // Import getCategoryDisplayName

export default async function ArticleDetailPage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)
  const headersList = await headers()
  const fullUrl = headersList.get("x-url") || ""

  if (!article) {
    return (
      <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
        <main className="container mx-auto px-4 py-8 flex-1 flex items-center justify-center">
          <h1 className="text-3xl font-bold text-gray-900">Article not found.</h1>
        </main>
        <Footer />
      </div>
    )
  }

  // Construct breadcrumbs for article page
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Articles", href: "/articles" },
    {
      label: getCategoryDisplayName(article.category.toLowerCase().replace(/\s/g, "-")),
      href: `/categories/${article.category.toLowerCase().replace(/\s/g, "-")}`,
    },
    { label: article.title }, // Last item, no href
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
      <main className="container mx-auto px-4 py-8 flex-1">
        <article className="max-w-3xl mx-auto">
          <Breadcrumbs items={breadcrumbItems} className="mb-6" /> {/* Add Breadcrumbs */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{article.title}</h1>
          <div className="text-gray-600 text-sm mb-6 flex items-center space-x-4">
            <span>
              By <span className="font-medium">{article.author || "Anonymous Author"}</span>
            </span>
            <Separator orientation="vertical" className="h-4" />
            <span>{formatDateForDisplay(article.date)}</span>
          </div>
          <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={article.imageUrl || "/placeholder.svg"}
              alt={article.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          {article.content && (
            <div
              className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          )}
          <SocialShareButtons title={article.title} url={fullUrl} />
          <ArticleComments />
          <RelatedArticlesSection currentArticleSlug={article.slug} />
        </article>
      </main>
      <Footer />
    </div>
  )
}
