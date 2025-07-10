import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { getSupabaseClient } from '../supabase/supabase.client';
import { CreateAdminUserDto } from 'src/dto/create-admin-user.dto';

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

  async createNewUserAdmin(payload: CreateAdminUserDto): Promise<AdminUser> {
    const { data: existingUser, error: findError } = await this.supabase
      .from('admin_users')
      .select('id')
      .eq('email', payload.email)
      .maybeSingle();

    if (findError) {
      throw new Error(`Failed to validate email: ${findError.message}`);
    }

    if (existingUser) {
      throw new BadRequestException('Email is already in use');
    }

    // 2. Lanjutkan insert jika belum ada
    const { data, error } = await this.supabase
      .from('admin_users')
      .insert([
        {
          ...payload,
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
