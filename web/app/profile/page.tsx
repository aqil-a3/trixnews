// app/profile/page.tsx
import Header from "@/components/header"
import Footer from "@/components/footer"
import { getUserSession } from "@/app/actions/auth"
import { redirect } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default async function ProfilePage() {
  const session = await getUserSession()

  if (!session) {
    redirect("/login") // Redirect to login if not authenticated
  }

  const user = session.user

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">User Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>User ID:</strong> {user.id}
            </p>
            <p>
              <strong>Created At:</strong> {new Date(user.created_at).toLocaleDateString()}
            </p>
            {/* You can add more user details here if available in your Supabase user metadata */}
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
