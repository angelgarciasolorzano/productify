import { CategoriaDomain, CategoriaCreateDomain, CategoriaUpdateDomain } from "@/modules/categoria/domain";
import { CategoriaModel, CategoriaCreationModel } from "@/modules/categoria/infrastructure";

/**
 * Clase que mapea los objetos de dominio a los objetos de modelo y viceversa.
 * 
 * @class CategoriaMapper
*/
class CategoriaMapper {
  /**
   * Metodo que mapea un objeto de modelo a un objeto de dominio.
   * 
   * @param {CategoriaModel} model Objeto de modelo de Categoria.
   * @returns {CategoriaDomain} Objeto de la entidad de dominio Categoria.
   * @throws {Error} Si no se puede mapear el modelo a un objeto de dominio.
  */
  public static toDomain(model: CategoriaModel): CategoriaDomain {
    if (!model) throw new Error("No se puede mapear un modelo Categoria nulo a un objeto de dominio");

    return {
      id: model.id_categoria,
      nombre: model.nombre_categoria,
      descripcion: model.descripcion_categoria,
      estado: model.estado_categoria,
      createdAt: model.createdAt,
      updatedAt: model.updatedAt
    };
  };

  /**
   * Metodo que mapea un arreglo de objetos de modelo a un arreglo de objetos de dominio.
   * 
   * @param {CategoriaModel[]} model Arreglo de modelo de Categoria.
   * @returns {CategoriaDomain[]} Arreglo de objetos de dominio Categoria.
   * @throws {Error} Si no se puede mapear el modelo a un objeto de dominio.
  */
  public static toDomainList(model: CategoriaModel[]): CategoriaDomain[] {
    if (!model) throw new Error("No se puede mapear un array de modelos Categoria nulo a un array de dominio");

    if (model.length === 0) return [];

    return model.map(categoriaModel => this.toDomain(categoriaModel));
  };

  /**
   * Metodo que mapea un objeto de dominio a un objeto de modelo.
   * 
   * @param {CategoriaDomain} domain Entidad de dominio Categoria.
   * @returns {CategoriaModel} Objeto de modelo de Categoria.
   * @throws {Error} Si no se puede mapear el modelo a un objeto de dominio.
  */
  public static toPersistence(domain: CategoriaDomain): CategoriaModel {
    if (!domain) throw new Error("No se puede mapear un objeto de dominio nulo a un modelo Categoria");

    return {
      id_categoria: domain.id,
      nombre_categoria: domain.nombre,
      descripcion_categoria: domain.descripcion,
      estado_categoria: domain.estado,
      createdAt: domain.createdAt,
      updatedAt: domain.updatedAt
    };
  };

  /**
   * Metodo que mapea un objeto de dominio de creacion a un objeto de modelo.
   * 
   * @param {CategoriaCreateDomain} domain Objeto de dominio de creacion Categoria.
   * @returns {CategoriaCreationModel} Objeto de modelo de Categoria.
   * @throws {Error} Si no se puede mapear el objeto de dominio a un objeto de modelo.
  */
  public static toPersistenceFromCreate(domain: CategoriaCreateDomain): CategoriaCreationModel {
    if (!domain) throw new Error("No se puede mapear un objeto de dominio nulo a un modelo Categoria");

    return {
      nombre_categoria: domain.nombre,
      descripcion_categoria: domain.descripcion,
    };
  };

  /**
   * Metodo que mapea un objeto de dominio de actualizacion a un objeto de modelo.
   * 
   * @param {CategoriaUpdateDomain} domain Objeto de dominio de actualizacion Categoria.
   * @returns {Partial<CategoriaModel>} Objeto de modelo de Categoria.
   * @throws {Error} Si no se puede mapear el objeto de dominio a un objeto de modelo.
  */
  public static toPersistenceFromUpdate(domain: CategoriaUpdateDomain): Partial<CategoriaModel> {
    if (!domain) throw new Error("No se puede mapear un objeto de dominio nulo a un modelo Categoria");

    return {
      nombre_categoria: domain.nombre,
      descripcion_categoria: domain.descripcion,
      estado_categoria: domain.estado
    };
  };
};

export default CategoriaMapper;