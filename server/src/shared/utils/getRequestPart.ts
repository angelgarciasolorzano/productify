import type { Request } from "express";

import type { RequestPartType } from "../constants/requestParts.js";
import { RequestPart } from "../constants/requestParts.js";

export const getRequestPart = (
  request: Request,
  part: RequestPartType,
): Record<string, unknown> => {
  switch (part) {
    case RequestPart.PARAMS:
      return request.params;
    case RequestPart.QUERY:
      return request.query;
    default:
      return request.body;
  }
};
