import { presaleFormSchema } from "@/zod-schema/presaleFormSchema";
import axios, { isAxiosError } from "axios";
import { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import z from "zod";

export const createHandler: SubmitHandler<
  z.infer<typeof presaleFormSchema>
> = async (formData) => {
  try {
    const { data } = await axios.post(`/api/presales`, formData);

    toast.success(data.message);
  } catch (error) {
    if (isAxiosError(error)) {
      const data = error.response?.data;
      toast(data.message, { type: "error" });
    }
    console.error(error);
  }
};

export const updateHandler =
  (id: string): SubmitHandler<z.infer<typeof presaleFormSchema>> =>
  async (formData) => {
    try {
      const { data } = await axios.put(`/api/presales?id=${id}`, formData);

      toast.success(data.message);
    } catch (error) {
      if (isAxiosError(error)) {
        const data = error.response?.data;
        toast(data.message, { type: "error" });
      }
      console.error(error);
    }
  };
