/**
 * Entidad de dominio para categoría.
 *
 * Representa una categoría completa en el negocio.
 */
interface Category {
  id: number;
  name: string;
  description?: string | null;
  status: "activo" | "inactivo";
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Datos para crear una categoría.
 *
 * Excluye campos generados automáticamente.
 */
type CategoryCreate = Omit<Category, "id" | "status" | "createdAt" | "updatedAt">;

/**
 * Datos para actualizar una categoría.
 *
 * Excluye campos inmutables.
 */
type CategoryUpdate = Omit<Category, "id" | "createdAt" | "updatedAt">;

export { Category, CategoryCreate, CategoryUpdate };
