import "./types/variablesTypes";

import { config } from "dotenv";

import express from "express";
import morgan from "morgan";
import validarEntorno from "./validation/variablesEntorno";
import conexionDatabase from "./config/database";
import authRouter from "./routes/auth.routes";
import cors from "cors";

config();

const app = express();
const { SERVER_PORT, CLIENT_PORT } = process.env;

validarEntorno();

app.use(cors({
  origin: `${CLIENT_PORT}`,
  credentials: true,
}));
app.use(morgan("dev"));
app.use(express.json());

app.use("/api", authRouter);

app.listen(SERVER_PORT, (): void => {
  console.log(`Servidor corriendo en el puerto ${SERVER_PORT}`);
});

conexionDatabase();