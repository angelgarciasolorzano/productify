import "./types/variablesTypes";

import { config } from "dotenv";

import express from "express";
import morgan from "morgan";
import validarEntorno from "./validation/variablesEntorno";
import conexioDatabase from "./config/database";

config();

const app = express();
const { SERVER_PORT } = process.env;

validarEntorno();
app.use(morgan("dev"));
app.use(express.json());

app.listen(SERVER_PORT, (): void => {
  console.log(`Servidor corriendo en el puerto ${SERVER_PORT}`);
});

conexioDatabase();