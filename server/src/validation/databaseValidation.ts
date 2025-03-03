import { sequelize } from "@/config";

const conexionDatabase = async (): Promise<void> => {
  try{
    await sequelize.authenticate();
    console.log("Conexion a la base de datos establecida correctamente");
  } catch (error) {
    console.error("Error en la conexion a la base de datos", error);
  }
};

export default conexionDatabase;