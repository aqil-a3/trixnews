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
  readonly presaleSite: string;
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

export interface Airdrop {
  readonly _id: string;
  readonly _type: "airdrop";
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly startDate: string; // YYYY-MM-DD
  readonly endDate: string; // YYYY-MM-DD
  readonly rewardAmount: string; // e.g., "1000 ABC", "50 USD"
  readonly status: "pending" | "approved" | "rejected";
  readonly officialLink: string;
  readonly contactEmail: string;
  readonly mainImage?: {
    readonly _type: "image";
    readonly asset: {
      readonly _ref: string;
      readonly _type: "reference";
    };
    readonly alt?: string;
  };
  readonly slug: {
    readonly _type: "slug";
    readonly current: string;
  };
}

export interface DBAirdrop {
  id: string
  name: string
  description: string
  start_date: string
  end_date: string
  reward_amount: string
  status: "pending" | "approved" | "rejected"
  official_link: string
  contact_email: string
  image_url?: string | null
  slug: string
}

export interface Guide {
  readonly _id: string;
  readonly _type: "guide";
  readonly title: string;
  readonly description: string;
  readonly slug: {
    readonly _type: "slug";
    readonly current: string;
  };
  readonly icon?: string; // e.g., "book-open", "lightbulb"
  readonly content: string; // HTML string
  readonly popularity?: number;
}

export interface Prediction {
  readonly _id: string;
  readonly _type: "prediction";
  readonly id: string;
  readonly title: string;
  readonly summary: string;
  readonly date: string; // YYYY-MM-DD
  readonly mainImage?: {
    readonly _type: "image";
    readonly asset: {
      readonly _ref: string;
      readonly _type: "reference";
    };
    readonly alt?: string;
  };
  readonly slug: {
    readonly _type: "slug";
    readonly current: string;
  };
  readonly author: string;
  readonly predictionContent: BlockContent;
  readonly status: "active" | "archived" | "pending";
  readonly isResolved?: boolean;
  readonly resolutionDate?: string;
  readonly actualOutcome?: string;
  readonly accuracyScore?: number;
  readonly contactEmail?: string;
}

export interface Web3Tool {
  readonly _id: string;
  readonly _type: "web3Tool";
  readonly name: string;
  readonly description: string;
  readonly slug: {
    readonly current: string;
  };
  readonly category: string;
  readonly officialLink: string;
  readonly supportedBlockchains?: string[];
  readonly keyFeatures?: string[];
  readonly mainImage?: {
    readonly _type: "image";
    readonly asset: {
      readonly _ref: string;
      readonly _type: "reference";
    };
    readonly alt?: string;
  };
}
