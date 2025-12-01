/**
 * Modelo de datos para una categoría en la base de datos.
 */
interface CategorieModel {
  id: number;
  name: string;
  description?: string | null;
  status: "activo" | "inactivo";
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Modelo para crear una nueva categoría.
 */
type CategorieCreationModel = Omit<CategorieModel, "id" | "status" | "createdAt" | "updatedAt">;

export { CategorieModel, CategorieCreationModel };
