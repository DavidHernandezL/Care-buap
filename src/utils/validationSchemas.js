import { z } from "zod";

export const loginSchema = z.object({
  studentId: z
    .string()
    .length(10, "La matricula debe tener 10 dígitos")
    .regex(/^\d+$/, "La matricula debe ser un número"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});
