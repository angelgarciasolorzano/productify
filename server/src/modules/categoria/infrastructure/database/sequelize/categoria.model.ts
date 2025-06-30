import { DataTypes, Model, Sequelize } from "sequelize";
import { CategoriaAttributes, CategoriaCreationAttributes } from "@/modules/categoria/infrastructure";
import { sequelize } from "@/config";

class Categoria extends Model<
  CategoriaAttributes, 
  CategoriaCreationAttributes
> implements CategoriaAttributes {

  public readonly id_categoria!: number;
  public nombre_categoria!: string;
  public descripcion_categoria?: string | undefined;
  public estado_categoria!: "activo" | "inactivo";

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static initialize(sequelize: Sequelize) {
    Categoria.init({
      id_categoria: {
        type: DataTypes.INTEGER,
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

Categoria.initialize(sequelize);

export default Categoria;