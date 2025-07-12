import { object, string } from "yup";

export const CategoriaUpdateSchema = object({
  nombreCategoria: string()
  .required("El nombre es requerido")
  .min(3, "El nombre debe tener al menos 3 caracteres")
  .max(50, "El nombre debe tener 50 caracteres como máximo"),

  descripcionCategoria: string()
  .required("La descripción es requerida")
  .max(100, "La descripción debe tener 100 caracteres como máximo"),

  estadoCategoria: string()
  .required("El estado es requerido")
  .oneOf(["activo", "inactivo"], "El estado debe ser activo o inactivo")
});