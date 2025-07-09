import Image from "next/image"
import Header from "@/components/layouts/Header/header"
import Footer from "@/components/layouts/Footer"
import { getPredictionBySlug, formatDate } from "@/lib/predictions"
import type { Metadata } from "next"
import { CheckCircle, XCircle, CalendarDays } from "lucide-react" // Import new icons

// Dynamic metadata for prediction detail page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const prediction = getPredictionBySlug(params.slug)

  if (!prediction) {
    return {
      title: "Prediction Not Found - Trixnews.com",
      description: "The prediction page you are looking for was not found.",
    }
  }

  const title = `${prediction.title} - Trixnews.com`
  const description = prediction.summary
  const keywords = [
    `${prediction.title.toLowerCase()}`,
    "crypto prediction",
    "market analysis",
    "web3 trends",
    "Trixnews",
  ]

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `https://trixnews.com/predictions/${prediction.slug}`,
      siteName: "Trixnews.com",
      images: [
        {
          url: prediction.imageUrl || `/placeholder.svg?height=630&width=1200&text=${prediction.title}`,
          width: 1200,
          height: 630,
          alt: `${prediction.title}`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [prediction.imageUrl || `/placeholder.svg?height=630&width=1200&text=${prediction.title}`],
    },
  }
}

export default function PredictionDetailPage({ params }: { params: { slug: string } }) {
  const prediction = getPredictionBySlug(params.slug)

  if (!prediction) {
    return (
      <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
        <Header />
        <main className="container mx-auto px-4 py-8 flex-1 flex items-center justify-center">
          <h1 className="text-3xl font-bold text-gray-900">Prediction not found.</h1>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-1">
        <article className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="relative aspect-video w-full mb-6 rounded-lg overflow-hidden">
            <Image
              src={prediction.imageUrl || "/placeholder.svg?height=400&width=600&text=Prediction"}
              alt={prediction.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">{prediction.title}</h1>
          <div className="text-gray-600 text-sm mb-6 flex items-center space-x-4">
            <span>
              By <span className="font-medium">{prediction.author}</span>
            </span>
            <span className="w-1 h-1 bg-gray-400 rounded-full" />
            <span>{formatDate(prediction.date)}</span>
          </div>

          <p className="text-lg text-gray-700 mb-8">{prediction.summary}</p>

          {prediction.predictionContent && (
            <div
              className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: prediction.predictionContent }}
            />
          )}

          {prediction.isResolved && (
            <div className="mt-8 p-6 rounded-lg border border-gray-200 bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                {prediction.accuracyScore !== undefined && prediction.accuracyScore >= 70 ? (
                  <CheckCircle className="h-6 w-6 text-green-600" />
                ) : (
                  <XCircle className="h-6 w-6 text-red-600" />
                )}
                Prediction Result
              </h3>
              <div className="space-y-2 text-gray-700">
                {prediction.resolutionDate && (
                  <p className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-gray-500" />
                    <strong>Resolution Date:</strong> {formatDate(prediction.resolutionDate)}
                  </p>
                )}
                {prediction.actualOutcome && (
                  <p>
                    <strong>Actual Outcome:</strong> {prediction.actualOutcome}
                  </p>
                )}
                {prediction.accuracyScore !== undefined && (
                  <p>
                    <strong>Accuracy Score:</strong>{" "}
                    <span className={`font-bold ${prediction.accuracyScore >= 70 ? "text-green-600" : "text-red-600"}`}>
                      {prediction.accuracyScore}%
                    </span>
                  </p>
                )}
              </div>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </div>
  )
}
