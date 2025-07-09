// "use client"
// import { useState, useMemo } from "react"
// import Header from "@/components/layouts/Header/header"
// import Footer from "@/components/layouts/Footer"
// import ArticleCard from "@/components/molecules/Cards/ArticleCard"
// import { getArticlesByTagSlug, getTagDisplayName } from "@/lib/articles"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// export default function TagPageClient({ params }: { params: { tagSlug: string } }) {
//   const initialArticles = useMemo(() => getArticlesByTagSlug(params.tagSlug), [params.tagSlug])
//   const tagName = getTagDisplayName(params.tagSlug)

//   const [sortOrder, setSortOrder] = useState<"latest" | "oldest" | "popularity">("latest")

//   const sortedArticles = useMemo(() => {
//     const sorted = [...initialArticles] // Create a shallow copy to avoid mutating original array

//     if (sortOrder === "latest") {
//       sorted.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
//     } else if (sortOrder === "oldest") {
//       sorted.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
//     } else if (sortOrder === "popularity") {
//       sorted.sort((a, b) => b.popularity - a.popularity)
//     }
//     return sorted
//   }, [initialArticles, sortOrder])

//   return (
//     <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
//       <Header />
//       <main className="container mx-auto px-4 py-8 flex-1">
//         <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4 md:mb-0">Tag: {tagName}</h1>
//           <div className="flex items-center gap-2">
//             <span className="text-gray-700">Sort by:</span>
//             <Select
//               value={sortOrder}
//               onValueChange={(value: "latest" | "oldest" | "popularity") => setSortOrder(value)}
//             >
//               <SelectTrigger className="w-[180px]">
//                 <SelectValue placeholder="Select Order" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="latest">Latest</SelectItem>
//                 <SelectItem value="oldest">Oldest</SelectItem>
//                 <SelectItem value="popularity">Popular</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//         </div>

//         {sortedArticles.length === 0 ? (
//           <p className="text-gray-500 text-center text-lg">No articles found for this tag.</p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {sortedArticles.map((article, index) => (
//               <ArticleCard key={index} {...article} />
//             ))}
//           </div>
//         )}
//       </main>
//       <Footer />
//     </div>
//   )
// }
