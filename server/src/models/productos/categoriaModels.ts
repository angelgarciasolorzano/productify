import { DataTypes, Model, Optional, Sequelize } from "sequelize";
import { sequelize } from "@/config";
import { Producto } from "./";

interface CategoriaAtributos {
  id_categoria: number;
  nombre_categoria: string;
  descripcion_categoria?: string;
  estado_categoria: "activo" | "inactivo";
  createdAt?: Date;
  updatedAt?: Date;
};

interface CategoriaAssociation {
  Producto: typeof Producto;
};

interface CategoriaCreationAtributos extends Optional<CategoriaAtributos, "id_categoria"> {};

class Categoria extends Model<CategoriaAtributos, CategoriaCreationAtributos> 
  implements CategoriaAtributos {

  public readonly id_categoria!: number;
  public nombre_categoria!: string;
  public descripcion_categoria?: string;
  public estado_categoria!: "activo" | "inactivo";

  public readonly createdAt?: Date;
  public readonly updatedAt?: Date;

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
        defaultValue: DataTypes.NOW
      },

      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      }
    }, {
      sequelize,
      modelName: "Categoria",
      tableName: "categorias",
      timestamps: true
    });
  };

  public static associate(models: CategoriaAssociation) {
    Categoria.hasMany(models.Producto, { foreignKey: "id_categoria_fk" });
  };
};

Categoria.initialize(sequelize);

export default Categoria;