import { Sequelize } from "sequelize";
import { CategoriaSequelize } from "@/modules/categoria/infrastructure";
import { UsuarioSequelize } from "@/modules/usuario/infrastructure";

/**
 * Inicializa los modelos de Sequelize con la instancia de la configuración de Sequelize.
 * Debe llamarse antes de definir asociaciones o sincronizar.
 * 
 * @param {Sequelize} sequelize Instancia de Sequelize
*/
export const initializeModels = (sequelize: Sequelize): void => {
  CategoriaSequelize.initialize(sequelize);
  UsuarioSequelize.initialize(sequelize);
};