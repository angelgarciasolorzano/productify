/**
 * Interfaz que representa los atributos de la tabla categorias.
 * 
 * @interface Model
*/
interface Model {
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
 * @interface CreationModel
*/
interface CreationModel extends Omit<Partial<Model>,
  "nombre_categoria"
> {
  nombre_categoria: string;
};

export { Model, CreationModel };