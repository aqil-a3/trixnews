import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
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
}
