import PredictionCard from "@/components/prediction-card"
import PredictionSubmissionForm from "@/components/prediction-submission-form"
import { getActivePredictions } from "@/lib/predictions"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Crypto & Web3 Predictions - Trixnews.com",
  description:
    "Find the latest crypto price predictions, Web3 trends, and market analysis from experts on Trixnews.com. Submit your own prediction.",
  keywords: ["crypto predictions", "bitcoin price prediction", "web3 trends", "market analysis", "Trixnews"],
  openGraph: {
    title: "Crypto & Web3 Predictions - Trixnews.com",
    description:
      "Find the latest crypto price predictions, Web3 trends, and market analysis from experts on Trixnews.com. Submit your own prediction.",
    url: "https://trixnews.com/predictions", // Replace with your actual domain URL
    siteName: "Trixnews.com",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200&text=Crypto Predictions Trixnews", // Open Graph image
        width: 1200,
        height: 630,
        alt: "Crypto & Web3 Predictions Trixnews.com",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crypto & Web3 Predictions - Trixnews.com",
    description:
      "Find the latest crypto price predictions, Web3 trends, and market analysis from experts on Trixnews.com. Submit your own prediction.",
    images: ["/placeholder.svg?height=630&width=1200&text=Crypto Predictions Trixnews"], // Twitter Card image
  },
}

export default async function PredictionsPage() {
  const activePredictions = await getActivePredictions()

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
      <main className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Crypto & Web3 Predictions</h1>

        {activePredictions.length === 0 ? (
          <p className="text-gray-500 text-center text-lg mb-12">No active predictions at the moment.</p>
        ) : (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Predictions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activePredictions.map((prediction) => (
                <PredictionCard key={prediction.id} prediction={prediction} />
              ))}
            </div>
          </section>
        )}

        <section>
          <PredictionSubmissionForm />
        </section>
      </main>
    </div>
  )
}
