import { object, string } from "yup";
import { CategoriaFieldSchema } from "@categoria/presentation";

export const CategoriaUpdateSchema = object({
  nombreCategoria: CategoriaFieldSchema.nombreCategoriaField(),
  descripcionCategoria: CategoriaFieldSchema.descripcionCategoriaField(true),

  estadoCategoria: string()
  .required("El estado es requerido")
  .oneOf(["activo", "inactivo"], "El estado debe ser activo o inactivo")
});