/**
 * Interfaz que representa la entidad de dominio de categoria.
 * 
 * @interface Categoria
*/
interface Categoria {
  id: number;
  nombre: string;
  descripcion?: string | null;
  estado: "activo" | "inactivo";
  createdAt: Date;
  updatedAt: Date;
};

/**
 * Interfaz que representa la entidad de dominio de creación de categoria.
 * 
 * @interface CategoriaCreate
*/
type CategoriaCreate = Omit<Categoria, "id" | "estado" | "createdAt" | "updatedAt">;

/**
 * Interfaz que representa la entidad de dominio de actualización de categoria.
 * 
 * @interface CategoriaUpdate
*/
type CategoriaUpdate = Omit<Categoria, "id" | "createdAt" | "updatedAt">;

export { Categoria, CategoriaCreate, CategoriaUpdate };