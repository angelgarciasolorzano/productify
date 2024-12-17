import { object, string, InferType } from "yup"; 

export const variables = object({
  SERVER_HOST: string().required(),
  SERVER_PORT: string().required(),
  DB_USUARIO: string().required(),
  DB_PASSWORD: string().required(),
  DB_DATABASE: string().required(),
  CLIENT_PORT: string().required(),
});

export type VariablesType = InferType<typeof variables>;