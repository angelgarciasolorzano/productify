import { object } from "yup";

import { CategoryFieldSchema } from "./categoryField.schema.js";

export const CategoryCreateSchema = object({
  name: CategoryFieldSchema.nameCategoryField(),
  description: CategoryFieldSchema.descriptionCategoryField(),
});
