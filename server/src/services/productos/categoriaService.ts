import { Categoria } from "@/models/productos";
import { CategoriaType } from "@/schemas/productos";
import { ICategoriaRepository } from "@/repositories/categorias";
import { NotFoundError, DatosError } from "@/errors";

/**
 * @interface InterfaceCategoriaService
 * @description Interfaz para definir los métodos de la clase CategoriaService
*/
export interface InterfaceCategoriaService {
  /**
   * @method getCategorias
   * @description Obtiene una lista de todas las categorías existentes.
   * @returns {Promise<Categoria[]>} Una promesa que resuelve con una lista (array) de objetos Categoria
   * @throws {NotFoundError} Si no se encuentran categorías
   * @example
   * import { CategoriaService } from "@/services/productos";
   * 
   * const categorias = await CategoriaService.getCategorias();
   * console.log(categorias);
  */
  getCategorias(): Promise<Categoria[]>;

  /**
   * @method getCategoriaId
   * @description Obtiene una categoría por su id.
   * @param {number} id_Categoria El id de la categoría
   * @returns {Promise<Categoria>} Una promesa que resuelve con el objeto Categoria
   * @throws {NotFoundError} Si no se encuentra la categoría
   * @example
   * import { CategoriaService } from "@/services/productos";
   * 
   * const categoria = await CategoriaService.getCategoriaId(1);
   * if (categoria) console.log(categoria.nombre_categoria);
  */
  getCategoriaId(id_Categoria: Categoria["id_categoria"]): Promise<Categoria>;

  /**
   * @method createCategoria
   * @description Crea una nueva categoría.
   * @param {CategoriaType} data Datos del nuevo registro
   * @returns {Promise<Categoria>} Una promesa que resuelve con el objeto Categoria creado
   * @throws {NotFoundError} Si no se pudo crear la categoría
   * @example
   * import { CategoriaService } from "@/services/productos";
   * 
   * const categoria = await CategoriaService.createCategoria({
   *   nombre_categoria: "Nueva categoria",
   *   descripcion_categoria: "Descripción de la nueva categoria",
   *   estado_categoria: true //Opcional, por defecto es true
   * });
   * 
   * console.log(categoria);
  */
  createCategoria(data: CategoriaType): Promise<Categoria>;

  /**
   * @method updateCategoria
   * @description Actualiza una categoría existente.
   * @param {number} id_Categoria El id de la categoría
   * @param {CategoriaType} data Datos del registro a actualizar
   * @returns {Promise<Categoria>} Una promesa que resuelve con el objeto Categoria actualizado
   * @throws {NotFoundError} Si no se encuentra la categoría
   * @example
   * import { CategoriaService } from "@/services/productos";
   * 
   * const categoria = await CategoriaService.updateCategoria(1, {
   *   nombre_categoria: "Nuevo nombre",
   *   descripcion_categoria: "Nueva descripción",
   *   estado_categoria: false
   * });
   * 
   * console.log(categoria);
  */
  updateCategoria(id_Categoria: Categoria["id_categoria"], data: CategoriaType): Promise<Categoria>;
};

/**
 * Clase que encapsula la logica de negocio para las operaciones Categoria CRUD
 * @class CategoriaService
 * @description Se encarga de recibir los datos de la categoría desde el controlador y mandarlos al repositorio para su manipulación
 * @implements InterfaceCategoriaService
*/
export class CategoriaService implements InterfaceCategoriaService {
  constructor(private categoriaRepository: ICategoriaRepository) {};

  private validateCategoriaId(id_Categoria: Categoria["id_categoria"]): void {
    if (!id_Categoria || id_Categoria < 1 || isNaN(id_Categoria)) {
      throw new DatosError("El id de la categoria no es valido");
    };
  };

  public async getCategorias(): Promise<Categoria[]> {
    const categorias = await this.categoriaRepository.getCategorias();

    if (!categorias || categorias.length === 0) {
      throw new NotFoundError("No se encontraron categorias");
    };

    return categorias;
  };

  public async getCategoriaId(id_Categoria: Categoria["id_categoria"]): Promise<Categoria> {
    this.validateCategoriaId(id_Categoria);

    const categoria = await this.categoriaRepository.getCategoriaId(id_Categoria);

    if (!categoria) throw new NotFoundError("No se encontro la categoria");

    return categoria;
  };

  public async createCategoria(data: CategoriaType): Promise<Categoria> {
    const categoriaExiste = await this.categoriaRepository.getCategoriaNombre(data.nombre_categoria);

    if (categoriaExiste) throw new DatosError("La categoria ya existe");

    const categoria = await this.categoriaRepository.createCategoria(data);

    if (!categoria) throw new NotFoundError("No se pudo crear la categoria");

    return categoria;
  };

  public async updateCategoria(id_Categoria: Categoria["id_categoria"], data: CategoriaType): Promise<Categoria> {
    this.validateCategoriaId(id_Categoria);

    const categoriaExiste = await this.categoriaRepository.getCategoriaId(id_Categoria);

    if (!categoriaExiste) throw new NotFoundError("La categotia no existe");

    const hasNoChanges = Object.keys(data).every(key => {
      const typedKey = key as keyof CategoriaType;
      return categoriaExiste[typedKey] === data[typedKey];
    });

    if (hasNoChanges) throw new DatosError("No hay cambios en los datos proporcionados");

    const categoria = await this.categoriaRepository.updateCategoria(categoriaExiste, data);

    if (!categoria) throw new NotFoundError("No se pudo actualizar la categoria");

    return categoria;
  };
};