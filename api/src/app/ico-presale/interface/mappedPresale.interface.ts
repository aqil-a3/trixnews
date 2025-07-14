export interface PresaleMapped {
  _id: string;
  _type: 'presale';
  id: string;
  name: string;
  description?: string;
  startDate: string;
  endDate: string;
  softCap: number;
  hardCap: number;
  tokenSupply: number;
  status?: string;
  contactEmail?: string;
  presaleSite?: string;
  image?: {
    _type: 'image';
    asset: {
      _type: 'reference';
      _ref: string;
    };
  };
  slug?: {
    _type: 'slug';
    current: string;
  };
}
