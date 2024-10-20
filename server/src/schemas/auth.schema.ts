import { object, string, InferType } from "yup";

export const LoginSchema = object({
  correo_Usuario: string()
    .required("El correo es requerido"),
  contra_Usuario: string()
    .required("La contraseña es requerida")
});

export type LoginType = InferType<typeof LoginSchema>;