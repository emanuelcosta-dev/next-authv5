import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Invalid email provided",
  }),
  password: z.string().min(1, {
    message: "Invalid password provided",
  }),
});