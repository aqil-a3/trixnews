import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { PresaleFormDTO } from '../../dto/presale/presale-form-schema.dto';
import { getSupabaseClient } from '../../services/supabase/supabase.client';
import { slugify } from '../../utils/slugify';

@Injectable()
export class IcoPresaleService {
  private supabase = getSupabaseClient();

  mapPresaleFormToDb(payload: PresaleFormDTO) {
    return {
      name: payload.tokenName,
      description: payload.description,
      start_date: new Date(payload.presaleStartDate).toISOString(),
      end_date: new Date(payload.presaleEndDate).toISOString(),
      soft_cap: payload.softCap,
      hard_cap: payload.hardCap,
      token_supply: payload.tokenSupply,
      status: payload.status ? payload.status : 'pending',
      contact_email: payload.businessEmail,
      presale_site: payload.presaleSite,
      slug: slugify(payload.tokenName),
    };
  }

  async createNewPresale(presale: PresaleFormDTO) {
    const payload = this.mapPresaleFormToDb(presale);

    if (new Date(payload.start_date) >= new Date(payload.end_date)) {
      throw new Error('Start date must be earlier than end date.');
    }

    const { data: existingSlug, error: slugError } = await this.supabase
      .from('presales')
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
      .from('presales')
      .insert(payload)
      .select('*')
      .maybeSingle();

    if (insertError) throw new BadRequestException(insertError.message);

    return {
      message: 'Presale submitted successfully.',
      data: inserted,
    };
  }

  async getApprovedPresalesForSanity() {
    const { data, error } = await this.supabase
      .from('presales')
      .select('*')
      .eq('status', 'approved')
      .order('created_at', { ascending: false });

    if (error) throw new Error(error.message);

    return (data || []).map((item) => ({
      _id: item.id,
      _type: 'presale',
      id: item.id,
      name: item.name,
      description: item.description,
      startDate: item.start_date,
      endDate: item.end_date,
      softCap: Number(item.soft_cap),
      hardCap: Number(item.hard_cap),
      tokenSupply: Number(item.token_supply),
      status: item.status,
      contactEmail: item.contact_email,
      presaleSite: item.presale_site,
      image: item.image_url
        ? {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: item.image_url,
            },
          }
        : undefined,
      slug: item.slug
        ? {
            _type: 'slug',
            current: item.slug,
          }
        : undefined,
    }));
  }

  async getPresalesForSanity() {
    const { data, error } = await this.supabase
      .from('presales')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw new Error(error.message);

    const mapped = data.map((item) => ({
      _id: item.id,
      _type: 'presale',
      id: item.id,
      name: item.name,
      description: item.description,
      startDate: item.start_date,
      endDate: item.end_date,
      softCap: Number(item.soft_cap),
      hardCap: Number(item.hard_cap),
      tokenSupply: Number(item.token_supply),
      status: item.status,
      contactEmail: item.contact_email,
      presaleSite: item.presale_site,
      image: item.image_url
        ? {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: item.image_url,
            },
          }
        : undefined,
      slug: item.slug
        ? {
            _type: 'slug',
            current: item.slug,
          }
        : undefined,
    }));

    return mapped;
  }

  async getPresaleForSanityById(id: string) {
    const { data, error } = await this.supabase
      .from('presales')
      .select('*')
      .eq('id', id)
      .maybeSingle();

    if (error) throw new Error(error.message);
    if (!data) throw new Error('Presale not found');

    const mapped = {
      _id: data.id,
      _type: 'presale',
      id: data.id,
      name: data.name,
      description: data.description,
      startDate: data.start_date,
      endDate: data.end_date,
      softCap: Number(data.soft_cap),
      hardCap: Number(data.hard_cap),
      tokenSupply: Number(data.token_supply),
      status: data.status,
      contactEmail: data.contact_email,
      presaleSite: data.presale_site,
      image: data.image_url
        ? {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: data.image_url,
            },
          }
        : undefined,
      slug: data.slug
        ? {
            _type: 'slug',
            current: data.slug,
          }
        : undefined,
    };

    return mapped;
  }

  async updatePresale(id: string, presale: PresaleFormDTO) {
    const payload = this.mapPresaleFormToDb(presale);

    if (new Date(payload.start_date) >= new Date(payload.end_date)) {
      throw new Error('Start date must be earlier than end date.');
    }

    const { data: existingSlug, error: slugError } = await this.supabase
      .from('presales')
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
      .from('presales')
      .update(payload)
      .eq('id', id)
      .select('*')
      .maybeSingle();

    if (updateError) {
      throw new BadRequestException(updateError.message);
    }

    return {
      message: 'Presale updated successfully.',
      data: updated,
    };
  }
}
