/**
 * @file categoriaResponse.dto.ts
 * @description Archivo que define la estructura de los datos de categoria devueltos por la capa service
 * @author Angel Garcia
 * @version 1.1
*/

/**
 * Objeto de transferencia que representa los datos que se devuelven por la aplicacion.
 *
 * @interface CategoriaResponseDto
*/
interface CategoriaResponseDto {
  codigo: number;
  nombre: string;
  descripcion?: string;
  estado: "activo" | "inactivo";
  fechaCreacion?: Date;
  fechaModificacion?: Date;
};

export {
  CategoriaResponseDto
};