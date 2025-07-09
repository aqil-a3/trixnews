import { PostSummary } from "@/@types/Posts";
import { groqGetAllPost } from "@/sanity/lib/groq";
import { sanityFetch } from "@/sanity/lib/live";

export async function getAllPost() {
  const result = await sanityFetch({
    query: groqGetAllPost,
    tags: ["posts"],
  });

  return result.data as PostSummary[];
}
