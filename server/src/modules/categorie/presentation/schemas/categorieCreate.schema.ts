import { object } from "yup";
import { CategoriaFieldSchema } from "@categoria/presentation";

export const CategoriaCreateSchema = object({
  nombreCategoria: CategoriaFieldSchema.nombreCategoriaField(),
  descripcionCategoria: CategoriaFieldSchema.descripcionCategoriaField()
});