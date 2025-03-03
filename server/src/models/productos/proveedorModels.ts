import { DataTypes, Model, Optional, Sequelize } from "sequelize";
import { sequelize } from "@/config";
import { Producto } from "./";

interface ProveedorAtributos {
  id_proveedor: number;
  nombre_proveedor: string;
  email_proveedor: string;
  telefono_proveedor: string;
  direccion_proveedor?: string;
  estado_proveedor: "activo" | "inactivo";
  createdAt?: Date;
  updatedAt?: Date;
};

interface ProveedorAssociation {
  Producto: typeof Producto;
};

interface ProveedorCreationAtributos extends Optional<ProveedorAtributos, "id_proveedor"> {};

class Proveedor extends Model<ProveedorAtributos, ProveedorCreationAtributos> 
  implements ProveedorAtributos {

  public readonly id_proveedor!: number;
  public nombre_proveedor!: string;
  public email_proveedor!: string;
  public telefono_proveedor!: string;
  public direccion_proveedor?: string;
  public estado_proveedor!: "activo" | "inactivo";

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static initialize(sequelize: Sequelize) {
    Proveedor.init({
      id_proveedor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
  
      nombre_proveedor: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
  
      email_proveedor: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
  
      telefono_proveedor: {
        type: DataTypes.STRING(15),
        allowNull: false,
        unique: true,
        validate: {
          len: [8, 15]
        }
      },
  
      direccion_proveedor: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      
      estado_proveedor: {
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
      modelName: "Proveedor",
      tableName: "proveedores",
      timestamps: true
    })
  };

  public static associate(models: ProveedorAssociation) {
    Proveedor.belongsToMany(models.Producto, { 
      through: "ProductoProveedor", 
      foreignKey: "id_proveedor_fk", 
    });
  };
};

Proveedor.initialize(sequelize);

export default Proveedor;