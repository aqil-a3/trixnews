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
