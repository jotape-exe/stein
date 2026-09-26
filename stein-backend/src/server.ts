import { app } from "@/app.js";
import { logger } from "@/shared/logger.js";
import "dotenv/config";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.info(
    { port: PORT, env: process.env.NODE_ENV ?? "development" },
    "servidor iniciado",
  );
});
