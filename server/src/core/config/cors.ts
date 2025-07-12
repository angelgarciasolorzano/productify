import { CorsOptions} from "cors";

export const customCorsOptions: CorsOptions = {
  origin: process.env.CLIENT_PORT,
  credentials: true,
};