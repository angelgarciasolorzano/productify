import { DataTypes, Model, Sequelize } from "sequelize";
import { ICategoriaDb, ICategoriaCreationDb } from "@categoria/infrastructure";

/**
 * Modelo sequelize que representa la tabla `categorias` en la base de datos.
 * 
 * Este modelo define la estrutura de la tabla, sus campos y restricciones.
 * 
 * @class CategoriaSequelize
 * @extends Model
 * @implements ICategoriaDb
*/
export class CategoriaSequelize extends Model<ICategoriaDb, ICategoriaCreationDb> implements ICategoriaDb {

  public readonly id_categoria!: number;
  public nombre_categoria!: string;
  public descripcion_categoria?: string | undefined;
  public estado_categoria!: "activo" | "inactivo";

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  /**
   * Inicializa el modelo en sequelize y define la estructura de la tabla `categorias`.
   * 
   * @param {Sequelize} sequelize Instancia de sequelize
  */
  public static initialize(sequelize: Sequelize) {
    CategoriaSequelize.init({
      id_categoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
  
      nombre_categoria: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
  
      descripcion_categoria: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
  
      estado_categoria: {
        type: DataTypes.ENUM("activo", "inactivo"),
        allowNull: false,
        defaultValue: "activo"
      },

      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      }
    }, {
      sequelize,
      modelName: "Categoria",
      tableName: "categorias",
      timestamps: true
    });
  };
};