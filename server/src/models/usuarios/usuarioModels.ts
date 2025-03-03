import { DataTypes, Model, Optional, Sequelize } from "sequelize";
import { sequelize } from "@/config";
import { Producto } from "../productos";
import { Telefono, Cargo } from "./";

interface UsuarioAtributos {
  id_usuario: number;
  nombre_usuario: string;
  apellidos_usuario: string;
  sexo_usuario: "M" | "F";
  cedula_usuario: string;
  departamento_usuario: string;
  direccion_usuario: string;
  correo_usuario: string;
  contra_usuario: string;
  estado_usuario: "activo" | "inactivo";
  id_cargo_fk: number;
  createdAt?: Date;
  updatedAt?: Date;
};

interface UsuarioAssociation {
  Cargo: typeof Cargo;
  Producto: typeof Producto;
  Telefono: typeof Telefono;
};

interface UsuarioCreationAtributos extends Optional<UsuarioAtributos, "id_usuario"> {};

class Usuario extends Model<UsuarioAtributos, UsuarioCreationAtributos> implements UsuarioAtributos {
  public readonly id_usuario!: number;
  public nombre_usuario!: string;
  public apellidos_usuario!: string;
  public sexo_usuario!: "M" | "F";
  public cedula_usuario!: string;
  public departamento_usuario!: string;
  public direccion_usuario!: string;
  public correo_usuario!: string;
  public contra_usuario!: string;
  public estado_usuario!: "activo" | "inactivo";
  public id_cargo_fk!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static initialize(sequelize: Sequelize) {
    Usuario.init({
      id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
  
      nombre_usuario: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
  
      apellidos_usuario: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
  
      sexo_usuario: {
        type: DataTypes.ENUM("M", "F"),
        allowNull: false,
      },
  
      cedula_usuario: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
        validate: {
          len: [16, 16],
        },
      },
  
      departamento_usuario: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
  
      direccion_usuario: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
  
      correo_usuario: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
  
      contra_usuario: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          len: [8, 100],
        },
      },
  
      estado_usuario: {
        type: DataTypes.ENUM("activo", "inactivo"),
        allowNull: false,
        defaultValue: "activo",
      },

      id_cargo_fk: {
        type: DataTypes.INTEGER,
        references: {
          model: Cargo,
          key: "id_cargo",
        },
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
      modelName: "Usuario",
      tableName: "usuarios",
      timestamps: false,
    })
  };

  public static associate(models: UsuarioAssociation) {
    Usuario.hasOne(models.Cargo, { foreignKey: "id_cargo_fk" });
    Usuario.hasMany(models.Producto, { foreignKey: "id_usuario_fk" });
    Usuario.hasMany(models.Telefono, { foreignKey: "id_usuario_fk" });
  };
};

Usuario.initialize(sequelize);

export default Usuario;