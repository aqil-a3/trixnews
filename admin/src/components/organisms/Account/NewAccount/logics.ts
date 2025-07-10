import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import axios, { isAxiosError } from "axios";
import { FormValues, userSchema } from "@/zod-schema/useSchema";
import { toast } from "react-toastify";

export function useFormLogics() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      email: "",
      name: "",
      avatar_url: "",
      role: "editor",
      is_active: true,
    },
  });

  async function onSubmit(formData: FormValues) {
    try {
      setIsLoading(true);

      const response = await axios.post("/api/account", formData);
      const { success, message, data } = response.data;

      if (success) {
        console.log("User created:", data);
        toast(message, { type: "success" });
      } else {
        console.error("Failed:", message);
        toast(message, { type: "error" });
      }
    } catch (error) {
      if (isAxiosError(error)) {
        const data = error.response?.data;
        const status = error.status;
        console.error("Axios error:", error.response?.data || error.message);

        if (status === 400) {
          toast(data.message, { type: "error" });
          return;
        }
        toast(error.message, { type: "error" });
      } else {
        console.error("Unknown error:", error);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return { form, onSubmit, isLoading };
}
