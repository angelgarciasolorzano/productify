/**
 * Objeto de transferencia que representa los datos necesarios para crear una categoria.
 * 
 * Este DTO representa los datos minimos para registrar una categoria en el sistema.
 * 
 * @interface CategoriaCreateDto
*/
interface CategoriaCreateDto {
  nombreCategoria: string;
  descripcionCategoria?: string | null;
};

/**
 * Objeto de transferencia que representa los datos que pueden ser actualizados en una categoria.
 * 
 * Este DTO representa todos los datos que pueden ser actualizados en una categoria.
 *
 * @type CategoriaUpdateDto
*/
type CategoriaUpdateDto = CategoriaCreateDto & {
  estadoCategoria: "activo" | "inactivo";
};

export { CategoriaCreateDto, CategoriaUpdateDto };