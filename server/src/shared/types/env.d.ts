import { EnvType } from "@/core";

declare global {
  namespace NodeJS {
    interface ProcessEnv extends EnvType {}
  }
};