import "./types/variablesTypes";

import { config } from "dotenv";
import { conexionDatabase, cors } from "./config";
import { authRouter } from "./routes";

import express from "express";
import morgan from "morgan";
import validarEntorno from "./validation/variablesEntorno";

config();

const app = express();
const { SERVER_PORT } = process.env;

validarEntorno();

app.use(cors);
app.use(morgan("dev"));
app.use(express.json());

app.use("/api", authRouter);

app.listen(SERVER_PORT, (): void => {
  console.log(`Servidor corriendo en el puerto ${SERVER_PORT}`);
});

conexionDatabase();