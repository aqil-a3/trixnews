import { createZodDto } from 'nestjs-zod';
import z from 'zod';

export const userSchema = z.object({
  email: z.email('Invalid email'),
  name: z.string().min(1, { message: 'Name cannot be empty' }),
  avatar_url: z.union([z.literal(''), z.url()]),
  role: z.string(),
  is_active: z.boolean(),
});

export class CreateAdminUserDto extends createZodDto(userSchema) {}
