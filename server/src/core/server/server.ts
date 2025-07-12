import { createApp, loadEnv } from "@/core";
import { connectionDatabase } from "@/infrastructure";

export const serverStart = async (): Promise<void> => {
  try {
    loadEnv();

    await connectionDatabase();

    const app = createApp();

    app.listen(process.env.SERVER_PORT, () => {
      console.log(`Servidor corriendo en el puerto ${process.env.SERVER_PORT}`);
    });
  } catch (error) {
    console.error("Error al iniciar el servidor:", error);
    process.exit(1);
  }
};