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
