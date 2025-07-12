export default function ArticleCardSkeleton() {
  return (
    <div className="animate-pulse rounded-lg border bg-gray-100 p-4 space-y-4">
      <div className="h-40 bg-gray-300 rounded-md w-full" />
      <div className="h-5 bg-gray-300 rounded w-3/4" />
      <div className="h-4 bg-gray-300 rounded w-1/2" />
    </div>
  );
}
