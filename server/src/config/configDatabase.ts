import { Sequelize } from "sequelize";
import { config } from "dotenv";

config();

const { DB_DATABASE, DB_USUARIO, DB_PASSWORD, SERVER_HOST } = process.env;

const sequelize = new Sequelize(DB_DATABASE, DB_USUARIO, DB_PASSWORD, {
  host: SERVER_HOST,
  dialect: 'mysql',
});

export default sequelize;