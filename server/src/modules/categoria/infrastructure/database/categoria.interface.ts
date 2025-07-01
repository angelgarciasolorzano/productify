/**
 * Interfaz que representa los atributos de la entidad categorias.
 * 
 * @interface CategoriaAttributes
*/
interface CategoriaAttributes {
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
 * @interface CategoriaCreationAttributes
*/
interface CategoriaCreationAttributes extends Omit<Partial<CategoriaAttributes>,
  "nombre_categoria"
> {
  nombre_categoria: string;
};

export {
  CategoriaAttributes,
  CategoriaCreationAttributes
};