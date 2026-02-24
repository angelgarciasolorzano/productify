export const RequestPart = {
  PARAMS: "params",
  QUERY: "query",
  BODY: "body",
} as const;

export type RequestPartType = (typeof RequestPart)[keyof typeof RequestPart];
