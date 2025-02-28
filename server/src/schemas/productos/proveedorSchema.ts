import { object, string, InferType } from "yup";

export const ProveedorSchema = object({
  nombre_proveedor: string()
  .required("El nombre es requerido")
  .min(3, "El nombre debe tener al menos 3 caracteres")
  .max(30, "El nombre debe tener 30 caracteres como máximo"),

  email_proveedor: string()
  .required("El email es requerido")
  .email("El email no es valido")
  .max(30, "El email debe tener 30 caracteres como máximo"),

  telefono_proveedor: string()
  .required("El telefono es requerido")
  .min(8, "El telefono debe tener al menos 8 caracteres")
  .max(15, "El telefono debe tener 15 caracteres como máximo"),

  direccion_proveedor: string()
  .max(100, "La dirección debe tener 100 caracteres como máximo")
  .optional(),

  estado_proveedor: string()
  .oneOf(["activo", "inactivo"], '"El estado debe ser "activo" o "inactivo"')
  .default("activo")
});

export type ProveedorType = InferType<typeof ProveedorSchema>;