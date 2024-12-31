import { IconType } from "react-icons";
import { LuUser, LuLogOut } from "react-icons/lu";

interface Items {
  text: string;
  icon: IconType;
  link: string;
};

const menuItems: Items[] = [
  {
    text: "Perfil",
    icon: LuUser,
    link: "/",
  },
  {
    text: "Cerrar sesión",
    icon: LuLogOut,
    link: "/",
  },
];

export default menuItems;