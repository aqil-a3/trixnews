import ArticleCard from "../../molecules/Cards/ArticleCard";
import { allArticles } from "@/lib/articles";
import { useHomeData } from "../../providers/HomeProvider";

export default function InDepthAnalysisSection() {
  const { articles } = useHomeData();
  const analysisArticles = articles.filter(
    (article) =>
      article.categories[0].title === "Analysis" ||
      article.categories[0].title === "Opinion"
  );

  // Sort by date (latest first) and take the first 6 for display
  const displayedArticles = [...analysisArticles]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, 6); // Display 6 articles to fill two rows

  if (displayedArticles.length === 0) {
    return null; // Don't render section if no articles
  }

  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        In-Depth Analysis & Opinion
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedArticles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
    </section>
  );
}
