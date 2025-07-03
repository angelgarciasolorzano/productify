/**
 * Objeto de transferencia que representa los datos necesarios para crear una categoria.
 * 
 * Este DTO representa los datos minimos para registrar una categoria en el sistema.
 * 
 * @interface CreateDto
*/
interface CreateDto {
  nombreCategoria: string;
  descripcionCategoria?: string;
};

/**
 * Objeto de transferencia que representa los datos necesarios para actualizar una categoria.
 * 
 * Este DTO representa los datos minimos para actualizar una categoria en el sistema.
 *
 * @type UpdateDto
*/
type UpdateDto = Partial<CreateDto> & {
  estadoCategoria: "activo" | "inactivo";
};

export { CreateDto, UpdateDto };