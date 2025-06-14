import "module-alias/register";
import "@/types/variablesTypes";

import express from "express";
import morgan from "morgan";

import { validarVariables, conexionDatabase } from "@/validation";
import { errorHandler } from "@/middleware";
import { cors } from "@/config";

import mainRouter from "@/routes";

const app = express();
const port = process.env.SERVER_PORT;

validarVariables();

app.use(cors);
app.use(morgan("dev"));
app.use(express.json());

app.use(mainRouter);

app.use(errorHandler);

app.listen(port, (): void => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});

conexionDatabase();