import { z } from "zod";

export const airdropFormSchema = z.object({
  contactEmail: z.email(),
  name: z.string().min(1),
  description: z.string().min(1),
  rewardAmount: z.string().min(1),
  officialLink: z.url().min(1),
  startDate: z.string(),
  endDate: z.string(),
  status: z.enum(["pending", "approved", "rejected"]),
});

export type AirdropFormType = z.infer<typeof airdropFormSchema>;
