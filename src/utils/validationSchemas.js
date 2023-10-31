import { z } from "zod";

export const loginSchema = z.object({
  studentId: z
    .string()
    .length(10, "La matricula debe tener 10 dígitos")
    .regex(/^\d+$/, "La matricula debe ser un número"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

export const registerUserSchema = z
  .object({
    fullName: z.string(),
    studentId: z.string().length(10, "La matricula debe tener 10 dígitos"),
    email: z.string().email("El correo debe ser válido"),
    password: z
      .string()
      .min(6, "La contraseña debe tener al menos 6 caracteres"),
    confirmPassword: z
      .string()
      .min(6, "La contraseña debe tener al menos 6 caracteres"),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Las contraseñas no coinciden",
        path: ["confirmPassword"],
      });
    }
  });
