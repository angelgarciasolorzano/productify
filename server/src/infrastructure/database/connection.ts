import { sequelize } from "@/infrastructure";

const connectionDatabase = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    console.log("Conexión a la base de datos establecida correctamente");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
    process.exit(1);
  };
};

export default connectionDatabase;