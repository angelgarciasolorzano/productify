import { VariablesType } from "../schemas/variables.schema";

declare global {
  namespace NodeJS {
    interface ProcessEnv extends VariablesType {}
  }
};