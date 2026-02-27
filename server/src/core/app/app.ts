import cors from "cors";
import express, { type Application, json } from "express";
import morgan from "morgan";

import { errorHandler } from "@productify/infrastructure/middleware/index.js";

import { customCorsOptions } from "../config/cors.js";
import mainRoute from "../routes/main.routes.js";

export const createApp = (): Application => {
  const app = express();

  app.use(cors(customCorsOptions));
  app.use(morgan("dev"));
  app.use(json());

  app.use(mainRoute);

  app.use(errorHandler);

  return app;
};
