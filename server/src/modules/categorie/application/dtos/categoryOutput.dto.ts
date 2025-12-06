/**
 * DTO de salida para categorías.
 *
 * Representa los datos de una categoría devueltos por la aplicación.
 */
interface CategoryDTO {
  id: number;
  name: string;
  description?: string | null;
  status: "activo" | "inactivo";
  createdAt?: Date;
  updatedAt?: Date;
}

export { CategoryDTO };
