import cors from "cors";

const port = process.env.CLIENT_PORT;

const corsOptions: cors.CorsOptions = {
  origin: port,
  credentials: true,
};

export default cors(corsOptions);