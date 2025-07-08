import Image from "next/image"
import Link from "next/link"
import { formatDateForDisplay } from "@/lib/articles"

interface ArticleCardProps {
  title: string
  summary: string
  date: string
  imageUrl: string
  slug: string
}

export default function ArticleCard({ title, summary, date, imageUrl, slug }: ArticleCardProps) {
  return (
    <Link href={`/articles/${slug}`} className="block group">
      <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow flex flex-col h-full">
        <div className="relative aspect-video w-full">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4 flex flex-col justify-between flex-grow min-h-[160px]">
          {" "}
          {/* Added flex-grow and min-h */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-gray-600 mb-3 line-clamp-3">{summary}</p> {/* Kept line-clamp-3 */}
          </div>
          <p className="text-xs text-gray-500 mt-auto">{formatDateForDisplay(date)}</p>{" "}
          {/* mt-auto pushes date to bottom */}
        </div>
      </div>
    </Link>
  )
}
