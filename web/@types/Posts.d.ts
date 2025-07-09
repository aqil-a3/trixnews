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
