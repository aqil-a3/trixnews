import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  formatCurrency,
  formatDate,
  getApprovedPresales,
} from "@/lib/presales";
import { CalendarDays, DollarSign, Coins, TrendingUp } from "lucide-react";
import type { Metadata } from "next";

// Dynamic metadata for presale detail page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const presale = await getApprovedPresales();
  const selectedPresale = presale.find((pres) => pres.slug === slug);

  if (!selectedPresale) {
    return {
      title: "Presale Not Found - Trixnews.com",
      description: "The presale page you are looking for was not found.",
    };
  }

  const title = `${selectedPresale.name} Presale - Trixnews.com`;
  const description = `Full details about the ${selectedPresale.name} token presale: ${selectedPresale.description}. Starts on ${formatDate(selectedPresale.startDate)}, soft cap ${formatCurrency(selectedPresale.softCap)}.`;
  const keywords = [
    `${selectedPresale.name.toLowerCase()} presale`,
    `${selectedPresale.name.toLowerCase()} token`,
    "ico presale",
    "new token",
    "crypto investment",
    "Trixnews",
  ];

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `https://trixnews.com/ico-presale/${selectedPresale.slug}`,
      siteName: "Trixnews.com",
      images: [
        {
          url:
            selectedPresale.imageUrl ||
            `/placeholder.svg?height=630&width=1200&text=${selectedPresale.name} Presale`,
          width: 1200,
          height: 630,
          alt: `${selectedPresale.name} Presale`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        selectedPresale.imageUrl ||
          `/placeholder.svg?height=630&width=1200&text=${selectedPresale.name} Presale`,
      ],
    },
  };
}

export default async function PresaleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const presales = await getApprovedPresales();
  const presale = presales.find((pres) => pres.slug === slug);

  if (!presale) {
    return (
      <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
        <main className="container mx-auto px-4 py-8 flex-1 flex items-center justify-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Presale not found.
          </h1>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
      <main className="container mx-auto px-4 py-8 flex-1">
        <article className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-4 mb-6">
            {presale.imageUrl && (
              <Image
                src={presale.imageUrl || "/placeholder.svg"}
                alt={`${presale.name} logo`}
                width={80}
                height={80}
                className="rounded-full object-cover"
              />
            )}
            <h1 className="text-4xl font-bold text-gray-900">{presale.name}</h1>
          </div>

          <p className="text-lg text-gray-700 mb-8">{presale.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-4 rounded-md">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                Presale Details
              </h2>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-gray-600">Start Date:</p>
                    <p className="font-medium text-gray-900">
                      {formatDate(presale.startDate)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-gray-600">End Date:</p>
                    <p className="font-medium text-gray-900">
                      {formatDate(presale.endDate)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Coins className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-gray-600">Total Token Supply:</p>
                    <p className="font-medium text-gray-900">
                      {presale.tokenSupply.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-md">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                Funding Targets
              </h2>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-gray-600">Soft Cap:</p>
                    <p className="font-medium text-gray-900">
                      {formatCurrency(presale.softCap)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-gray-600">Hard Cap:</p>
                    <p className="font-medium text-gray-900">
                      {formatCurrency(presale.hardCap)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-gray-600">Status:</p>
                    <p className="font-medium text-gray-900 capitalize">
                      {presale.status}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Placeholder for more detailed content or participation link */}
          <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200 text-blue-800">
            <h3 className="text-xl font-semibold mb-3">
              How to Participate (Example)
            </h3>
            <p className="mb-2">
              To participate in the {presale.name} presale, visit their official
              website and follow the instructions provided. Make sure to do your
              own research (DYOR) before investing.
            </p>
            <Button>
              <Link href={presale.presaleSite} target="_blank" rel="noopener noreferrer">
                Visit Presale Site
              </Link>
            </Button>
          </div>
        </article>
      </main>
    </div>
  );
}
