// components/auth-form.tsx
"use client"

import * as React from "react"
import { useActionState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

interface AuthFormProps {
  type: "login" | "register"
  action: (prevState: any, formData: FormData) => Promise<{ success: boolean; message: string } | void>
}

export default function AuthForm({ type, action }: AuthFormProps) {
  const [state, formAction, isPending] = useActionState(action, null)
  const { toast } = useToast()
  const formRef = React.useRef<HTMLFormElement>(null)

  React.useEffect(() => {
    if (state?.success) {
      toast({
        title: type === "login" ? "Login Successful!" : "Registration Successful!",
        description: state.message,
        variant: "default",
      })
      if (type === "register") {
        formRef.current?.reset() // Only reset for registration
      }
    } else if (state?.success === false) {
      toast({
        title: type === "login" ? "Login Failed" : "Registration Failed",
        description: state.message,
        variant: "destructive",
      })
    }
  }, [state, toast, type])

  return (
    <div className="w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">{type === "login" ? "Login" : "Register"}</h2>
      <form ref={formRef} action={formAction} className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required placeholder="name@email.com" />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" type="password" required placeholder="********" />
        </div>
        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending
            ? type === "login"
              ? "Logging in..."
              : "Registering..."
            : type === "login"
              ? "Login"
              : "Register"}
        </Button>
      </form>
      <div className="mt-6 text-center text-sm text-gray-600">
        {type === "login" ? (
          <>
            Don't have an account?{" "}
            <Link href="/register" className="text-primary hover:underline">
              Register here
            </Link>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Login here
            </Link>
          </>
        )}
      </div>
    </div>
  )
}
