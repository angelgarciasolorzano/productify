export const CategoryStatus = {
  ACTIVE: "activo",
  INACTIVE: "inactivo",
} as const;

export type CategoryStatusType = (typeof CategoryStatus)[keyof typeof CategoryStatus];
