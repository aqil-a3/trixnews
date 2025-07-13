    import { createClient, SupabaseClient } from '@supabase/supabase-js';

    export function getSupabaseClient(): SupabaseClient {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
        throw new Error('Supabase URL or KEY is not defined in environment');
    }

    return createClient(supabaseUrl, supabaseKey);
    }
