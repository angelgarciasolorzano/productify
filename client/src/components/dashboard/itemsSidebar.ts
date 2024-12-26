import { IconType } from "react-icons";
import { CgProfile } from "react-icons/cg";
import { TbLogout2 } from "react-icons/tb";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { 
  AiOutlineShoppingCart, AiOutlineSwap, 
  AiOutlineUsergroupAdd, AiOutlinePieChart 
} from "react-icons/ai";

interface ItemsLinks {
  text: string;
  link: string;
  icon: IconType;
};

interface Items {
  title: string;
  items: ItemsLinks[];
};

export const itemsContent: Items[] = [
  {
    title: "Home",
    items: [
      {
        text: "Dashboard",
        link: "/Dashboard",
        icon: LuLayoutDashboard
      }
    ]
  },
  {
    title: "App",
    items: [
      {
        text: "Productos",
        link: "/Dashboard",
        icon: AiOutlineShoppingCart
      },
      {
        text: "Proveedores",
        link: "/Dashboard",
        icon: TbTruckDelivery
      },
      {
        text: "Movimientos",
        link: "/Dashboard",
        icon: AiOutlineSwap
      },
      {
        text: "Usuarios",
        link: "/Dashboard",
        icon: AiOutlineUsergroupAdd
      },
      {
        text: "Reportes",
        link: "/Dashboard",
        icon: AiOutlinePieChart
      }
    ]
  }
];

export const itemsFooter: Items[] = [
  {
    title: "Cuenta",
    items: [
      {
        text: "Perfil",
        link: "/perfil",
        icon: CgProfile
      },
      {
        text: "Cerrar sesion",
        link: "/",
        icon: TbLogout2
      }
    ]
  }
];