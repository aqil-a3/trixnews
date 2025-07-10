import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/layouts/Header/header"
import Footer from "@/components/layouts/Footer"
import Image from "next/image"
import { getAirdropBySlug, formatDate, getAirdropStatus } from "@/lib/airdrops"
import { CalendarDays, Gift, LinkIcon, TrendingUp } from "lucide-react"
import type { Metadata } from "next"

// Dynamic metadata for airdrop detail page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const airdrop = getAirdropBySlug(params.slug)

  if (!airdrop) {
    return {
      title: "Airdrop Not Found - Trixnews.com",
      description: "The airdrop page you are looking for was not found.",
    }
  }

  const title = `${airdrop.name} - Trixnews.com`
  const description = `Full details about the ${airdrop.name} airdrop: ${airdrop.description}. Reward ${airdrop.rewardAmount}, starts ${formatDate(airdrop.startDate)}.`
  const keywords = [`${airdrop.name.toLowerCase()} airdrop`, "crypto airdrop", "free tokens", "new crypto", "Trixnews"]

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `https://trixnews.com/airdrops/${airdrop.slug}`,
      siteName: "Trixnews.com",
      images: [
        {
          url: airdrop.imageUrl || `/placeholder.svg?height=630&width=1200&text=${airdrop.name} Airdrop`,
          width: 1200,
          height: 630,
          alt: `${airdrop.name} Airdrop`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [airdrop.imageUrl || `/placeholder.svg?height=630&width=1200&text=${airdrop.name} Airdrop`],
    },
  }
}

export default function AirdropDetailPage({ params }: { params: { slug: string } }) {
  const airdrop = getAirdropBySlug(params.slug)

  if (!airdrop) {
    return (
      <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
        <main className="container mx-auto px-4 py-8 flex-1 flex items-center justify-center">
          <h1 className="text-3xl font-bold text-gray-900">Airdrop not found.</h1>
        </main>
      </div>
    )
  }

  const status = getAirdropStatus(airdrop.startDate, airdrop.endDate)

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
      <main className="container mx-auto px-4 py-8 flex-1">
        <article className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-4 mb-6">
            {airdrop.imageUrl && (
              <Image
                src={airdrop.imageUrl || "/placeholder.svg"}
                alt={`${airdrop.name} logo`}
                width={80}
                height={80}
                className="rounded-full object-cover"
              />
            )}
            <h1 className="text-4xl font-bold text-gray-900">{airdrop.name}</h1>
          </div>

          <p className="text-lg text-gray-700 mb-8">{airdrop.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-4 rounded-md">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Airdrop Details</h2>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-gray-600">Start Date:</p>
                    <p className="font-medium text-gray-900">{formatDate(airdrop.startDate)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-gray-600">End Date:</p>
                    <p className="font-medium text-gray-900">{formatDate(airdrop.endDate)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Gift className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-gray-600">Reward:</p>
                    <p className="font-medium text-gray-900">{airdrop.rewardAmount}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-md">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Additional Information</h2>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-gray-600">Status:</p>
                    <p className="font-medium text-gray-900 capitalize">{status}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <LinkIcon className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-gray-600">Official Link:</p>
                    <Link
                      href={airdrop.officialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-primary hover:underline"
                    >
                      Visit Site
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200 text-blue-800">
            <h3 className="text-xl font-semibold mb-3">How to Participate</h3>
            <p className="mb-2">
              To participate in the {airdrop.name} airdrop, visit their{" "}
              <Link
                href={airdrop.officialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-700 hover:underline"
              >
                official website
              </Link>{" "}
              and follow the instructions provided. Make sure to do your own research (DYOR) before participating.
            </p>
            <Button>
              <Link href={airdrop.officialLink} target="_blank" rel="noopener noreferrer">
                Join Airdrop
              </Link>
            </Button>
          </div>
        </article>
      </main>
    </div>
  )
}
