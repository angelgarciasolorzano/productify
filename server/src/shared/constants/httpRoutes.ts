export const RouterPrefix = {
  API: "/api",
} as const;

export type RouterPrefixType = (typeof RouterPrefix)[keyof typeof RouterPrefix];
