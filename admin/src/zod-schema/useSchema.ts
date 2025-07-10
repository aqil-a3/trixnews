import z from "zod";

export const userSchema = z.object({
  email: z.email("Invalid email"),
  name: z.string("Invalid Name").min(1, { error: "Name cannot empty" }),
  avatar_url: z.union([z.literal(""), z.url()]),
  role: z.string(),
  is_active: z.boolean(),
});

export type FormValues = z.infer<typeof userSchema>;