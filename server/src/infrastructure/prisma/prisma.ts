import { PrismaMariaDb } from "@prisma/adapter-mariadb";

import { AppConfig } from "@productify/core/env/appConfig.js";
import { PrismaClient } from "@productify/generated/prisma/index.js";

const config = AppConfig.getInstance();

const adapter = new PrismaMariaDb({
  host: config.DATABASE_HOST,
  user: config.DATABASE_USER,
  password: config.DATABASE_PASSWORD,
  database: config.DATABASE_NAME,
  port: config.DATABASE_PORT,
});

export const prisma = new PrismaClient({ adapter });
