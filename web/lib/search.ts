import { allArticles, type Article } from "./articles"
import { allGuides, type Guide } from "./guides"

interface SearchResult {
  articles: Article[]
  guides: Guide[]
}

export function searchContent(query: string): SearchResult {
  const lowerCaseQuery = query.toLowerCase().trim()

  if (!lowerCaseQuery) {
    return { articles: [], guides: [] }
  }

  const filteredArticles = allArticles.filter(
    (article) =>
      article.title.toLowerCase().includes(lowerCaseQuery) ||
      article.summary.toLowerCase().includes(lowerCaseQuery) ||
      (article.content && article.content.toLowerCase().includes(lowerCaseQuery)) ||
      article.tags.some((tag) => tag.toLowerCase().includes(lowerCaseQuery)),
  )

  const filteredGuides = allGuides.filter(
    (guide) =>
      guide.title.toLowerCase().includes(lowerCaseQuery) ||
      guide.description.toLowerCase().includes(lowerCaseQuery) ||
      guide.content.toLowerCase().includes(lowerCaseQuery),
  )

  return {
    articles: filteredArticles,
    guides: filteredGuides,
  }
}
