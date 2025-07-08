import Header from "@/components/header"
import Footer from "@/components/footer"
import PresaleCard from "@/components/presale-card"
import PresaleSubmissionForm from "@/components/presale-submission-form"
import { getApprovedPresales } from "@/lib/presales"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ICO Presales - Trixnews.com",
  description: "Discover the latest ICO presales and submit your own token presale for review by Trixnews.com admins.",
  keywords: ["ICO presale", "token presale", "presale list", "new crypto", "crypto investment", "Trixnews"],
  openGraph: {
    title: "ICO Presales - Trixnews.com",
    description:
      "Discover the latest ICO presales and submit your own token presale for review by Trixnews.com admins.",
    url: "https://trixnews.com/ico-presale", // Replace with your actual domain URL
    siteName: "Trixnews.com",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200&text=ICO Presale Trixnews", // Open Graph image
        width: 1200,
        height: 630,
        alt: "ICO Presales Trixnews.com",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ICO Presales - Trixnews.com",
    description:
      "Discover the latest ICO presales and submit your own token presale for review by Trixnews.com admins.",
    images: ["/placeholder.svg?height=630&width=1200&text=ICO Presale Trixnews"], // Twitter Card image
  },
}

export default function ICOPresalePage() {
  const approvedPresales = getApprovedPresales()

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">ICO Presale List</h1>

        {approvedPresales.length === 0 ? (
          <p className="text-gray-500 text-center text-lg mb-12">No approved presales at the moment.</p>
        ) : (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Active Presales</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {approvedPresales.map((presale) => (
                <PresaleCard key={presale.id} presale={presale} />
              ))}
            </div>
          </section>
        )}

        <section>
          <PresaleSubmissionForm />
        </section>
      </main>
      <Footer />
    </div>
  )
}
