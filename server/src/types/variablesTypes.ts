import { VariableType } from "@/schemas";

declare global {
  namespace NodeJS {
    interface ProcessEnv extends VariableType {}
  }
};