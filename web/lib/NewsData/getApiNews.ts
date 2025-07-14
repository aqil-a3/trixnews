import { EventRegistryNewsItem } from "@/@types/Posts";

const API_URL = "https://eventregistry.org/api/v1/article/getArticles";

export async function getCryptoNews(): Promise<EventRegistryNewsItem[]> {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 60 * 60 * 6 },
    body: JSON.stringify({
      action: "getArticles",
      keyword: "crypto",
      dataType: ["news", "pr"],
      ignoreSourceGroupUri: "paywall/paywalled_sources",
      sourceLocationUri: [
        "http://en.wikipedia.org/wiki/United_States",
        "http://en.wikipedia.org/wiki/United_Kingdom",
      ],
      articlesSortBy: "date",
      articleBodyLen: -1,
      articlesSortByAsc: false,
      forceMaxDataTimeWindow: 7,
      resultType: "articles",
      apiKey: process.env.EVENT_REGISTRY_API_KEY,
    }),
  });

  if (!res.ok) throw new Error("Failed to fetch crypto news");

  const data = await res.json();
  return data.articles?.results || [];
}

export async function isImageUrlValid(url: string): Promise<boolean> {
  try {
    const res = await fetch(url, { method: "HEAD" });
    return res.ok && res.headers.get("Content-Type")?.startsWith("image") || false;
  } catch {
    return false;
  }
}
