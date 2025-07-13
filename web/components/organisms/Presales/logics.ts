import { presaleFormSchema } from "@/lib/schemas/presaleSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export function usePresaleFormLogics() {
  const form = useForm<z.infer<typeof presaleFormSchema>>({
    resolver: zodResolver(presaleFormSchema),
    defaultValues: {
      businessEmail: "",
      tokenName: "",
      description: "",
      tokenSupply: 0,
      presaleStartDate: "",
      presaleEndDate: "",
      softCap: 0,
      presaleSite: "",
      hardCap: 0,
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof presaleFormSchema>> = async (
    formData
  ) => {
    try {
      const res = await fetch("/api/presale", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorBody = await res.json().catch(() => ({}));
        throw new Error(errorBody?.message || "Submission failed.");
      }

      toast.success("Presale submitted.", {
        description: "This will be reviewed by our admin.",
      });
    } catch (error: any) {
      console.error(error);
      toast.error(error?.error ?? "Submission failed", {
        description: error.message ?? "Something went wrong.",
      });
    }
  };

  return { form, onSubmit };
}
