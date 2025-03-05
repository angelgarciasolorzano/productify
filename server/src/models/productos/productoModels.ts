import { DataTypes, Model, Optional, Sequelize } from "sequelize";
import { sequelize } from "@/config";
import { Categoria } from "./";
import { Usuario } from "../usuarios";

interface ProductoAtributos {
  id_producto: number;
  nombre_producto: string;
  descripcion_producto?: string;
  precio_compra: number;
  precio_venta: number;
  stock_producto: number;
  fecha_vencimiento_producto?: Date;
  imagen_producto?: string;
  estado_producto: "activo" | "inactivo";
  id_categoria_fk?: number;
  id_usuario_fk: number;
  createdAt?: Date;
  updatedAt?: Date;
};

interface ProductoCreationAtributos extends Optional<ProductoAtributos, "id_producto"> {};

class Producto extends Model<ProductoAtributos, ProductoCreationAtributos> 
  implements ProductoAtributos {

  public readonly id_producto!: number;
  public nombre_producto!: string;
  public descripcion_producto?: string;
  public precio_compra!: number;
  public precio_venta!: number;
  public stock_producto!: number;
  public fecha_vencimiento_producto?: Date;
  public imagen_producto?: string;
  public estado_producto!: "activo" | "inactivo";
  public id_categoria_fk?: number;
  public id_usuario_fk!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static iniatilize(sequelize: Sequelize) {
    Producto.init({
      id_producto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
  
      nombre_producto: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
  
      descripcion_producto: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
  
      precio_compra: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
  
      precio_venta: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
  
      stock_producto: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
  
      fecha_vencimiento_producto: {
        type: DataTypes.DATE,
        allowNull: true
      },
  
      imagen_producto: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
  
      estado_producto: {
        type: DataTypes.ENUM("activo", "inactivo"),
        allowNull: false,
        defaultValue: "activo"
      },
  
      id_categoria_fk: {
        type: DataTypes.INTEGER,
        references: {
          model: Categoria,
          key: "id_categoria"
        },
        allowNull: true
      },
  
      id_usuario_fk: {
        type: DataTypes.INTEGER,
        references: {
          model: Usuario,
          key: "id_usuario"
        },
        allowNull: false
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
      modelName: "Producto",
      tableName: "productos",
      timestamps: true
    });
  };
};

Producto.iniatilize(sequelize);

export default Producto;