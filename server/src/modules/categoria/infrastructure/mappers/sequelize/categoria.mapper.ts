import { Categoria } from "@/modules/categoria/domain";
import { CategoriaSequelize, CategoriaAttributes } from "@/modules/categoria/infrastructure";

/**
 * @class CategoriaMapper
 * @description Clase que mapea los objetos de dominio a los objetos de modelo Sequelize y viceversa
*/
class CategoriaMapper {
  /**
   * Metodo que mapea un objeto de modelo Sequelize a un objeto de dominio
   * @param model Instancia del modelo Sequelize de Categoria
   * @returns Objeto de la entidad de dominio Categoria
   * @throws Error si no se puede mapear el modelo a un objeto de dominio
  */
  public static toDomain(model: CategoriaSequelize): Categoria {
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
   * Metodo que mapea un arreglo de objetos de modelo Sequelize a un arreglo de objetos de dominio
   * @param categorias Arreglo de modelo Sequelize de Categoria
   * @returns Arreglo de objetos de dominio Categoria
   * @throws Error si no se puede mapear el modelo a un objeto de dominio
  */
  public static toDomainList(categorias: CategoriaSequelize[]): Categoria[] {
    if (!categorias) throw new Error("No se puede mapear un array de modelos Categoria nulo a un array de dominio");

    if (categorias.length === 0) return [];

    return categorias.map(categoria => this.toDomain(categoria));
  };

  /**
   * Metodo que mapea un objeto de dominio a un objeto de modelo Sequelize
   * @param categoria Entidad de dominio Categoria
   * @returns Objeto de modelo Sequelize de Categoria
   * @throws Error si no se puede mapear el modelo a un objeto de dominio
  */
  public static toPersistence(categoria: Categoria): CategoriaAttributes {
    if (!categoria) throw new Error("No se puede mapear un objeto de dominio nulo a un modelo Categoria");

    return {
      id_categoria: categoria.id,
      nombre_categoria: categoria.nombre,
      descripcion_categoria: categoria.descripcion,
      estado_categoria: categoria.estado,
    };
  };
};

export default CategoriaMapper;