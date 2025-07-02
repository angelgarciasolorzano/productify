import { CategoriaDomain, CategoriaCreateDomain, CategoriaUpdateDomain } from "@/modules/categoria/domain";
import { CategoriaSequelize, CategoriaAttributes, CategoriaCreationAttributes } from "@/modules/categoria/infrastructure";

/**
 * Clase que mapea los objetos de dominio a los objetos de modelo Sequelize y viceversa.
 * 
 * @class CategoriaMapper
*/
class CategoriaMapper {
  /**
   * Metodo que mapea un objeto de modelo Sequelize a un objeto de dominio.
   * 
   * @param {CategoriaSequelize} model Objeto de modelo Sequelize de Categoria.
   * @returns {CategoriaDomain} Objeto de la entidad de dominio Categoria.
   * @throws {Error} Si no se puede mapear el modelo a un objeto de dominio.
  */
  public static toDomain(model: CategoriaSequelize): CategoriaDomain {
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
   * Metodo que mapea un arreglo de objetos de modelo Sequelize a un arreglo de objetos de dominio.
   * 
   * @param {CategoriaSequelize[]} model Arreglo de modelo Sequelize de Categoria.
   * @returns {CategoriaDomain[]} Arreglo de objetos de dominio Categoria.
   * @throws {Error} Si no se puede mapear el modelo a un objeto de dominio.
  */
  public static toDomainList(model: CategoriaSequelize[]): CategoriaDomain[] {
    if (!model) throw new Error("No se puede mapear un array de modelos Categoria nulo a un array de dominio");

    if (model.length === 0) return [];

    return model.map(categoriaModel => this.toDomain(categoriaModel));
  };

  /**
   * Metodo que mapea un objeto de dominio a un objeto de modelo Sequelize.
   * 
   * @param {CategoriaDomain} domain Entidad de dominio Categoria.
   * @returns {CategoriaAttributes} Objeto de modelo Sequelize de Categoria.
   * @throws {Error} Si no se puede mapear el modelo a un objeto de dominio.
  */
  public static toPersistence(domain: CategoriaDomain): CategoriaAttributes {
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
   * Metodo que mapea un objeto de dominio de creacion a un objeto de modelo Sequelize.
   * 
   * @param {CategoriaCreateDomain} domain Objeto de dominio de creacion Categoria.
   * @returns {CategoriaCreationAttributes} Objeto de modelo Sequelize de Categoria.
   * @throws {Error} Si no se puede mapear el objeto de dominio a un objeto de modelo.
  */
  public static toPersistenceFromCreate(domain: CategoriaCreateDomain): CategoriaCreationAttributes {
    if (!domain) throw new Error("No se puede mapear un objeto de dominio nulo a un modelo Categoria");

    return {
      nombre_categoria: domain.nombre,
      descripcion_categoria: domain.descripcion,
    };
  };

  /**
   * Metodo que mapea un objeto de dominio de actualizacion a un objeto de modelo Sequelize.
   * 
   * @param {CategoriaUpdateDomain} domain Objeto de dominio de actualizacion Categoria.
   * @returns {Partial<CategoriaAttributes>} Objeto de modelo Sequelize.
   * @throws {Error} Si no se puede mapear el objeto de dominio a un objeto de modelo.
  */
  public static toPersistenceFromUpdate(domain: CategoriaUpdateDomain): Partial<CategoriaAttributes> {
    if (!domain) throw new Error("No se puede mapear un objeto de dominio nulo a un modelo Categoria");

    return {
      nombre_categoria: domain.nombre,
      descripcion_categoria: domain.descripcion,
      estado_categoria: domain.estado
    };
  };
};

export default CategoriaMapper;