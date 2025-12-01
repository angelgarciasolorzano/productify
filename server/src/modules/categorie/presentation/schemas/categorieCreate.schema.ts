import { object } from "yup";

import { CategorieFieldSchema } from "./categorieField.schema.js";

export const CategorieCreateSchema = object({
  name: CategorieFieldSchema.nameCategorieField(),
  description: CategorieFieldSchema.descriptionCategorieField(),
});
