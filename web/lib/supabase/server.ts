// lib/supabase/server.ts
import { createServerClient, type CookieOptions } from "@supabase/ssr"
import { cookies } from "next/headers"

export async function createClient() {
  const cookieStore = await cookies()
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn(
      "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY. " +
        "Supabase client will be a dummy client. Please ensure these environment variables are set for full functionality.",
    )
    // Return a dummy client that doesn't perform actual operations
    return {
      auth: {
        getSession: async () => ({ data: { session: null }, error: null }),
        signInWithPassword: async () => ({
          data: { user: null, session: null },
          error: new Error("Supabase not configured"),
        }),
        signUp: async () => ({ data: { user: null, session: null }, error: new Error("Supabase not configured") }),
        signOut: async () => ({ error: new Error("Supabase not configured") }),
      },
      from: () => ({
        select: () => ({
          eq: () => ({
            single: async () => ({ data: null, error: new Error("Supabase not configured") }),
          }),
        }),
      }),
    } as ReturnType<typeof createServerClient> // Cast to match expected type
  }

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value
      },
      set(name: string, value: string, options: CookieOptions) {
        try {
          cookieStore.set({ name, value, ...options })
        } catch (error) {
          console.warn("Could not set cookie from server component:", error)
        }
      },
      remove(name: string, options: CookieOptions) {
        try {
          cookieStore.set({ name, value: "", ...options })
        } catch (error) {
          console.warn("Could not remove cookie from server component:", error)
        }
      },
    },
  })
}
