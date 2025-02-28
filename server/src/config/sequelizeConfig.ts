import { Sequelize } from "sequelize";

const { DB_DATABASE, DB_USUARIO, DB_PASSWORD, SERVER_HOST } = process.env;

if (!DB_DATABASE || !DB_USUARIO || !DB_PASSWORD || !SERVER_HOST) {
  throw new Error("Faltan datos para la conexion a la base de datos");
};

const sequelize = new Sequelize(DB_DATABASE, DB_USUARIO, DB_PASSWORD, {
  host: SERVER_HOST,
  dialect: 'mysql',
});

export default sequelize;