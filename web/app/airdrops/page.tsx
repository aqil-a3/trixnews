import Header from "@/components/header"
import Footer from "@/components/footer"
import AirdropCard from "@/components/airdrop-card"
import AirdropSubmissionForm from "@/components/airdrop-submission-form"
import { getApprovedAirdrops } from "@/lib/airdrops"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Crypto Airdrops List - Trixnews.com",
  description:
    "Discover the latest crypto airdrops and submit your own token airdrop for review by Trixnews.com admins.",
  keywords: ["crypto airdrop", "free tokens", "airdrop list", "new crypto", "Trixnews"],
  openGraph: {
    title: "Crypto Airdrops List - Trixnews.com",
    description:
      "Discover the latest crypto airdrops and submit your own token airdrop for review by Trixnews.com admins.",
    url: "https://trixnews.com/airdrops", // Replace with your actual domain URL
    siteName: "Trixnews.com",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200&text=Crypto Airdrop Trixnews", // Open Graph image
        width: 1200,
        height: 630,
        alt: "Crypto Airdrops List Trixnews.com",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crypto Airdrops List - Trixnews.com",
    description:
      "Discover the latest crypto airdrops and submit your own token airdrop for review by Trixnews.com admins.",
    images: ["/placeholder.svg?height=630&width=1200&text=Crypto Airdrop Trixnews"], // Twitter Card image
  },
}

export default function AirdropsPage() {
  const approvedAirdrops = getApprovedAirdrops()

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Crypto Airdrops List</h1>

        {approvedAirdrops.length === 0 ? (
          <p className="text-gray-500 text-center text-lg mb-12">No approved airdrops at the moment.</p>
        ) : (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Active & Upcoming Airdrops</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {approvedAirdrops.map((airdrop) => (
                <AirdropCard key={airdrop.id} airdrop={airdrop} />
              ))}
            </div>
          </section>
        )}

        <section>
          <AirdropSubmissionForm />
        </section>
      </main>
      <Footer />
    </div>
  )
}
