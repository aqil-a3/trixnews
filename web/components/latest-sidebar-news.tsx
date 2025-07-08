import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowRight } from "lucide-react"
import { allArticles } from "@/lib/articles"
import { cn } from "@/lib/utils" // Import cn utility

interface LatestSidebarNewsProps {
  className?: string // Allow passing custom class names
}

export default function LatestSidebarNews({ className }: LatestSidebarNewsProps) {
  // Get the 8 latest articles for the sidebar to align its height with the main content
  const latestNews = [...allArticles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 8) // Changed from 9 to 8

  // Helper to simulate "X hours ago" for dummy data
  const getSimulatedTimeAgo = (index: number) => {
    const hours = 14 + index // Just to vary the hours slightly
    return `${hours} HOURS AGO`
  }

  return (
    <Card className={cn(className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-bold uppercase text-gray-700 flex items-center gap-2">
          LATEST CRYPTO NEWS
          <ArrowRight className="h-4 w-4" />
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-4">
          {latestNews.map((article, index) => (
            <div key={article.slug}>
              <Link href={`/articles/${article.slug}`} className="block group">
                <p className="text-xs text-gray-500 uppercase mb-1">{getSimulatedTimeAgo(index)}</p>
                <h3 className="text-base font-medium text-gray-900 leading-snug group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
              </Link>
              {index < latestNews.length - 1 && <Separator className="my-4" />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
