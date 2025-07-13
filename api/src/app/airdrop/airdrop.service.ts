import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { AirdropFormDTO } from 'src/dto/airdrop/airdrop-form-schema.dto';
import { getSupabaseClient } from 'src/services/supabase/supabase.client';
import { slugify } from 'src/utils/slugify';

@Injectable()
export class AirdropService {
  private supabase = getSupabaseClient();

  mapAirdropFormToDb(payload: AirdropFormDTO) {
    return {
      name: payload.name,
      description: payload.description,
      start_date: new Date(payload.startDate).toISOString(),
      end_date: new Date(payload.endDate).toISOString(),
      reward_amount: payload.rewardAmount,
      status: payload.status ? payload.status : 'pending',
      official_link: payload.officialLink,
      contact_email: payload.contactEmail,
      slug: slugify(payload.name),
    };
  }

  async createNewAirdrop(airdrop: AirdropFormDTO) {
    const payload = this.mapAirdropFormToDb(airdrop);

    if (new Date(payload.start_date) >= new Date(payload.end_date)) {
      throw new Error('Start date must be earlier than end date.');
    }

    const { data: existingSlug, error: slugError } = await this.supabase
      .from('airdrops')
      .select('id')
      .eq('slug', payload.slug)
      .limit(1)
      .maybeSingle();

    if (slugError) throw new Error(slugError.message);
    if (existingSlug) {
      throw new ConflictException(
        'Slug already exists. Try a different token name.',
      );
    }

    const { data: inserted, error: insertError } = await this.supabase
      .from('airdrops')
      .insert(payload)
      .select('*')
      .maybeSingle();

    if (insertError) throw new BadRequestException(insertError.message);

    return {
      message: 'Airdrop submitted successfully.',
      data: inserted,
    };
  }

  async getAllAirdrops() {
    const { data } = await this.supabase.from('airdrops').select('*');

    return data;
  }

  async getAirdropById(id: string) {
    const { data, error } = await this.supabase
      .from('airdrops')
      .select('*')
      .eq('id', id)
      .maybeSingle();

    if (error) throw new Error(error.message);
    if (!data) throw new Error('Airdrop not found');

    const mapped = {
      _id: data.id,
      _type: 'airdrop',
      id: data.id,
      name: data.name,
      description: data.description,
      startDate: data.start_date,
      endDate: data.end_date,
      rewardAmount: data.reward_amount,
      status: data.status,
      contactEmail: data.contact_email,
      officialLink: data.official_link,
      mainImage: data.image_url
        ? {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: data.image_url,
            },
          }
        : undefined,
      slug: {
        _type: 'slug',
        current: data.slug,
      },
    };

    return mapped;
  }

  async updateAirdrop(id: string, airdrop: AirdropFormDTO) {
    const payload = this.mapAirdropFormToDb(airdrop);

    if (new Date(payload.start_date) >= new Date(payload.end_date)) {
      throw new Error('Start date must be earlier than end date.');
    }

    const { data: existingSlug, error: slugError } = await this.supabase
      .from('airdrops')
      .select('id')
      .eq('slug', payload.slug)
      .neq('id', id)
      .limit(1)
      .maybeSingle();

    if (slugError) throw new Error(slugError.message);

    if (existingSlug) {
      throw new ConflictException(
        'Slug already exists. Try a different token name.',
      );
    }

    const { data: updated, error: updateError } = await this.supabase
      .from('airdrops')
      .update(payload)
      .eq('id', id)
      .select('*')
      .maybeSingle();

    if (updateError) {
      throw new BadRequestException(updateError.message);
    }

    return {
      message: 'Airdrop updated successfully.',
      data: updated,
    };
  }

  async getApprovedAirdropsForSanity() {
    const { data, error } = await this.supabase
      .from('airdrops')
      .select('*')
      .eq('status', 'approved')
      .order('created_at', { ascending: false });

    if (error) throw new Error(error.message);

    return (data || []).map((item) => ({
      id: item.id,
      name: item.name,
      description: item.description,
      startDate: item.start_date,
      endDate: item.end_date,
      rewardAmount: item.reward_amount,
      status: item.status,
      officialLink: item.official_link,
      contactEmail: item.contact_email,
      imageUrl: item.image_url,
      slug: item.slug,
    }));
  }
}
