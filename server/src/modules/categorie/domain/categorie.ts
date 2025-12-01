/**
 * Entidad de dominio para categoría.
 *
 * Representa una categoría completa en el negocio.
 */
interface Categorie {
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
type CategorieCreate = Omit<Categorie, "id" | "status" | "createdAt" | "updatedAt">;

/**
 * Datos para actualizar una categoría.
 *
 * Excluye campos inmutables.
 */
type CategorieUpdate = Omit<Categorie, "id" | "createdAt" | "updatedAt">;

export { Categorie, CategorieCreate, CategorieUpdate };
