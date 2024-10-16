import express from "express";
import morgan from "morgan";
import conexioDatabase from "./config/database";
import "./validation/variablesEntorno";

const app = express();
const PORT = 4000;

app.use(morgan("dev"));
app.use(express.json());

app.listen(PORT, (): void => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

conexioDatabase();