import { Logger } from "@productify/shared/index.js";

import { createApp } from "../app/app.js";
import { loadEnv } from "../env/loadEnv.js";

export const bootstrap = async (): Promise<void> => {
  try {
    await loadEnv();

    const app = createApp();

    app.listen(process.env.SERVER_PORT, () => {
      Logger.info("info", `Servidor corriendo en el puerto ${process.env.SERVER_PORT}`);
    });
  } catch (error) {
    await Logger.handleErrorAndExit("bootstrap", "Error al iniciar el servidor", error);
  }
};

export const app = createApp();
