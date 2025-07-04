import { DataTypes, Model, Sequelize } from "sequelize";
import { ICategoriaDb, ICategoriaCreationDb } from "@/modules/categoria/infrastructure";
import { sequelize } from "@/config";

/**
 * Modelo sequelize que representa la tabla `categorias` en la base de datos.
 * 
 * Este modelo define la estrutura de la tabla, sus campos y restricciones.
 * 
 * @class CategoriaModel
 * @extends Model
 * @implements ICategoriaDb
*/
class CategoriaModel extends Model<ICategoriaDb, ICategoriaCreationDb> implements ICategoriaDb {

  public readonly id_categoria!: number;
  public nombre_categoria!: string;
  public descripcion_categoria?: string | undefined;
  public estado_categoria!: "activo" | "inactivo";

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  /**
   * Inicializa el modelo en sequelize y define la estructura de la tabla `categorias`.
   * 
   * @param sequelize Instancia de sequelize
  */
  public static initialize(sequelize: Sequelize) {
    CategoriaModel.init({
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
      modelName: "CategoriaModel",
      tableName: "categorias",
      timestamps: true
    });
  };
};

CategoriaModel.initialize(sequelize);

export default CategoriaModel;