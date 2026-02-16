import type { CorsOptions } from "cors";

import { AppConfig } from "../env/AppConfig.js";

export const customCorsOptions: CorsOptions = {
  origin: AppConfig.getInstance().CLIENT_URL,
  credentials: true,
};
