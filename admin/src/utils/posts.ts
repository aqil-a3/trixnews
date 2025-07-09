import { PostSummary } from "@/@types/Posts";
import { sanityFetch } from "@/sanity/lib/client";
import { groqGetAllPost } from "@/sanity/lib/groq";

export async function getAllPost() {
  const result = await sanityFetch({
    query: groqGetAllPost,
    revalidate: 0,
  });

  return result as PostSummary[];
}
