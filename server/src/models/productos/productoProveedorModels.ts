import { DataTypes, Model, Optional, Sequelize } from "sequelize";
import { sequelize } from "@/config";

import Producto from "./productoModels";
import Proveedor from "./proveedorModels";

interface ProductoProveedorAtributos {
  id_producto_proveedor: number;
  id_proveedor_fk?: number;
  id_producto_fk: number;
};

interface ProductoProveedorAssociation {
  Producto: typeof Producto;
  Proveedor: typeof Proveedor;
};

interface ProductoProveedorCreationAtributos extends Optional<ProductoProveedorAtributos, 
  "id_producto_proveedor"
>{};

class ProductoProveedor extends Model<ProductoProveedorAtributos, ProductoProveedorCreationAtributos> 
  implements ProductoProveedorAtributos {

  public readonly id_producto_proveedor!: number;
  public readonly id_proveedor_fk?: number;
  public readonly id_producto_fk!: number;

  public static initialize(sequelize: Sequelize) {
    ProductoProveedor.init({
      id_producto_proveedor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
  
      id_proveedor_fk: {
        type: DataTypes.INTEGER,
        references: {
          model: Proveedor,
          key: "id_proveedor"
        },
        allowNull: true
      },
  
      id_producto_fk: {
        type: DataTypes.INTEGER,
        references: {
          model: Producto,
          key: "id_producto"
        },
        allowNull: false
      }
    }, {
      sequelize,
      modelName: "ProductoProveedor",
      tableName: "productos_proveedores",
      timestamps: false
    })
  };

  public static associate(models: ProductoProveedorAssociation) {
    ProductoProveedor.belongsTo(models.Producto, { foreignKey: "id_producto_fk" });
    ProductoProveedor.belongsTo(models.Proveedor, { foreignKey: "id_proveedor_fk" });
  };
};

ProductoProveedor.initialize(sequelize);

export default ProductoProveedor;