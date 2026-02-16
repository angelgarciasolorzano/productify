import * as fs from "fs";
import * as path from "path";
import { format, loggers, transports } from "winston";

import { AppConfig } from "../env/AppConfig.js";

const config = AppConfig.getInstance();

const { SYSTEM_LOG_LEVEL, SYSTEM_ERROR_LOG_LEVEL, SYSTEM_STRUCTURED_LOG_LEVEL, LOG_DIR } = config;

if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR, { recursive: true });
}

loggers.add("systemLogger", {
  level: SYSTEM_LOG_LEVEL || "info",
  format: format.cli(),
  transports: [new transports.Console()],
});

loggers.add("systemLoggerStructured", {
  level: SYSTEM_STRUCTURED_LOG_LEVEL || "info",
  format: format.combine(format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), format.json()),
  transports: [new transports.Console()],
});

loggers.add("systemErrorLogger", {
  level: SYSTEM_ERROR_LOG_LEVEL || "error",
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.errors({ stack: true }),
    format.json(),
  ),
  transports: [
    new transports.File({
      filename: path.join(logDir, "standard.log"),
    }),
  ],
  exceptionHandlers: [
    new transports.File({
      filename: path.join(logDir, "exceptions.log"),
    }),
  ],
  rejectionHandlers: [
    new transports.File({
      filename: path.join(logDir, "rejections.log"),
    }),
  ],
});
