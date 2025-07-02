/**
 * Interfaz que representa la entidad de dominio de una categoría.
 * 
 * @interface Categoria
*/
interface CategoriaDomain {
  id: number;
  nombre: string;
  descripcion?: string;
  estado: "activo" | "inactivo";
  createdAt: Date;
  updatedAt: Date;
};

/**
 * Interfaz que representa la entidad de dominio de creación de una categoría.
 * 
 * @interface CategoriaCreateDomain
*/
type CategoriaCreateDomain = Omit<CategoriaDomain, "id" | "estado" | "createdAt" | "updatedAt">;

/**
 * Interfaz que representa la entidad de dominio de actualización de una categoría.
 * 
 * @interface CategoriaUpdateDomain
*/
type CategoriaUpdateDomain = Partial<Omit<CategoriaDomain, "id" | "createdAt" | "updatedAt">>;

export {
  CategoriaDomain,
  CategoriaCreateDomain,
  CategoriaUpdateDomain
};