import { CorsOptions} from "cors";

const customCorsOptions: CorsOptions = {
  origin: process.env.CLIENT_PORT,
  credentials: true,
};

export default customCorsOptions;