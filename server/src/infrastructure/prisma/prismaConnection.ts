import { Logger } from "@productify/shared/utils/logger.js";

import { prisma } from "./prisma.js";

/**
 * Conecta a la base de datos utilizando Prisma.
 */
export async function connectPrisma(): Promise<void> {
  try {
    await prisma.$connect();

    await prisma.$queryRaw`SELECT 1`;

    Logger.info("info", "Conexión exitosa con Prisma");
  } catch (error) {
    await Logger.handleErrorAndExit("connectPrisma", "Error al conectar con Prisma", error);
  }
}
