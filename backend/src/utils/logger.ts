import pino from "pino";

const logger = pino({
  level: "info", // default log level
  base: false as {},
  timestamp: pino.stdTimeFunctions.isoTime, // nice ISO timestamps
  redact: ["req.headers.authorization", "user.password"], // mask secrets
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      translateTime: "HH:MM:ss Z",
      ignore: "pid,hostname",
      singleLine: true, // keep logs compact
    },
  },
});

export default logger;
