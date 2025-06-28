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

export default CategoriaAttributes;