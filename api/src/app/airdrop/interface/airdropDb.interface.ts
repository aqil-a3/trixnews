export interface AirdropFromDb {
  id: string;
  name: string;
  description: string;
  start_date: string;
  end_date: string;
  reward_amount: string;
  status: 'pending' | 'approved' | 'rejected' | string;
  official_link: string;
  contact_email: string;
  image_url: string | null;
  slug: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}
