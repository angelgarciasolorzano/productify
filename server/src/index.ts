import "module-alias/register";

import express from "express";
import morgan from "morgan";

import { validarVariables, conexionDatabase } from "@/validation";
import { errorHandler } from "@/middleware";
import { mainRouter } from "@/routes";
import { cors } from "@/config";

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