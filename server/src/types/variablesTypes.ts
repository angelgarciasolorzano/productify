import { VariablesType } from "../schemas";

declare global {
  namespace NodeJS {
    interface ProcessEnv extends VariablesType {}
  }
};