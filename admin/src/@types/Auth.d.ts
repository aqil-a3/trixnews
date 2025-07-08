export interface AdminUser {
  id: string;
  email: string;
  name?: string;
  avatar_url?: string;
  role: string;
  is_active: boolean;
  created_at: string;
}
