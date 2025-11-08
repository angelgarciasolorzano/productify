import * as fs from "fs";
import * as path from "path";
import { format, loggers, transports } from "winston";

const logDir = process.env.LOG_DIR || "./logs";

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

loggers.add("systemLogger", {
  level: "info",
  format: format.cli(),
  transports: [new transports.Console()],
});

loggers.add("systemLoggerStructured", {
  level: "info",
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.json(),
  ),
  transports: [new transports.Console()],
});

loggers.add("systemErrorLogger", {
  level: "error",
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
