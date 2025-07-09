import createApp from "../app/app";
import loadEnv from "../env/loadEnv";

import { connectionDatabase } from "@/infrastructure";

const serverStart = async (): Promise<void> => {
  const app = createApp();

  try {
    loadEnv();

    await connectionDatabase();

    app.listen(process.env.SERVER_PORT, () => {
      console.log(`Servidor corriendo en el puerto ${process.env.SERVER_PORT}`);
    });
  } catch (error) {
    console.error("Error al iniciar el servidor:", error);
    process.exit(1);
  }
};

export default serverStart;