import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Invalid email provided",
  }),
  password: z.string().min(1, {
    message: "Invalid password provided",
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Invalid email provided.",
  }),
  password: z.string().min(6, {
    message: "Invalid password provided. Minimum 6 characters.",
  }),
  name: z.string().min(1, {
    message: "Invalid name provided.",
  }),
});
