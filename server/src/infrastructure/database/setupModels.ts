import { CategoriaModel } from "@/modules/categoria/infrastructure";
import { UsuarioModel } from "@/modules/usuario/infrastructure";
import { sequelize } from "@/infrastructure";

/**
 * Inicializa los modelos de Sequelize con la instancia de la configuración de Sequelize.
 * Debe llamarse antes de definir asociaciones o sincronizar.
*/
const initializeModel = (): void => {
  CategoriaModel.initialize(sequelize);
  UsuarioModel.initialize(sequelize);
};

export default initializeModel;