import type { PortableTextBlock } from "sanity";

type BlockContent = PortableTextBlock[];

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

export interface Category {
  readonly _id: string;
  readonly _type: "category";
  readonly title: string;
  readonly slug: {
    readonly _type: "slug";
    readonly current: string;
  };
  readonly description?: string;
}

export interface Tag {
  readonly _id: string;
  readonly _type: "tag";
  readonly title: string;
  readonly slug: {
    readonly _type: "slug";
    readonly current: string;
  };
  readonly description?: string;
}

export interface Presale {
  readonly _id: string;
  readonly _type: "presale";
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly startDate: string;
  readonly endDate: string;
  readonly softCap: number;
  readonly hardCap: number;
  readonly tokenSupply: number;
  readonly status: "pending" | "approved" | "rejected";
  readonly contactEmail: string;
  readonly image?: {
    readonly _type: "image";
    readonly asset: {
      readonly _ref: string;
      readonly _type: "reference";
    };
    readonly alt?: string;
  };
  readonly slug?: {
    readonly _type: "slug";
    readonly current: string;
  };
}
