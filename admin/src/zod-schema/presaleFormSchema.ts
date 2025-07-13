import { z } from "zod";

export const presaleFormSchema = z.object({
  businessEmail: z.email().min(1),
  tokenName: z.string().min(1),
  description: z.string().min(1),
  status: z.string().min(1),
  tokenSupply: z.coerce.number().min(1),
  presaleStartDate: z.string(),
  presaleEndDate: z.string(),
  softCap: z.coerce.number().min(0),
  hardCap: z.coerce.number().min(0),
  presaleSite: z.url().min(1),
});

export type PresaleFormType = z.infer<typeof presaleFormSchema>;
