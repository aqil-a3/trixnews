import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const deleteUserSchema = z.object({
  email: z.email(),
});

export class DeleteAdminUserDto extends createZodDto(deleteUserSchema) {}
