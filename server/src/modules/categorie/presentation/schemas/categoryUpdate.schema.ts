import { object, string } from "yup";

import { CategoryFieldSchema } from "./categoryField.schema.js";

export const CategoryUpdateSchema = object({
  name: CategoryFieldSchema.nameCategoryField(),
  description: CategoryFieldSchema.descriptionCategoryField(true),
  status: string()
    .required("El estado es requerido")
    .oneOf(["activo", "inactivo"], "El estado debe ser activo o inactivo"),
});
