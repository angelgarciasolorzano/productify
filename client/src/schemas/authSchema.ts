import { z } from "zod";

export const loginFormSchema = z.object({
  correo_Usuario: z.string({
    required_error: "El correo es requerido"
  }).min(1, {
    message: "El correo es requerido"
  }),
  contra_Usuario: z.string({
    required_error: "La contraseña es requerida"
  }).min(1, {
    message: "La contraseña es requerida"
  })
});

export type LoginTypeSchema = z.infer<typeof loginFormSchema>;