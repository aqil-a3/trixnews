export interface PresaleFromDb {
  id: string;
  name: string;
  description: string | null;
  start_date: string;
  end_date: string;
  soft_cap: number;
  hard_cap: number;
  token_supply: number;
  status: string | null;
  contact_email: string | null;
  image_url: string | null;
  slug: string | null;
  created_at: string;
  presale_site: string | null;
  deleted_at: string | null;
}
