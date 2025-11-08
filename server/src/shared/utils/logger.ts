import type { Logger as LoggerWinston } from "winston";
import { loggers } from "winston";

type LogLevel =
  | "error"
  | "warn"
  | "info"
  | "http"
  | "verbose"
  | "debug"
  | "silly";

export class Logger {
  public static info(level: LogLevel, message: string): LoggerWinston {
    return loggers.get("systemLogger").log(level, message);
  }

  public static structured(
    level: LogLevel,
    message: string,
    meta?: object,
  ): LoggerWinston {
    return loggers.get("systemLoggerStructured").log(level, message, meta);
  }

  public static error(message: string, meta?: object): LoggerWinston {
    return loggers.get("systemErrorLogger").error(message, meta);
  }

  private static async errorAndExit(
    message: string,
    meta?: object,
  ): Promise<void> {
    const logger = this.error(message, meta);

    logger.on("finish", () =>
      this.info("info", "Terminando el proceso de registrar el log..."),
    );

    logger.end();

    await new Promise((resolve) => setTimeout(resolve, 1000));

    this.info("info", "Proceso terminado.");

    process.exit(1);
  }

  public static async handleErrorAndExit(
    context: string,
    message: string,
    error: unknown,
  ): Promise<void> {
    if (error instanceof Error) {
      await this.errorAndExit(message, {
        context,
        error: {
          name: error.name,
          message: error.message,
          stack: error.stack,
        },
      });
    } else {
      await this.errorAndExit(message, {
        context,
        error: {
          value: error,
        },
      });
    }
  }
}
