import type { EnvType } from "@productify/core/env/env.schema.ts";

declare global {
  namespace NodeJS {
    /* eslint-disable-next-line  */
    interface ProcessEnv extends EnvType {}
  }
}
