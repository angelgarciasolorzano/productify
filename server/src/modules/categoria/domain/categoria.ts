/**
 * Interfaz que representa la entidad de dominio de una categoría.
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

export default Categoria;