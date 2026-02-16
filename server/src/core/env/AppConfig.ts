import type { EnvType } from "./env.schema.js";

/**
 * AppConfig centraliza el acceso tipado y seguro a las variables de entorno de la aplicación.
 */
export class AppConfig {
  private static instance: AppConfig;

  private readonly env: EnvType;

  private constructor() {
    this.env = {
      SERVER_HOST: process.env.SERVER_HOST as string,
      SERVER_PORT: Number(process.env.SERVER_PORT),

      DATABASE_HOST: process.env.DATABASE_HOST as string,
      DATABASE_USER: process.env.DATABASE_USER as string,
      DATABASE_PASSWORD: process.env.DATABASE_PASSWORD as string,
      DATABASE_NAME: process.env.DATABASE_NAME as string,
      DATABASE_PORT: Number(process.env.DATABASE_PORT),

      CLIENT_URL: process.env.CLIENT_URL as string,

      LOG_DIR: process.env.LOG_DIR as string,

      SYSTEM_LOG_LEVEL: process.env.SYSTEM_LOG_LEVEL as string,
      SYSTEM_STRUCTURED_LOG_LEVEL: process.env.SYSTEM_STRUCTURED_LOG_LEVEL as string,
      SYSTEM_ERROR_LOG_LEVEL: process.env.SYSTEM_ERROR_LOG_LEVEL as string,
    };
  }

  public static getInstance(): AppConfig {
    if (!AppConfig.instance) {
      AppConfig.instance = new AppConfig();
    }

    return AppConfig.instance;
  }

  public get SERVER_PORT(): number {
    return this.env.SERVER_PORT;
  }

  public get SERVER_HOST(): string {
    return this.env.SERVER_HOST;
  }

  public get SERVER_URL(): string {
    return `http://${this.env.SERVER_HOST}:${this.env.SERVER_PORT}`;
  }

  public get DATABASE_HOST(): string {
    return this.env.DATABASE_HOST;
  }

  public get DATABASE_USER(): string {
    return this.env.DATABASE_USER;
  }

  public get DATABASE_PASSWORD(): string {
    return this.env.DATABASE_PASSWORD;
  }

  public get DATABASE_NAME(): string {
    return this.env.DATABASE_NAME;
  }

  public get DATABASE_PORT(): number {
    return this.env.DATABASE_PORT;
  }

  public get CLIENT_URL(): string {
    return this.env.CLIENT_URL;
  }

  public get LOG_DIR(): string {
    return this.env.LOG_DIR;
  }

  public get SYSTEM_LOG_LEVEL(): string {
    return this.env.SYSTEM_LOG_LEVEL;
  }

  public get SYSTEM_STRUCTURED_LOG_LEVEL(): string {
    return this.env.SYSTEM_STRUCTURED_LOG_LEVEL;
  }

  public get SYSTEM_ERROR_LOG_LEVEL(): string {
    return this.env.SYSTEM_ERROR_LOG_LEVEL;
  }
}
