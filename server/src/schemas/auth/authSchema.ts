import { object, string, InferType } from "yup";

export const LoginSchema = object({
  correo_usuario: string()
    .required("El correo es requerido"),
  contra_usuario: string()
    .required("La contraseña es requerida")
});

export type LoginType = InferType<typeof LoginSchema>;