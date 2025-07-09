import Image from "next/image";
import Link from "next/link";
import { allArticles, formatDateForDisplay } from "@/lib/articles"; // Import allArticles and formatDateForDisplay
import { cn } from "@/lib/utils"; // Import cn utility
import { useHomeData } from "@/components/providers/HomeProvider";
import { PostDetail } from "@/@types/Posts";
import { format } from "date-fns";

interface HeroArticleCardProps {
  article: PostDetail; // Type based on an article from allArticles
  size: "large" | "small";
  overlayColors: { from: string; to: string };
  showMetadata?: boolean; // To show author, date, views for the middle large card
}

function HeroArticleCard({
  article,
  size,
  overlayColors,
  showMetadata = false,
}: HeroArticleCardProps) {
  const { title, slug, mainImage, categories, author, publishedAt } = article;

  const categoryDisplayName = categories?.[0]?.title || "Uncategorized";

  return (
    <Link
      href={`/articles/${slug.current}`}
      className="block group relative h-full w-full rounded-lg overflow-hidden"
    >
      <Image
        src={
          mainImage?.asset?.url ||
          "/placeholder.svg?height=400&width=600&query=news article background"
        }
        alt={mainImage?.alt || title}
        layout="fill"
        objectFit="cover"
        className="group-hover:scale-105 transition-transform duration-300"
      />
      <div
        className={cn(
          "absolute inset-0 flex flex-col justify-end p-6 text-white",
          `bg-gradient-to-t from-${overlayColors.from} to-${overlayColors.to}`
        )}
      >
        <div className="flex flex-wrap gap-2 mb-2">
          <span className="text-xs font-semibold uppercase px-2 py-1 border border-white rounded-sm">
            {categoryDisplayName}
          </span>
        </div>
        <h2
          className={cn(
            "font-bold leading-tight",
            size === "large"
              ? "text-3xl md:text-4xl mb-2"
              : "text-xl md:text-2xl mb-1"
          )}
        >
          {title}
        </h2>
        {showMetadata && (
          <div className="text-sm text-gray-200 flex items-center gap-3">
            <span>{author?.name || "Anonymous Author"}</span>
            <span className="w-1 h-1 bg-gray-400 rounded-full" />
            <span>{format(new Date(publishedAt), "dd MMM yyyy, HH:mm")}</span>
          </div>
        )}
      </div>
    </Link>
  );
}

export default function HeroSection() {
  const { articles } = useHomeData();
  const latestArticles = articles
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, 4);

  // Define specific articles for each slot
  const mainLeftArticle = latestArticles[0];
  const mainMiddleArticle = latestArticles[1];
  const topRightArticle = latestArticles[2];
  const bottomRightArticle = latestArticles[3];

  // Define gradient colors for each section to mimic the image
  const gradientColors = {
    left: { from: "red-700/50", to: "blue-700/50" }, // Red to Blue
    middle: { from: "green-700/50", to: "blue-700/50" }, // Green to Blue
    rightTop: { from: "purple-700/50", to: "blue-700/50" }, // Purple to Blue
    rightBottom: { from: "orange-700/50", to: "red-700/50" }, // Orange to Red
  };

  if (
    !mainLeftArticle ||
    !mainMiddleArticle ||
    !topRightArticle ||
    !bottomRightArticle
  ) {
    // Fallback if not enough articles are available
    return (
      <section className="mb-8">
        <div className="flex flex-col items-center justify-center h-64 bg-gray-100 rounded-lg">
          <p className="text-gray-600 text-lg">Loading hero articles...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-[600px] md:h-[450px] lg:h-[400px]">
        {/* Left Large Article */}
        <div className="col-span-1 h-full">
          <HeroArticleCard
            article={mainLeftArticle}
            size="large"
            overlayColors={gradientColors.left}
          />
        </div>

        {/* Middle Large Article */}
        <div className="col-span-1 h-full">
          <HeroArticleCard
            article={mainMiddleArticle}
            size="large"
            overlayColors={gradientColors.middle}
            showMetadata={true}
          />
        </div>

        {/* Right Stacked Articles */}
        <div className="col-span-1 grid grid-rows-2 gap-4 h-full">
          <div className="row-span-1 h-full">
            <HeroArticleCard
              article={topRightArticle}
              size="small"
              overlayColors={gradientColors.rightTop}
            />
          </div>
          <div className="row-span-1 h-full">
            <HeroArticleCard
              article={bottomRightArticle}
              size="small"
              overlayColors={gradientColors.rightBottom}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
