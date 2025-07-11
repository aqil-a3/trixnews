import { Category, PostDetail, PostSummary, Presale } from "@/@types/Posts";
import { SanityPresale } from "@/@types/Sanity";
import { sanityFetch } from "@/sanity/lib/client";
import {
  groqGetAllCategories,
  groqGetAllPost,
  groqGetAllPresales,
  groqGetPostByCategorySlug,
  groqGetPostBySlug,
  groqGetPresaleBySlug,
} from "@/sanity/lib/groq";
import { convertSanityPresale } from "./sanity-convert";

export async function getAllCategories(): Promise<Category[]> {
  try {
    const result = await sanityFetch({
      query: groqGetAllCategories,
    });
    return result as Category[];
  } catch (error) {
    console.error("Failed to fetch categories", error);
    return [];
  }
}

export async function getAllPost() {
  const result = await sanityFetch({
    query: groqGetAllPost,
  });

  return result as PostDetail[];
}

export async function getAllPresales() {
  const result = await sanityFetch({
    query: groqGetAllPresales,
    revalidate: 0,
  });

  return result as SanityPresale[];
}

export async function getCategoryDisplayName(slug: string): Promise<string> {
  let cachedCategories: Category[] = [];

  if (cachedCategories.length === 0) {
    cachedCategories = await getAllCategories();
  }

  const matched = cachedCategories.find(
    (cat) => cat.slug.current.toLowerCase() === slug.toLowerCase()
  );

  return (
    matched?.title ||
    slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
  );
}

export async function getPostBySlug(slug: string): Promise<PostDetail | null> {
  try {
    const result = await sanityFetch({
      query: groqGetPostBySlug,
      params: { slug },
    });

    return result;
  } catch (error) {
    console.error("Failed to fetch post by slug", error);
    return null;
  }
}

export async function getPostsByCategorySlug(
  slug: string
): Promise<PostDetail[]> {
  try {
    const result = await sanityFetch({
      query: groqGetPostByCategorySlug,
      params: { slug },
    });

    return result as PostDetail[];
  } catch (error) {
    console.error("Failed to fetch posts by category slug", error);
    return [];
  }
}

export async function getPresaleBySlug(slug: string) {
  const raw = await sanityFetch({
    query: groqGetPresaleBySlug,
    params: { slug },
  });

  const result = convertSanityPresale(raw);

  return result;
}