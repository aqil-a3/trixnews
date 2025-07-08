// app/register/page.tsx
import Header from "@/components/header"
import Footer from "@/components/footer"
import AuthForm from "@/components/auth-form"
import { signUp } from "@/app/actions/auth"
import { redirect } from "next/navigation"
import { getUserSession } from "@/app/actions/auth" // Import getUserSession

export default async function RegisterPage() {
  const session = await getUserSession()

  // If user is already logged in, redirect to home
  if (session) {
    redirect("/")
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <AuthForm type="register" action={signUp} />
      </main>
      <Footer />
    </div>
  )
}
