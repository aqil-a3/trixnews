export interface AirdropSanity {
  _id: string;
  _type: 'airdrop';
  id: string;
  name: string;
  description: string;
  startDate: string; // ISO string assumed
  endDate: string;   // ISO string assumed
  rewardAmount: number;
  status: string;
  contactEmail: string;
  officialLink: string;
  mainImage?: {
    _type: 'image';
    asset: {
      _type: 'reference';
      _ref: string;
    };
  };
  slug: {
    _type: 'slug';
    current: string;
  };
}
