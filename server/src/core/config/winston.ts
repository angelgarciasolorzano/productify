import * as fs from "fs";
import * as path from "path";
import { format, loggers, transports } from "winston";

import { LoggerName } from "@productify/shared/constants/index.js";

import { AppConfig } from "../env/appConfig.js";

const config = AppConfig.getInstance();

const { SYSTEM_LOG_LEVEL, SYSTEM_ERROR_LOG_LEVEL, SYSTEM_STRUCTURED_LOG_LEVEL, LOG_DIR } = config;

if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR, { recursive: true });
}

loggers.add(LoggerName.SYSTEM, {
  level: SYSTEM_LOG_LEVEL || "info",
  format: format.cli(),
  transports: [new transports.Console()],
});

loggers.add(LoggerName.STRUCTURED, {
  level: SYSTEM_STRUCTURED_LOG_LEVEL || "info",
  format: format.combine(format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), format.json()),
  transports: [new transports.Console()],
});

loggers.add(LoggerName.ERROR, {
  level: SYSTEM_ERROR_LOG_LEVEL || "error",
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.errors({ stack: true }),
    format.json(),
  ),
  transports: [
    new transports.File({
      filename: path.join(LOG_DIR, "standard.log"),
    }),
  ],
  exceptionHandlers: [
    new transports.File({
      filename: path.join(LOG_DIR, "exceptions.log"),
    }),
  ],
  rejectionHandlers: [
    new transports.File({
      filename: path.join(LOG_DIR, "rejections.log"),
    }),
  ],
});
