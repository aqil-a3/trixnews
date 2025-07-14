import { getCryptoNews, isImageUrlValid } from "@/lib/NewsData/getApiNews";
import { mapEventRegistryToPostDetail } from "./sanity-convert";
import { PostDetail } from "@/@types/Posts";
import { getAllPost } from "./sanity-posts";

export async function getAllArticles(): Promise<PostDetail[]> {
  const [
    sanityArticles,
    // apiArticlesRaw
  ] = await Promise.all([
    getAllPost(),
    // getCryptoNews(),
  ]);

  // const mapped = apiArticlesRaw.map(mapEventRegistryToPostDetail);

  // const validities = await Promise.all(
  //   mapped.map((a) => isImageUrlValid(a.mainImage?.asset.url || ""))
  // );

  // const apiArticles = mapped.filter((_, i) => validities[i]);

  const combined = [
    ...sanityArticles,
    // ...apiArticles
  ];

  const seen = new Set();
  const unique = combined.filter((a) => {
    const slug = a.slug.current;
    if (seen.has(slug)) return false;
    seen.add(slug);
    return true;
  });

  unique.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return unique;
}
