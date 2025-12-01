import { object, string } from "yup";

import { CategorieFieldSchema } from "./categorieField.schema.js";

export const CategorieUpdateSchema = object({
  name: CategorieFieldSchema.nameCategorieField(),
  description: CategorieFieldSchema.descriptionCategorieField(true),
  status: string()
    .required("El estado es requerido")
    .oneOf(["activo", "inactivo"], "El estado debe ser activo o inactivo"),
});
