/**
 * @file categoria.dto.ts
 * @description Archivo que define la estructura de los datos para la gestion de categorias
 * @author Angel Noe Garcia Solorzano
 * @version 1.0
*/

/**
 * Objeto de transferencia que representa los datos necesarios para crear una categoria.
 * 
 * Este DTO representa los datos minimos para registrar una categoria en el sistema.
 * 
 * @interface CategoriaCreateDto
*/
interface CategoriaCreateDto {
  nombreCategoria: string;
  descripcionCategoria?: string;
};

/**
 * Objeto de transferencia que representa los datos necesarios para actualizar una categoria.
 * 
 * Este DTO representa los datos minimos para actualizar una categoria en el sistema.
 *
 * @type CategoriaUpdateDto
*/
type CategoriaUpdateDto = Partial<CategoriaCreateDto> & {
  estadoCategoria: "activo" | "inactivo";
};

export {
  CategoriaCreateDto,
  CategoriaUpdateDto
};