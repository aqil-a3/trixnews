import { PostDetail, PostSummary } from "@/@types/Posts";
import { groqGetAllPost, groqGetPostBySlug } from "@/sanity/lib/groq";
import { sanityFetch } from "@/sanity/lib/live";

export async function getAllPost() {
  const result = await sanityFetch({
    query: groqGetAllPost,
  });

  return result.data as PostSummary[];
}

export async function getPostBySlug(slug: string): Promise<PostDetail | null> {
  try {
    const result = await sanityFetch({
      query: groqGetPostBySlug,
      params: { slug },
    });

    return result.data;
  } catch (error) {
    console.error("Failed to fetch post by slug", error);
    return null;
  }
}
