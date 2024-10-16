import { DataTypes, Model } from "sequelize";
import sequelize from "../config/configDatabase";

class Telefono extends Model {}

Telefono.init(
  {
    id_Telefono: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    operador_Telefono: {
      type: DataTypes.ENUM("tigo", "claro"),
      allowNull: false,
    },
    numero_Telefono: {
      type: DataTypes.STRING(8),
      allowNull: false,
      unique: true,
      validate: {
        len: [8,8]
      },
    },
    id_Usuario_FK: {
      type: DataTypes.INTEGER,
      references: {
        model: "Usuario",
        key: "id_Usuario",
      },
      allowNull: false,
    }
  },
  {
    sequelize,
    modelName: "Telefono",
    tableName: "Telefonos",
    timestamps: false,
  }
);

export default Telefono;