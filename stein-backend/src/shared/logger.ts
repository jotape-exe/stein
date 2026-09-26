import pino from "pino";

const isProduction = process.env.NODE_ENV === "production";

export const logger = pino({
  level: process.env.LOG_LEVEL || "info",
  base: { service: "stein-backend" },
  redact: {
    paths: [
      "*.password",
      "*.password_hash",
      "*.refresh_hash",
      "req.headers.authorization",
    ],
    censor: "[REDACTED]",
  },
  ...(isProduction
    ? {}
    : {
        transport: {
          target: "pino-pretty",
          options: {
            colorize: true,
            singleLine: true,
          },
        },
      }),
});
