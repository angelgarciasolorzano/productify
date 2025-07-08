import { object, string, number, InferType } from "yup";

export const EnvSchema = object({
  SERVER_HOST: string().required(),
  SERVER_PORT: number().required(),
  DB_USUARIO: string().required(),
  DB_PASSWORD: string().required(),
  DB_DATABASE: string().required(),
  CLIENT_PORT: string().required(),
});

export type EnvType = InferType<typeof EnvSchema>;