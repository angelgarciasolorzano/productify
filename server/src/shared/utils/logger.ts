import type { Logger as LoggerWinston } from "winston";
import { loggers } from "winston";

type LogLevel = "error" | "warn" | "info" | "http" | "verbose" | "debug" | "silly";

/**
 * Clase Logger para manejar logs estructurados y errores.
 * Proporciona métodos para registrar información, errores y manejar salidas del proceso.
 */
export class Logger {
  /**
   * Registra un mensaje de información.
   *
   * @param level - Nivel del log (info, debug, etc.).
   * @param message - Mensaje a registrar.
   * @returns Instancia del logger de Winston.
   */
  public static info(level: LogLevel, message: string): LoggerWinston {
    return loggers.get("systemLogger").log(level, message);
  }

  /**
   * Registra un mensaje estructurado con metadatos adicionales.
   *
   * @param level - Nivel del log (info, debug, etc.).
   * @param message - Mensaje a registrar.
   * @param meta - Metadatos adicionales para el log.
   * @returns Instancia del logger de Winston.
   */
  public static structured(level: LogLevel, message: string, meta?: object): LoggerWinston {
    return loggers.get("systemLoggerStructured").log(level, message, meta);
  }

  /**
   * Registra un mensaje de error.
   *
   * @param message - Mensaje de error a registrar.
   * @param meta - Metadatos adicionales para el log.
   * @returns Instancia del logger de Winston.
   */
  public static error(message: string, meta?: object): LoggerWinston {
    return loggers.get("systemErrorLogger").error(message, meta);
  }

  /**
   * Registra un error y finaliza el proceso.
   *
   * @param message - Mensaje de error a registrar.
   * @param meta - Metadatos adicionales para el log.
   */
  private static async errorAndExit(message: string, meta?: object): Promise<void> {
    const logger = this.error(message, meta);

    logger.on("finish", () => this.info("info", "Terminando el proceso de registrar el log..."));

    logger.end();

    await new Promise((resolve) => setTimeout(resolve, 1000));

    this.info("info", "Proceso terminado.");

    process.exit(1);
  }

  /**
   * Maneja un error, lo registra y finaliza el proceso.
   *
   * @param context - Contexto donde ocurrió el error.
   * @param message - Mensaje de error a registrar.
   * @param error - Error capturado (puede ser de cualquier tipo).
   */
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
