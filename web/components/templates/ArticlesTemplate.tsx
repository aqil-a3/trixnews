import ArticleCard from "../molecules/Cards/ArticleCard";
import { PostDetail } from "@/@types/Posts";

export default function ArticlesTemplate({
  articles,
}: {
  articles: PostDetail[];
}) {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
      <main className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">All Articles</h1>

        {articles.length === 0 ? (
          <p className="text-gray-500 text-center text-lg">
            No articles found.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
