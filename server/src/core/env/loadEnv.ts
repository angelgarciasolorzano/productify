import { EnvSchema } from "@/core";

export const loadEnv = (): void => {
  try {
    EnvSchema.validateSync(process.env, { abortEarly: false });
    console.log("Variables de entorno cargadas correctamente");
  } catch (error) {
    console.log("Error al cargar las variables de entorno", error);
    process.exit(1);
  }
};