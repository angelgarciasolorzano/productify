import type { InferType } from "yup";
import { number, object, string } from "yup";

export const EnvSchema = object({
  DATABASE_HOST: string().required(),
  DATABASE_USER: string().required(),
  DATABASE_PASSWORD: string().required(),
  DATABASE_NAME: string().required(),
  DATABASE_PORT: number().required(),
  SERVER_HOST: string().required(),
  SERVER_PORT: number().required(),
  CLIENT_URL: string().required(),
  LOG_DIR: string().required(),
  SYSTEM_LOG_LEVEL: string().required(),
  SYSTEM_STRUCTURED_LOG_LEVEL: string().required(),
  SYSTEM_ERROR_LOG_LEVEL: string().required(),
});

export type EnvType = InferType<typeof EnvSchema>;
