import { variables } from "../schemas/variables.schema";
import { config } from "dotenv";

config();

const validar = (): void => {
  try {
    variables.validateSync(process.env);
    console.log("Variables de entorno cargadas correctamente");
  } catch (error) {
    console.error("Error al validar variables de entorno:", error);
    process.exit(1);
  };
};

export default validar;