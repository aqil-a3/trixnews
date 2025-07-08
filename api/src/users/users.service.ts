import { Injectable, UnauthorizedException } from '@nestjs/common';
import { getSupabaseClient } from '../supabase/supabase.client';

export interface AdminUser {
  id: string;
  email: string;
  name?: string;
  avatar_url?: string;
  role: string;
  is_active: boolean;
  created_at: string;
}

@Injectable()
export class UsersService {
  private supabase = getSupabaseClient();

  async getUserByEmail(email: string): Promise<AdminUser | null> {
    console.log('Pengambilan dimulai');
    const { data, error, status } = await this.supabase
      .from('admin_users')
      .select('*')
      .eq('email', email)
      .single();

    if (error) {
      if (status === 406 || status === 404) {
        return null;
      }

      throw new Error(error.message);
    }

    return data;
  }

  async validateAdmin(email: string): Promise<AdminUser> {
    const { data, error } = await this.supabase
      .from('admin_users')
      .select('*')
      .eq('email', email)
      .eq('is_active', true)
      .single();

    if (error || !data) {
      throw new UnauthorizedException('Unauthorized: You are not an admin');
    }

    return data;
  }

  async getAllAdminUsers(): Promise<AdminUser[]> {
    const result = await this.supabase.from('admin_users').select('*');

    const { data, error } = result;

    if (error) {
      throw new Error('Failed to fetch admin users');
    }

    return data;
  }

  async createAdmin(payload: {
    email: string;
    name?: string;
    avatar_url?: string;
    role?: string;
  }): Promise<AdminUser> {
    const { data, error } = await this.supabase
      .from('admin_users')
      .insert([
        {
          ...payload,
          is_active: true,
          role: payload.role || 'admin',
        },
      ])
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to create admin: ${error.message}`);
    }

    return data;
  }
}
