// app/actions/auth.ts
"use server"

import { createClient } from "@/lib/supabase/server"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

export async function signIn(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const supabase = createClient()

  // Check if Supabase client is a dummy client
  if (!supabase || !supabase.auth || typeof supabase.auth.signInWithPassword !== "function") {
    return { success: false, message: "Supabase is not configured. Please set environment variables." }
  }

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    console.error("Login error:", error.message)
    return { success: false, message: error.message }
  }

  return redirect("/") // Redirect to home on successful login
}

export async function signUp(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const supabase = createClient()

  // Check if Supabase client is a dummy client
  if (!supabase || !supabase.auth || typeof supabase.auth.signUp !== "function") {
    return { success: false, message: "Supabase is not configured. Please set environment variables." }
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${headers().get("origin")}/auth/callback`, // For email confirmation
    },
  })

  if (error) {
    console.error("Registration error:", error.message)
    return { success: false, message: error.message }
  }

  return { success: true, message: "Registration successful! Please check your email for verification." }
}

export async function signOut() {
  const supabase = createClient()

  // Check if Supabase client is a dummy client
  if (!supabase || !supabase.auth || typeof supabase.auth.signOut !== "function") {
    console.warn("Supabase not configured. Cannot sign out in preview.")
    return redirect("/login") // Still redirect to login
  }

  await supabase.auth.signOut()
  return redirect("/login") // Redirect to login page after logout
}

export async function getUserSession() {
  const supabase = createClient()

  // Check if Supabase client is a dummy client
  if (!supabase || !supabase.auth || typeof supabase.auth.getSession !== "function") {
    console.warn("Supabase not configured. Returning null session in preview.")
    return null
  }

  const {
    data: { session },
  } = await supabase.auth.getSession()
  return session
}
