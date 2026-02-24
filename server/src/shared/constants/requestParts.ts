export const RequestPart = {
  PARAMS: "params",
  QUERY: "query",
  BODY: "body",
};

export type RequestPartType = (typeof RequestPart)[keyof typeof RequestPart];
