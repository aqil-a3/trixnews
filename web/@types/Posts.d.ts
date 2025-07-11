import type { PortableTextBlock } from "sanity";

type BlockContent = PortableTextBlock[];

export interface Category {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description?: string;
}

export interface Post {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _type: "post";
  title: string;
  slug: {
    _type: "slug";
    current: string;
  };
  author:
    | {
        _type: "author";
        name: string;
      }
    | SanityReference;
  mainImage?: SanityImage;
  categories:
    | {
        _type: "category";
        title: string;
        // _id: string;
      }[]
    | SanityReference[];
  publishedAt: string;
  body: BlockContent;
}

export interface PostSummary {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
}

export interface PostDetail {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  summary: string;
  author: {
    _id: string;
    name: string;
  };
  categories: {
    _id: string;
    title: string;
  }[];
  mainImage?: {
    asset: {
      _id: string;
      url: string;
    };
    alt?: string;
  };
  body: BlockContent;
}

export interface Presale {
  id: string
  name: string
  description: string
  startDate: string
  endDate: string
  softCap: number 
  hardCap: number 
  tokenSupply: number
  status: "pending" | "approved" | "rejected"
  contactEmail: string 
  imageUrl?: string
  slug?: string
}

export interface RelatedPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  mainImage?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  categories?: {
    _id: string;
    title: string;
  }[];
}

export interface SanityReference {
  _ref: string
  _type: string
}

export interface SanityImage {
  asset: {
    _ref: string
    _type: string
    url?: string
  }
  alt?: string
}

export interface Airdrop {
  id: string
  name: string
  description: string
  startDate: string // YYYY-MM-DD
  endDate: string // YYYY-MM-DD
  rewardAmount: string // e.g., "1000 ABC", "50 USD"
  status: "pending" | "approved" | "rejected"
  officialLink: string // Link to official airdrop page/announcement
  contactEmail: string // For internal use, not displayed
  imageUrl?: string // Optional: for token logo
  slug: string // Unique identifier for the airdrop URL
}