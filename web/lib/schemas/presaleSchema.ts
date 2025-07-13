import { z } from "zod";

export const presaleFormSchema = z.object({
  businessEmail: z.string().email(),
  tokenName: z.string().min(1),
  description: z.string().min(1),
  tokenSupply: z.coerce.number().min(1),
  presaleStartDate: z.string(),
  presaleEndDate: z.string(),
  softCap: z.coerce.number().min(0),
  hardCap: z.coerce.number().min(0),
  presaleSite: z.string().min(1).url(),
});