import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { AirdropFormDTO } from './dto/airdrop-form-schema.dto';
import { getSupabaseClient } from '../../services/supabase/supabase.client';
import { slugify } from '../../utils/slugify';
import { AirdropFromDb } from './interface/airdropDb.interface';
import { AirdropSanity } from './interface/airdropSanity.interface';
import { AirdropClient } from './interface/airdropClient.interface';

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

  mapAirdropDbToSanity(payload: AirdropFormDTO): AirdropSanity {
    return {
      _id: payload.id,
      _type: 'airdrop',
      id: payload.id,
      name: payload.name,
      description: payload.description,
      startDate: payload.start_date,
      endDate: payload.end_date,
      rewardAmount: payload.reward_amount,
      status: payload.status,
      contactEmail: payload.contact_email,
      officialLink: payload.official_link,
      mainImage: payload.image_url
        ? {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: payload.image_url,
            },
          }
        : undefined,
      slug: {
        _type: 'slug',
        current: payload.slug,
      },
    };
  }

  mapAirdropDbtoClient(payload: AirdropFormDTO): AirdropClient {
    return {
      id: payload.id,
      name: payload.name,
      description: payload.description,
      startDate: payload.start_date,
      endDate: payload.end_date,
      rewardAmount: payload.reward_amount,
      status: payload.status,
      officialLink: payload.official_link,
      contactEmail: payload.contact_email,
      imageUrl: payload.image_url,
      slug: payload.slug,
    };
  }

  async createNewAirdrop(airdrop: AirdropFormDTO) {
    const payload = this.mapAirdropFormToDb(airdrop);

    if (new Date(payload.start_date) >= new Date(payload.end_date)) {
      throw new Error('Start date must be earlier than end date.');
    }

    const { data: existingSlug, error: slugError } = await this.supabase
      .from('airdrops')
      .select('*')
      .eq('slug', payload.slug)
      .limit(1)
      .maybeSingle();

    if (slugError) throw new Error(slugError.message);
    if (existingSlug) {
      const existingData: AirdropFromDb = existingSlug;
      if (!existingData.deleted_at) {
        throw new ConflictException(
          'Slug already exists. Try a different token name.',
        );
      }

      const { error: updatedError } = await this.supabase
        .from('airdrops')
        .update({ ...payload, deleted_at: null })
        .eq('slug', existingData.slug);

      if (updatedError) throw new BadRequestException(updatedError.message);
      return {
        message: 'Airdrop submitted successfully.',
      };
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

  async getAirdropById(id: string) {
    const { data, error } = await this.supabase
      .from('airdrops')
      .select('*')
      .eq('id', id)
      .is('deleted_at', null)
      .maybeSingle();

    if (error) throw new Error(error.message);
    if (!data) throw new Error('Airdrop not found');
    const dbData: AirdropFromDb = data;

    const mapped = this.mapAirdropDbToSanity(dbData);

    return mapped;
  }

  async getAllAirdrops() {
    const { data } = await this.supabase
      .from('airdrops')
      .select('*')
      .is('deleted_at', null);

    return data;
  }

  async getApprovedAirdropsForSanity() {
    const { data, error } = await this.supabase
      .from('airdrops')
      .select('*')
      .eq('status', 'approved')
      .order('created_at', { ascending: false })
      .is('deleted_at', null);

    if (error) throw new Error(error.message);

    return (data || []).map((item) => this.mapAirdropDbtoClient(item));
  }

  async softDeletePresale(id: string) {
    const { error } = await this.supabase
      .from('airdrops')
      .update({ deleted_at: new Date().toISOString() })
      .eq('id', id);

    if (error) throw new Error(error.message);

    return { message: 'Data succesfully deleted!' };
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
}
