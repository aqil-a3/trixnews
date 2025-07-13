import { BlockContent } from "./Posts";

export interface SanityPresale{
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

export interface SanityAirdrop {
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

export interface SanityGuide {
  readonly _id: string;
  readonly _type: "guide";
  readonly title: string;
  readonly description: string;
  readonly slug: {
    readonly _type: "slug";
    readonly current: string;
  };
  readonly icon?: string; 
  readonly content: BlockContent;
  readonly popularity?: number;
}

export interface SanityPrediction {
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

export interface SanityWeb3Tool {
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
