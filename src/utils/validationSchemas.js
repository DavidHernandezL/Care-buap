import { z } from 'zod';

export const loginSchema = z.object({
  studentId: z
    .number({
      invalid_type_error: 'La matricula es requerida',
    })
    .min(100000000, 'La matricula debe tener 9 dígitos'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

export const registerUserSchema = z
  .object({
    fullName: z
      .string()
      .min(3, 'El nombre debe tener al menos 3 caracteres')
      .regex(/^[a-zA-Z\s]*$/, {
        message: 'El nombre solo puede contener letras',
      })
      .refine((value) => {
        return value.split(' ').length >= 2;
      }, 'El nombre debe tener al menos 2 palabras'),
    studentId: z
      .number({
        invalid_type_error: 'La matricula es requerida',
      })
      .min(100000000, 'La matricula debe tener 9 dígitos'),
    email: z.string().email('El correo debe ser válido').includes('@alumno.buap.mx', {
      message: 'El correo debe ser institucional',
    }),
    password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
    confirmPassword: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmPassword'],
  });

export const editSchema = z.object({
  fullName: z.string(),
  img: z.object({
    name: z.string(),
  }),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

export const createPostSchema = z.object({
  title: z.string().min(3, 'El título debe tener al menos 3 caracteres'),
  description: z.string().min(3, 'El contenido debe tener al menos 3 caracteres'),
  mood: z.string({
    required_error: 'El estado de ánimo es requerido',
    invalid_type_error: 'El estado de ánimo es requerido',
  }),
});
