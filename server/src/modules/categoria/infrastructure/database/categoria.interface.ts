/**
 * @interface CategoriaAttributes
 * @description Interfaz de los atributos de la tabla Categoria
*/
interface CategoriaAttributes {
  id_categoria: number;
  nombre_categoria: string;
  descripcion_categoria?: string;
  estado_categoria: "activo" | "inactivo";
  createdAt?: Date;
  updatedAt?: Date;
};

/**
 * @interface CategoriaCreationAttributes
 * @description Interfaz que define los atributos obligatorios para crear una nueva categoría
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