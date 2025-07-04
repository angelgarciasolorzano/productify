/**
 * Objeto de transferencia que representa los datos que se devuelven por la aplicacion.
 *
 * @interface CategoriaResponseDto
*/
interface CategoriaResponseDto {
  id: number;
  nombre: string;
  descripcion?: string;
  estado: "activo" | "inactivo";
  fechaCreacion?: Date;
  fechaModificacion?: Date;
};

export { CategoriaResponseDto };