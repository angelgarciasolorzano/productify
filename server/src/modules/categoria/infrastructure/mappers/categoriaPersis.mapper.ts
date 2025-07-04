import { Categoria, CategoriaCreateDomain, CategoriaUpdateDomain } from "@/modules/categoria/domain";
import { ICategoriaDb, ICategoriaCreationDb } from "@/modules/categoria/infrastructure";

/**
 * Clase que mapea los objetos de dominio a los objetos de modelo y viceversa.
 * 
 * @class CategoriaPersistenceMapper
*/
class CategoriaPersistenceMapper {
  /**
   * Metodo que mapea un objeto de modelo a un objeto de dominio.
   * 
   * @param {ICategoriaDb} model Objeto de modelo de la tabla categorias.
   * @returns {Categoria} Objeto de la entidad de dominio de categoria.
   * @throws {Error} Si no se puede mapear el modelo a un objeto de dominio.
  */
  public static toDomain(model: ICategoriaDb): Categoria {
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
   * @param {ICategoriaDb[]} model Arreglo de modelo de la tabla categorias.
   * @returns {Categoria[]} Arreglo de objetos de dominio de categoria.
   * @throws {Error} Si no se puede mapear el modelo a un objeto de dominio.
  */
  public static toDomainList(model: ICategoriaDb[]): Categoria[] {
    if (!model) throw new Error("No se puede mapear un array de modelos Categoria nulo a un array de dominio");

    if (model.length === 0) return [];

    return model.map(categoriaModel => this.toDomain(categoriaModel));
  };

  /**
   * Metodo que mapea un objeto de dominio a un objeto de modelo.
   * 
   * @param {Categoria} domain Objeto de dominio de categoria.
   * @returns {ICategoriaDb} Objeto de modelo de la tabla categorias.
   * @throws {Error} Si no se puede mapear el modelo a un objeto de dominio.
  */
  public static toPersistence(domain: Categoria): ICategoriaDb {
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
   * @param {CategoriaCreateDomain} domain Objeto de dominio de creacion de categoria.
   * @returns {ICategoriaCreationDb} Objeto de modelo de la tabla categorias.
   * @throws {Error} Si no se puede mapear el objeto de dominio a un objeto de modelo.
  */
  public static toPersistenceFromCreate(domain: CategoriaCreateDomain): ICategoriaCreationDb {
    if (!domain) throw new Error("No se puede mapear un objeto de dominio nulo a un modelo Categoria");

    return {
      nombre_categoria: domain.nombre,
      descripcion_categoria: domain.descripcion,
    };
  };

  /**
   * Metodo que mapea un objeto de dominio de actualizacion a un objeto de modelo.
   * 
   * @param {CategoriaUpdateDomain} domain Objeto de dominio de actualizacion de categoria.
   * @returns {Partial<ICategoriaDb>} Objeto de modelo de la tabla categorias.
   * @throws {Error} Si no se puede mapear el objeto de dominio a un objeto de modelo.
  */
  public static toPersistenceFromUpdate(domain: CategoriaUpdateDomain): Partial<ICategoriaDb> {
    if (!domain) throw new Error("No se puede mapear un objeto de dominio nulo a un modelo Categoria");

    return {
      nombre_categoria: domain.nombre,
      descripcion_categoria: domain.descripcion,
      estado_categoria: domain.estado
    };
  };
};

export default CategoriaPersistenceMapper;