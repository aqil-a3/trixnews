import Image from "next/image"
import Breadcrumbs from "@/components/breadcrumbs" // Import Breadcrumbs component
import { getGuideBySlug } from "@/lib/guides"
import RichText from "@/components/molecules/PortableText"

export default async function GuideDetailPage({ params }: { params: { slug: string } }) {
  const guide = await getGuideBySlug(params.slug)

  if (!guide) {
    return (
      <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
        <main className="container mx-auto px-4 py-8 flex-1 flex items-center justify-center">
          <h1 className="text-3xl font-bold text-gray-900">Guide not found.</h1>
        </main>
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
      <main className="container mx-auto px-4 py-8 flex-1">
        <article className="max-w-3xl mx-auto">
          <Breadcrumbs items={breadcrumbItems} className="mb-6" /> {/* Add Breadcrumbs */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{guide.title}</h1>
          <p className="text-lg text-gray-700 mb-8">{guide.description}</p>
          {guide.content && <RichText value={guide.content} /> }
        </article>
      </main>
    </div>
  )
}
