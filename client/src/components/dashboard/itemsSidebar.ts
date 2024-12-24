import { IconType } from "react-icons";
import { TfiBarChart } from "react-icons/tfi";
import { GiShoppingCart } from "react-icons/gi";
import { CiShoppingTag, CiLocationArrow1, CiBank } from "react-icons/ci";

interface LinkItem {
  text: string;
  link: string;
  icon: IconType;
};

interface ItemsContent {
  title: string;
  items: LinkItem[];
};

const itemsContent: ItemsContent[] = [
  {
    title: "Home",
    items: [
      {
        text: "Dashboard",
        link: "/Dashboard",
        icon: TfiBarChart
      }
    ]
  },
  {
    title: "App",
    items: [
      {
        text: "Dashboard",
        link: "/Dashboard",
        icon: TfiBarChart
      },
      {
        text: "Dashboard",
        link: "/Dashboard",
        icon: GiShoppingCart
      },
      {
        text: "Dashboard",
        link: "/Dashboard",
        icon: CiShoppingTag
      },
      {
        text: "Dashboard",
        link: "/Dashboard",
        icon: CiLocationArrow1
      },
      {
        text: "Dashboard",
        link: "/Dashboard",
        icon: CiBank
      }
    ]
  }
];

export default itemsContent;