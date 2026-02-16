import { Logger } from "@productify/shared/index.js";

import { createApp } from "../app/app.js";
import { loadEnv } from "../env/loadEnv.js";

export const bootstrap = async (): Promise<void> => {
  try {
    await loadEnv();

    const app = createApp();
    const config = AppConfig.getInstance();

    app.listen(config.SERVER_PORT, () => {
      Logger.info("info", `Servidor corriendo en el puerto ${config.SERVER_PORT}`);
      Logger.info("info", `URL del servidor: ${config.SERVER_URL}`);
    });
  } catch (error) {
    await Logger.handleErrorAndExit("bootstrap", "Error al iniciar el servidor", error);
  }
};

export const app = createApp();
