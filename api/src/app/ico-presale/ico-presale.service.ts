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
      status: 'pending',
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
}
