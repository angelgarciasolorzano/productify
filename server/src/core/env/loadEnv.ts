import { Logger } from "@productify/shared/index.js";

import { EnvSchema } from "./env.schema.js";

export const loadEnv = async (): Promise<void> => {
  try {
    EnvSchema.validateSync(process.env, { abortEarly: false });

    Logger.info("info", "Variables de entorno cargadas correctamente");
  } catch (error) {
    await Logger.handleErrorAndExit("loadEnv", "Error al cargar las variables de entorno", error);
  }
};
