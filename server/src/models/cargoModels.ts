import { DataTypes, Model } from "sequelize";
import sequelize from "../config/configDatabase";

class Cargo extends Model {}

Cargo.init(
  {
    id_Cargo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_Cargo: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Cargo",
    tableName: "Cargos",
    timestamps: false,
  }
);

export default Cargo;