import express from "express";
import cors from "cors";
import morgan from "morgan";

import { customCorsOptions, mainRouter } from "@/core";
import { errorHandler } from "@/infrastructure";

export const createApp = () => {
  const app = express();

  app.use(cors(customCorsOptions));
  app.use(morgan("dev"));
  app.use(express.json())

  app.use(mainRouter);

  app.use(errorHandler);

  return app;
};