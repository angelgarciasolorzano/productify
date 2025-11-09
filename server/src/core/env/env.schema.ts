import type { InferType } from "yup";
import { number, object, string } from "yup";

export const EnvSchema = object({
  SERVER_HOST: string().required(),
  SERVER_PORT: number().required(),
  CLIENT_PORT: string().required(),
  LOG_DIR: string().required(),
  SYSTEM_LOG_LEVEL: string().required(),
  SYSTEM_STRUCTURED_LOG_LEVEL: string().required(),
  SYSTEM_ERROR_LOG_LEVEL: string().required(),
});

export type EnvType = InferType<typeof EnvSchema>;
