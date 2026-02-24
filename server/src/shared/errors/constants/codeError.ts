export const CodeError = {
  VALIDATION_ERROR: "VALIDATION_ERROR",
  CONFLICT_ERROR: "CONFLICT_ERROR",
  NOT_FOUND_ERROR: "NOT_FOUND_ERROR",
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
} as const;

export type CodeErrorType = (typeof CodeError)[keyof typeof CodeError];
