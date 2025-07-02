/**
 * Interfaz que representa los atributos de la entidad categorias.
 * 
 * @interface CategoriaModel
*/
interface CategoriaModel {
  id_categoria: number;
  nombre_categoria: string;
  descripcion_categoria?: string;
  estado_categoria: "activo" | "inactivo";
  createdAt: Date;
  updatedAt: Date;
};

/**
 * Interfaz que define los atributos obligatorios para crear una categoria.
 *
 * @interface CategoriaCreationModel
*/
interface CategoriaCreationModel extends Omit<Partial<CategoriaModel>,
  "nombre_categoria"
> {
  nombre_categoria: string;
};

export {
  CategoriaModel,
  CategoriaCreationModel
};