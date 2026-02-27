import type { CorsOptions } from "cors";

import { AppConfig } from "../env/appConfig.js";

export const customCorsOptions: CorsOptions = {
  origin: AppConfig.getInstance().CLIENT_URL,
  credentials: true,
};
