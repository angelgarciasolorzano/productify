export const LoggerName = {
  SYSTEM: "systemLogger",
  STRUCTURED: "systemLoggerStructured",
  ERROR: "systemErrorLogger",
} as const;

export type LoggerNameType = (typeof LoggerName)[keyof typeof LoggerName];
