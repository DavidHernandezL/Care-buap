import z from 'zod';

export const loginSchema = z.object({
  studentId: z
    .number({
      invalid_type_error: 'La matrícula es requerida',
    })
    .min(100000000, 'La matrícula debe tener 9 dígitos'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

export const registerUserSchema = z
  .object({
    fullName: z
      .string()
      .min(3, 'El nombre debe tener al menos 3 caracteres')
      .regex(/^[a-zA-ZáéíóúüñÑ\s]+$/, {
        message: 'El nombre solo puede contener letras',
      })
      .refine((value) => {
        return value.split(' ').length >= 2;
      }, 'El nombre debe tener al menos 2 palabras'),
    studentId: z
      .number({
        invalid_type_error: 'La matrícula es requerida',
      })
      .min(100000000, 'La matrícula debe tener 9 dígitos'),
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

export const recoveryPasswordSchema = z.object({
  email: z
    .string({
      required_error: 'El correo es requerido',
      invalid_type_error: 'El correo es requerido',
    })
    .email('El correo debe ser válido')
    .includes('@alumno.buap.mx', {
      message: 'El correo debe ser institucional',
    }),
});

export const resetPasswordSchema = z
  .object({
    password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
    passwordConfirm: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
  })
  .refine((values) => values.password === values.passwordConfirm, {
    message: 'Las contraseñas no coinciden',
    path: ['passwordConfirm'],
  });

export const editExercisesSchema = z.object({
  name: z.string().min(3, 'El título debe tener al menos 3 caracteres').optional(),
  type: z.enum(['RESPIRATION', 'MOTIVATION']).optional(),
  description: z
    .string()
    .min(3, 'El contenido debe tener al menos 3 caracteres')
    .optional(),
  steps: z.array().nonempty('Debes agregar al menos un paso').optional(),
});

export const createExerciseSchema = z.object({
  name: z.string().min(3, 'El título debe tener al menos 3 caracteres'),
  type: z.enum(['RESPIRATION', 'MOTIVATION']),
  description: z.string().min(3, 'El contenido debe tener al menos 3 caracteres'),
  steps: z.array().nonempty('Debes agregar al menos un paso'),
});
