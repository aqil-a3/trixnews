import { create } from "zustand"
import { PostDetail } from "@/@types/Posts"

interface ArticleStore {
  articles: PostDetail[]
  setArticles: (articles: PostDetail[]) => void
  getArticleBySlug: (slug: string) => PostDetail | undefined
  addArticle: (article: PostDetail) => void
}

export const useArticleStore = create<ArticleStore>((set, get) => ({
  articles: [],
  setArticles: (articles) => set({ articles }),
  getArticleBySlug: (slug) =>
    get().articles.find((a) => a.slug.current === slug),
  addArticle: (article) => {
    const exists = get().articles.some((a) => a._id === article._id)
    if (!exists) {
      set((state) => ({
        articles: [...state.articles, article],
      }))
    }
  },
}))
