import { IconType } from "react-icons";

export enum DropdownType {
  Profile = "Profile",
  Notificacion = "Notificacion",
};

export interface DropdownItems {
  text: string;
  icon?: IconType;
  link: string;
};