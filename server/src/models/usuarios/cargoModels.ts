import { DataTypes, Model, Optional, Sequelize } from "sequelize";
import { sequelize } from "@/config";
import { Usuario } from "./";

interface CargoAtributos {
  id_cargo: number;
  nombre_cargo: string;
  createdAt?: Date;
  updatedAt?: Date;
};

interface CargoAssociation {
  Usuario: typeof Usuario;
};

interface CargoCreationAtributos extends Optional<CargoAtributos, "id_cargo"> {};

class Cargo extends Model<CargoAtributos, CargoCreationAtributos> implements CargoAtributos {
  public readonly id_cargo!: number;
  public nombre_cargo!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static initialize(sequelize: Sequelize) {
    Cargo.init({
      id_cargo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
  
      nombre_cargo: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
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
      modelName: "Cargo",
      tableName: "cargos",
      timestamps: true,
    })
  };

  public static associate(models: CargoAssociation) {
    Cargo.hasMany(models.Usuario, { foreignKey: "id_cargo_fk" });
  };
};

Cargo.initialize(sequelize);

export default Cargo;