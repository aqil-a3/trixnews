import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const airdropSchema = z.object({
  contactEmail: z.email(),
  name: z.string().min(1),
  description: z.string().min(1),
  rewardAmount: z.string().min(1),
  officialLink: z.url().min(1),
  startDate: z.string(),
  endDate: z.string(),
});

export class AirdropFormDTO extends createZodDto(airdropSchema) {}
