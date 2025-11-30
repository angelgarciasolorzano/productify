import cors from "cors";
import express, { type Application, json } from "express";
import morgan from "morgan";

import { customCorsOptions } from "@productify/core/index.js";
import { errorHandler } from "@productify/infrastructure/index.js";

export const createApp = (): Application => {
  const app = express();

  app.use(cors(customCorsOptions));
  app.use(morgan("dev"));
  app.use(json());

  //app.use(mainRouter);

  app.use(errorHandler);

  return app;
};
