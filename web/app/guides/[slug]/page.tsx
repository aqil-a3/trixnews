import Image from "next/image"
import Header from "@/components/layouts/Header/header"
import Footer from "@/components/layouts/Footer"
import Breadcrumbs from "@/components/breadcrumbs" // Import Breadcrumbs component
import { getGuideBySlug } from "@/lib/guides"

export default function GuideDetailPage({ params }: { params: { slug: string } }) {
  const guide = getGuideBySlug(params.slug)

  if (!guide) {
    return (
      <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
        <Header />
        <main className="container mx-auto px-4 py-8 flex-1 flex items-center justify-center">
          <h1 className="text-3xl font-bold text-gray-900">Guide not found.</h1>
        </main>
        <Footer />
      </div>
    )
  }

  // Construct breadcrumbs for guide page
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Guides", href: "/guides" },
    { label: guide.title }, // Last item, no href
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-1">
        <article className="max-w-3xl mx-auto">
          <Breadcrumbs items={breadcrumbItems} className="mb-6" /> {/* Add Breadcrumbs */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{guide.title}</h1>
          <p className="text-lg text-gray-700 mb-8">{guide.description}</p>
          <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600&text=Guide"
              alt={guide.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          {guide.content && (
            <div
              className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: guide.content }}
            />
          )}
        </article>
      </main>
      <Footer />
    </div>
  )
}
