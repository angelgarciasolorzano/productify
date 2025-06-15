import { object, string, InferType } from "yup";

export const CategoriaSchema = object({
  nombre_categoria: string()
  .required("El nombre es requerido")
  .min(3, "El nombre debe tener al menos 3 caracteres")
  .max(50, "El nombre debe tener 50 caracteres como máximo"),

  descripcion_categoria: string()
  .max(100, "La descripción debe tener 100 caracteres como máximo")
  .optional(),

  estado_categoria: string()
  .oneOf(["activo", "inactivo"], "El estado debe ser activo o inactivo")
  .optional()
});

export type CategoriaType = InferType<typeof CategoriaSchema>;