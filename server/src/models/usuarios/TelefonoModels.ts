import { DataTypes, Model, Sequelize, Optional } from "sequelize";
import { sequelize } from "@/config";
import { Usuario } from "./";

interface TelefonoAtributos {
  id_telefono: number;
  operador_telefono?: "tigo" | "claro";
  numero_telefono: string;
  id_usuario_fk: number;
  createdAt?: Date;
  updatedAt?: Date;
};

interface TelefonoCreationAtributos extends Optional<TelefonoAtributos, "id_telefono"> {};

class telefono extends Model<TelefonoAtributos, TelefonoCreationAtributos> implements 
  TelefonoAtributos {

  public readonly id_telefono!: number;
  public operador_telefono?: "tigo" | "claro";
  public numero_telefono!: string;
  public id_usuario_fk!: number;

  public readonly createdAt?: Date;
  public readonly updatedAt?: Date;

  public static initialize(sequelize: Sequelize) {
    telefono.init({
      id_telefono: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      operador_telefono: {
        type: DataTypes.ENUM("tigo", "claro"),
        allowNull: true,
      },

      numero_telefono: {
        type: DataTypes.STRING(8),
        allowNull: true,
        unique: true,
        validate: {
          len: [8,15]
        },
      },

      id_usuario_fk: {
        type: DataTypes.INTEGER,
        references: {
          model: Usuario,
          key: "id_Usuario",
        },
        allowNull: false,
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
      modelName: "telefono",
      tableName: "telefonos",
      timestamps: true,
    })
  };
};

telefono.initialize(sequelize);

export default telefono;