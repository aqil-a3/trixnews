import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { PresaleFormDTO } from './dto/presale-form-schema.dto';
import { getSupabaseClient } from '../../services/supabase/supabase.client';
import { slugify } from '../../utils/slugify';
import { PresaleMapped } from './interface/mappedPresale.interface';
import { PresaleFromDb } from './interface/dbPresale.interface';

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

  mapPresaleDbToClient(payload: PresaleFormDTO): PresaleMapped {
    return {
      _id: payload.id,
      _type: 'presale',
      id: payload.id,
      name: payload.name,
      description: payload.description,
      startDate: payload.start_date,
      endDate: payload.end_date,
      softCap: Number(payload.soft_cap),
      hardCap: Number(payload.hard_cap),
      tokenSupply: Number(payload.token_supply),
      status: payload.status,
      contactEmail: payload.contact_email,
      presaleSite: payload.presale_site,
      image: payload.image_url
        ? {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: payload.image_url,
            },
          }
        : undefined,
      slug: payload.slug
        ? {
            _type: 'slug',
            current: payload.slug,
          }
        : undefined,
    };
  }

  async createNewPresale(presale: PresaleFormDTO) {
    const payload = this.mapPresaleFormToDb(presale);

    if (new Date(payload.start_date) >= new Date(payload.end_date)) {
      throw new Error('Start date must be earlier than end date.');
    }

    const { data: existingSlug, error: slugError } = await this.supabase
      .from('presales')
      .select('*')
      .eq('slug', payload.slug)
      .limit(1)
      .is('deleted_at', null)
      .maybeSingle();

    if (slugError) throw new Error(slugError.message);

    if (existingSlug) {
      const existingData: PresaleFromDb = existingSlug;
      if (!existingData.deleted_at) {
        throw new ConflictException(
          'Slug already exists. Try a different token name.',
        );
      }
      const { error: updateError } = await this.supabase
        .from('presales')
        .update({ ...payload, deleted_at: null })
        .eq('slug', payload.slug);

      if (updateError) throw new BadRequestException(updateError.message);
      return {
        message: 'Presale submitted successfully.',
      };
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
      .order('created_at', { ascending: false })
      .is('deleted_at', null);
    if (error) throw new Error(error.message);
    const dbData: PresaleFromDb[] = data;

    return (dbData || []).map((item) => this.mapPresaleDbToClient(item));
  }

  async getPresalesForSanity() {
    const { data, error } = await this.supabase
      .from('presales')
      .select('*')
      .order('created_at', { ascending: false })
      .is('deleted_at', null);

    if (error) throw new Error(error.message);
    const dbData: PresaleFromDb[] = data;

    const mapped = dbData.map((item) => this.mapPresaleDbToClient(item));

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
    const dbData: PresaleFromDb = data;

    const mapped = this.mapPresaleDbToClient(dbData);

    return mapped;
  }

  async softDeletePresale(id: string) {
    const { error } = await this.supabase
      .from('presales')
      .update({ deleted_at: new Date().toISOString() })
      .eq('id', id);

    if (error) throw new Error(error.message);

    return { message: 'Data succesfully deleted!' };
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
