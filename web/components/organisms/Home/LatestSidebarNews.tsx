import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCryptoNewsData } from "@/components/providers/CryptoNewsProvider";
import { formatDistanceToNow } from "date-fns";

interface LatestSidebarNewsProps {
  className?: string;
}

export default function LatestSidebarNews({ className }: LatestSidebarNewsProps) {
  const { allArticles: articles } = useCryptoNewsData();

  const latestNews = articles
    .slice() 
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, 8);

  return (
    <aside className="space-y-8">
      <Card className={cn(className)}>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-lg font-bold uppercase text-gray-700 flex items-center gap-2">
            LATEST CRYPTO NEWS
            <ArrowRight className="h-4 w-4" />
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-4">
            {latestNews.map((article, index) => {
              const publishedDate = new Date(article.publishedAt);
              const timeAgo = formatDistanceToNow(publishedDate, {
                addSuffix: true,
              });

              return (
                <div key={article.slug.current}>
                  <Link
                    href={`/articles/${article.slug.current}`}
                    className="block group"
                  >
                    <p className="text-xs text-gray-500 uppercase mb-1">
                      {timeAgo.toUpperCase()}
                    </p>
                    <h3 className="text-base font-medium text-gray-900 leading-snug group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                  </Link>
                  {index < latestNews.length - 1 && (
                    <Separator className="my-4" />
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </aside>
  );
}
