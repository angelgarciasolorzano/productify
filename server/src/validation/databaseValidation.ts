import { sequelize } from "@/config";
import "@/models/associations/productosAssociation";

const conexionDatabase = async (): Promise<void> => {
  try{
    await sequelize.authenticate();
    console.log("Conexion a la base de datos establecida correctamente");

    await sequelize.sync();
    console.log("Modelos sincronizados");
  } catch (error) {
    console.error("Error en la conexion a la base de datos", error);
  }
};

export default conexionDatabase;