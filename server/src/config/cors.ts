import cors from "cors";

const { CLIENT_PORT } = process.env;

const corsOptions: cors.CorsOptions = {
  origin: CLIENT_PORT,
  credentials: true,
};

export default cors(corsOptions);