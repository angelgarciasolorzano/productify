/**
 * Modelo de datos para una categoría en la base de datos.
 */
interface CategoryModel {
  id: number;
  name: string;
  description?: string | null;
  status: "activo" | "inactivo";
  created_at: Date;
  updated_at: Date;
}

/**
 * Modelo para crear una nueva categoría.
 */
type CategoryCreationModel = Omit<CategoryModel, "id" | "status" | "created_at" | "updated_at">;

export { CategoryModel, CategoryCreationModel };
