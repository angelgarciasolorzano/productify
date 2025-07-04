/**
 * Interfaz que representa la entidad de dominio de categoria.
 * 
 * @interface Categoria
*/
interface Categoria {
  id: number;
  nombre: string;
  descripcion?: string;
  estado: "activo" | "inactivo";
  createdAt: Date;
  updatedAt: Date;
};

/**
 * Interfaz que representa la entidad de dominio de creación de categoria.
 * 
 * @interface CategoriaCreateDomain
*/
type CategoriaCreateDomain = Omit<Categoria, "id" | "estado" | "createdAt" | "updatedAt">;

/**
 * Interfaz que representa la entidad de dominio de actualización de categoria.
 * 
 * @interface CategoriaUpdateDomain
*/
type CategoriaUpdateDomain = Partial<Omit<Categoria, "id" | "createdAt" | "updatedAt">>;

export { Categoria, CategoriaCreateDomain, CategoriaUpdateDomain };