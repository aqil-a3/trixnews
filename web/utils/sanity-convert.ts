import {
  Airdrop,
  EventRegistryNewsItem,
  Guide,
  PostDetail,
  Presale,
  Web3Tool,
} from "@/@types/Posts";
import {
  SanityAirdrop,
  SanityGuide,
  SanityPresale,
  SanityWeb3Tool,
} from "@/@types/Sanity";
import { Article } from "@/lib/articles";
import { urlFor } from "@/sanity/lib/image";
import { toHTML } from "@portabletext/to-html";
import { nanoid } from "nanoid";

export function convertSanityPresale(sanity: SanityPresale): Presale {
  return {
    id: sanity.id,
    presaleSite: sanity.presaleSite,
    name: sanity.name,
    description: sanity.description,
    startDate: sanity.startDate,
    endDate: sanity.endDate,
    softCap: sanity.softCap,
    hardCap: sanity.hardCap,
    tokenSupply: sanity.tokenSupply,
    status: sanity.status,
    contactEmail: sanity.contactEmail,
    imageUrl: sanity.image
      ? urlFor(sanity.image).width(64).height(64).url()
      : undefined,
    slug: sanity.slug?.current,
  };
}

export function convertSanityAirdrop(doc: SanityAirdrop): Airdrop {
  return {
    id: doc.id,
    name: doc.name,
    description: doc.description,
    startDate: doc.startDate,
    endDate: doc.endDate,
    rewardAmount: doc.rewardAmount,
    status: doc.status,
    officialLink: doc.officialLink,
    contactEmail: doc.contactEmail,
    imageUrl: doc.mainImage
      ? urlFor(doc.mainImage).width(64).height(64).url()
      : undefined,
    slug: doc.slug.current,
  };
}

export function convertSanityGuideToGuide(guide: SanityGuide): Guide {
  return {
    title: guide.title,
    description: guide.description,
    slug: guide.slug.current,
    icon: guide.icon,
    content: toHTML(guide.content), // Ubah Portable Text jadi HTML
    popularity: guide.popularity,
  };
}

export function convertSanityWeb3Tool(data: SanityWeb3Tool): Web3Tool {
  return {
    name: data.name,
    description: data.description,
    slug: data.slug.current,
    category: data.category,
    officialLink: data.officialLink,
    supportedBlockchains: data.supportedBlockchains,
    keyFeatures: data.keyFeatures,
    imageUrl: data.mainImage
      ? urlFor(data.mainImage).width(64).height(64).url()
      : undefined,
  };
}

export function convertPostToArticle(post: PostDetail): Article {
  return {
    title: post.title,
    summary: toHTML(post.body).slice(0, 200), // ambil ringkasan dari konten
    date: post.publishedAt,
    imageUrl: post.mainImage
      ? urlFor(post.mainImage).width(64).height(64).url()
      : "/placeholder.svg?text=No+Image",
    slug: post.slug.current,
    category:
      Array.isArray(post.categories) &&
      post.categories[0] &&
      "title" in post.categories[0]
        ? post.categories[0].title
        : "Uncategorized",
    tags: Array.isArray(post.categories)
      ? post.categories.map((cat) => ("title" in cat ? cat.title : ""))
      : [],
    author: post.author && "name" in post.author ? post.author.name : undefined,
    content: toHTML(post.body),
    popularity: 0, // default jika belum ada sistem penilaian popularitas
  };
}

export function mapEventRegistryToPostDetail(
  article: EventRegistryNewsItem
): PostDetail {
  return {
    _id: article.uri, // pakai URI sebagai ID unik
    title: article.title,
    slug: {
      current: article.title
        .toLowerCase()
        .replace(/[^\w\s-]/g, "") // hilangkan karakter spesial
        .trim()
        .replace(/\s+/g, "-"),
    },
    publishedAt: article.dateTimePub || article.dateTime,
    summary: article.body.slice(0, 160) + "...", // potong ringkasan
    author: {
      _id: article.authors?.[0]?.name || "anonymous-id",
      name: article.authors?.[0]?.name || "Anonymous",
    },
    categories: [
      {
        _id: "external-news",
        title: "External News",
      },
    ],
    mainImage: article.image
      ? {
          asset: {
            _id: "img-" + article.uri,
            url: article.image,
          },
          alt: article.title,
        }
      : undefined,
    body: [
      {
        _type: "block",
        _key: nanoid(),
        style: "normal",
        children: [
          {
            _type: "span",
            text: article.body,
            marks: [],
          },
        ],
      },
    ],
  };
}
