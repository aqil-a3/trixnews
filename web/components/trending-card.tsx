import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import type { Article } from "@/lib/articles"
import { Newspaper, BookOpen } from "lucide-react"
import { Guide } from "@/@types/Posts"
import { format } from "date-fns"

type TrendingItem = Article | Guide

interface TrendingCardProps {
  item: TrendingItem
}

export default function TrendingCard({ item }: TrendingCardProps) {
  const isArticle = (item as Article).date !== undefined

  const title = item.title
  const slug = item.slug
  const imageUrl = isArticle ? (item as Article).imageUrl : "/placeholder.svg?height=200&width=300&text=Guide"
  const linkPath = isArticle ? `/articles/${slug}` : `/guides/${slug}`
  const description = isArticle ? (item as Article).summary : (item as Guide).description
  const date = isArticle ? format(new Date((item as Article).date), "d MMM yyyy") : null

  return (
    <Link href={linkPath} className="block group">
      <Card className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow flex flex-col h-full">
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
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-gray-600 mb-3 line-clamp-3">{description}</p>
          </div>
          <div className="flex items-center justify-between text-xs text-gray-500 mt-auto">
            <span className="flex items-center gap-1">
              {isArticle ? <Newspaper className="h-3 w-3" /> : <BookOpen className="h-3 w-3" />}
              {isArticle ? "Article" : "Guide"}
            </span>
            {date && <span>{date}</span>}
          </div>
        </div>
      </Card>
    </Link>
  )
}
