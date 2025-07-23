/**
 * Interfaz que representa los atributos de la tabla categorias.
 * 
 * @interface ICategoriaDb
*/
interface ICategoriaDb {
  id_categoria: number;
  nombre_categoria: string;
  descripcion_categoria?: string | null;
  estado_categoria: "activo" | "inactivo";
  createdAt: Date;
  updatedAt: Date;
};

/**
 * Interfaz que define los atributos obligatorios para crear una categoria.
 *
 * @interface ICategoriaCreationDb
*/
interface ICategoriaCreationDb extends Omit<Partial<ICategoriaDb>,
  "nombre_categoria"
> {
  nombre_categoria: string;
};

export { ICategoriaDb, ICategoriaCreationDb };