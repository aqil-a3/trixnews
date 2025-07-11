import { Category, PostSummary, Presale, Tag } from "@/@types/Posts";
import { sanityFetch } from "@/sanity/lib/client";
import {
  groqGetAllCategory,
  groqGetAllPost,
  groqGetAllPresales,
  groqGetAllTags,
} from "@/sanity/lib/groq";

export async function getAllPost() {
  const result = await sanityFetch({
    query: groqGetAllPost,
    revalidate: 0,
  });

  return result as PostSummary[];
}

export async function getAllCategory() {
  const result = await sanityFetch({
    query: groqGetAllCategory,
    revalidate: 0,
  });

  return result as Category[];
}

export async function getAllTags() {
  const result = await sanityFetch({
    query: groqGetAllTags,
    revalidate: 0,
  });

  return result as Tag[];
}

export async function getAllPresales() {
  const result = await sanityFetch({
    query: groqGetAllPresales,
    revalidate: 0,
  });

  return result as Presale[];
}
