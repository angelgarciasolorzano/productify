import "./types/variablesTypes";

import { config } from "dotenv";

import express from "express";
import morgan from "morgan";
import validarEntorno from "./validation/variablesEntorno";
import conexionDatabase from "./config/database";
import authRouter from "./routes/auth.routes";

config();

const app = express();
const { SERVER_PORT } = process.env;

validarEntorno();
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/auth", authRouter);

app.listen(SERVER_PORT, (): void => {
  console.log(`Servidor corriendo en el puerto ${SERVER_PORT}`);
});

conexionDatabase();