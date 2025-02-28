import { VariableSchema } from "@/schemas";
import { config } from "dotenv";

config();

const validarVariables = (): void => {
  try {
    VariableSchema.validateSync(process.env);
    console.log("Variables de entorno cargadas correctamente");
  } catch (error) {
    console.error("Error al validar variables de entorno:", error);
    process.exit(1);
  };
};

export default validarVariables;