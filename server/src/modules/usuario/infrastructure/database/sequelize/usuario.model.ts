import { DataTypes, Model, Sequelize } from "sequelize";
import { IUsuarioDb, IUsuarioCreationDb } from "../interface/usuarioDb.interface";

/**
 * Modelo sequelize que representa la tabla `usuarios` en la base de datos.
 * 
 * Este modelo define la estructura de la tabla, sus campos y restricciones.
 * 
 * @class UsuarioSequelize
 * @extends Model
 * @implements IUsuarioDb
*/
class UsuarioSequelize extends Model<IUsuarioDb, IUsuarioCreationDb> implements IUsuarioDb {
  public readonly id_usuario!: number;
  public nombre_usuario!: string;
  public apellidos_usuario!: string;
  public sexo_usuario!: "M" | "F";
  public cedula_usuario!: string;
  public departamento_usuario!: string;
  public direccion_usuario?: string;
  public correo_usuario!: string;
  public contra_usuario!: string;
  public estado_usuario!: "activo" | "inactivo";
  public id_cargo_fk!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  /**
   * Inicializa el modelo en sequelize y define la estructura de la tabla `usuarios`.
   *
   * @param sequelize Instancia de sequelize
  */
  public static initialize(sequelize: Sequelize) {
    UsuarioSequelize.init({
      id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
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
      modelName: "Usuario",
      tableName: "usuarios",
      timestamps: true
    });
  };
};

export default UsuarioSequelize;