// import TagPageClient from "./TagPageClient"
// import { getTagDisplayName } from "@/lib/articles"
// import type { Metadata } from "next" // Import Metadata type

// // Dynamic metadata for dynamic tag pages
// export async function generateMetadata({ params }: { params: { tagSlug: string } }): Promise<Metadata> {
//   const tagName = getTagDisplayName(params.tagSlug)
//   const title = `Tag: ${tagName} - Trixnews.com`
//   const description = `Explore all the latest news articles and analysis tagged with '${tagName}' on Trixnews.com. Find content about ${tagName.toLowerCase()} and related topics.`
//   const keywords = [
//     `tag ${tagName.toLowerCase()}`,
//     `news ${tagName.toLowerCase()}`,
//     `articles ${tagName.toLowerCase()}`,
//     "Trixnews",
//     "crypto",
//     "web3",
//     "blockchain",
//   ]

//   return {
//     title,
//     description,
//     keywords,
//     openGraph: {
//       title,
//       description,
//       url: `https://trixnews.com/tags/${params.tagSlug}`, // Replace with your actual domain URL
//       siteName: "Trixnews.com",
//       images: [
//         {
//           url: `/placeholder.svg?height=630&width=1200&text=Tag ${tagName} Trixnews`, // Open Graph image
//           width: 1200,
//           height: 630,
//           alt: `Tag ${tagName} Trixnews.com`,
//         },
//       ],
//       locale: "en_US",
//       type: "website",
//     },
//     twitter: {
//       card: "summary_large_image",
//       title,
//       description,
//       images: [`/placeholder.svg?height=630&width=1200&text=Tag ${tagName} Trixnews`], // Twitter Card image
//     },
//   }
// }

// export default function TagPage({ params }: { params: { tagSlug: string } }) {
//   return <TagPageClient params={params} />
// }
