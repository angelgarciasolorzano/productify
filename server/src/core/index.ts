export { default as createApp } from "./app/app";
export { default as customCorsOptions } from "./config/cors";

export * from "./env/env.schema";
export { default as loadEnv } from "./env/loadEnv";

export { default as mainRouter } from "./routes/main.routes";
export { default as serverStart } from "./server/server";