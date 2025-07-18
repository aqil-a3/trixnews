import { createZodDto } from 'nestjs-zod';
import z from 'zod';

const presaleFormSchema = z.object({
  businessEmail: z.email(),
  tokenName: z.string().min(1),
  description: z.string().min(1),
  tokenSupply: z.coerce.number().min(1),
  presaleStartDate: z.string(),
  presaleEndDate: z.string(),
  softCap: z.coerce.number().min(0),
  hardCap: z.coerce.number().min(0),
  presaleSite: z.url().min(1),
  status: z.string(),
});

export class PresaleFormDTO extends createZodDto(presaleFormSchema) {}
