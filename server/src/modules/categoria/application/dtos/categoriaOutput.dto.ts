/**
 * Objeto de transferencia que representa los datos que se devuelven por la aplicacion.
 *
 * @interface CategoriaDto
*/
interface CategoriaDto {
  id: number;
  nombre: string;
  descripcion?: string | null;
  estado: "activo" | "inactivo";
  fechaCreacion?: Date;
  fechaModificacion?: Date;
};

export { CategoriaDto };