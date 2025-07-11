import {
  Airdrop,
  Category,
  Guide,
  PostSummary,
  Prediction,
  Presale,
  Tag,
} from "@/@types/Posts";
import { sanityFetch } from "@/sanity/lib/client";
import {
  groqGetAllAirdrops,
  groqGetAllCategory,
  groqGetAllGuides,
  groqGetAllPost,
  groqGetAllPredictions,
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

export async function getAllAirDrops() {
  const result = await sanityFetch({
    query: groqGetAllAirdrops,
    revalidate: 0,
  });

  return result as Airdrop[];
}

export async function getAllGuides() {
  const result = await sanityFetch({
    query: groqGetAllGuides,
    revalidate: 0,
  });

  return result as Guide[];
}

export async function getAllPredictions() {
  const result = await sanityFetch({
    query: groqGetAllPredictions,
    revalidate: 0,
  });

  return result as Prediction[];
}