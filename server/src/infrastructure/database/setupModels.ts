import { Sequelize } from "sequelize";
import { CategoriaModel } from "@/modules/categoria/infrastructure";
import { UsuarioModel } from "@/modules/usuario/infrastructure";

/**
 * Inicializa los modelos de Sequelize con la instancia de la configuración de Sequelize.
 * Debe llamarse antes de definir asociaciones o sincronizar.
 * 
 * @param {Sequelize} sequelize Instancia de Sequelize
*/
const initializeModel = (sequelize: Sequelize): void => {
  CategoriaModel.initialize(sequelize);
  UsuarioModel.initialize(sequelize);
};

export default initializeModel;