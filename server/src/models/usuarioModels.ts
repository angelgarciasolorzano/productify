import { DataTypes, Model } from "sequelize";
import sequelize from "../config/configDatabase";

class Usuario extends Model {}

Usuario.init(
  {
    id_Usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_Usuario: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    apellidos_Usuario: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    sexo_Usuario: {
      type: DataTypes.ENUM("M", "F"),
      allowNull: false,
    },
    cedula_Usuario: {
      type: DataTypes.STRING(11),
      allowNull: false,
      unique: true,
      validate: {
        len: [11, 11],
      },
    },
    departamento_Usuario: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    direccion_Usuario: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    correo_Usuario: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    contra_Usuario: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        len: [8, 100],
      },
    },
    estado_Usuario: {
      type: DataTypes.ENUM("activo", "inactivo"),
      allowNull: false,
      defaultValue: "activo",
    },
    id_Cargo_FK: {
      type: DataTypes.INTEGER,
      references: {
        model: "Cargo",
        key: "id_Cargo",
      },
      allowNull: false,
    }
  },
  {
    sequelize,
    modelName: "Usuario",
    tableName: "Usuarios",
    timestamps: false,
  }
);

export default Usuario;