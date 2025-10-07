import { env } from "@/core/config/env";
import { Dialect } from "sequelize";

interface Config {
  username: string;
  password: string | null;
  database: string;
  host: string;
  port: number;
  dialect: Dialect;
  logging: boolean;
};

const baseConfig: Config = {
  username: env.db.username,
  password: env.db.password,
  database: env.db.database,
  host: env.db.host,
  port: env.db.port,
  dialect: env.db.dialect as Dialect,
  logging: env.nodeEnv !== "production",
};

export = {
  development: baseConfig,
  test: {...baseConfig, database: `${env.db.database}_test`},
  producction: {...baseConfig, logging: false, database: `${env.db.database}_production`},
};

// {
//   "development": {
//     "username": "root",
//     "password": null,
//     "database": "database_development",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "database_production",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   }
// }
