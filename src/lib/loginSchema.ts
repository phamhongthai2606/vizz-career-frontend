import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, "Vui lòng nhập email").email("Email không hợp lệ"),
  password: z.string(),
});

export type LoginSchema = z.infer<typeof loginSchema>;
