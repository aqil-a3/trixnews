import { useCryptoNewsData } from "@/components/providers/CryptoNewsProvider";
import ArticleCard from "../../molecules/Cards/ArticleCard";
import ArticleCardSkeleton from "../../molecules/Cards/ArticleCardSkeleton";
import { useMemo, useEffect, useState } from "react";
import { mapEventRegistryToPostDetail } from "@/utils/sanity-convert";
import { PostDetail } from "@/@types/Posts";
import { isImageUrlValid } from "@/lib/NewsData/getApiNews";

export default function CryptoNews() {
  const { articles: raws } = useCryptoNewsData();
  const [filteredArticles, setFilteredArticles] = useState<PostDetail[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const filterArticles = async () => {
      const seenSlugs = new Set();

      const mappedArticles = raws.map((raw) =>
        mapEventRegistryToPostDetail(raw)
      );
      const articlesWithImages = mappedArticles.filter(
        (a) =>
          a.slug?.current &&
          !seenSlugs.has(a.slug.current) &&
          a.mainImage?.asset.url &&
          seenSlugs.add(a.slug.current)
      );

      const validities = await Promise.all(
        articlesWithImages.map((a) => isImageUrlValid(a.mainImage!.asset.url))
      );

      const result = articlesWithImages.filter((_, i) => validities[i]);

      setFilteredArticles(result);
      setLoading(false);
    };

    filterArticles();
  }, [raws]);

  const latestArticles = useMemo(
    () =>
      filteredArticles
        .sort(
          (a, b) =>
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime()
        )
        .slice(0, 6),
    [filteredArticles]
  );

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900 my-6">Crypto News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
              <ArticleCardSkeleton key={i} />
            ))
          : latestArticles.map((article) => (
              <ArticleCard key={article._id} article={article} />
            ))}
      </div>
    </div>
  );
}
