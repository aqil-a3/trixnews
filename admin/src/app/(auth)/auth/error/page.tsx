"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function AuthErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const router = useRouter();

  useEffect(() => {
    if (error === "AccessDenied") {
      toast("Your account is forbidden to sign in!", { type: "error" });
    } else {
      toast("There is shomething wrong", { type: "error" });
    }

    router.replace("/login");
  }, [error, router]);

  return null;
}
