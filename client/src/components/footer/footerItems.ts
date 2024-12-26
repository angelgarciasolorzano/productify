import { FaHome } from "react-icons/fa";
import { MdHome, MdInfo, MdPhone, MdMail, MdGroups } from "react-icons/md";
import { 
  FaFacebookF, FaTwitter, FaInstagram, FaGithub,  
  FaServicestack, FaPeopleGroup, FaWhatsapp, FaLinkedin 
} from "react-icons/fa6";
import { IconType } from "react-icons";

//TODO Footer Inicio

interface ItemsLinks {
  id: string;
  icon: IconType;
  text: string;
  href: string;
};

type Links = Omit<ItemsLinks, "href">;
type SocialLinks = Omit<ItemsLinks, "id">;
type ContactoInfo = Pick<ItemsLinks, "icon" | "text">;
type LinksLogin = Pick<ItemsLinks, "icon" | "href">;

export const links: Links[] = [
  {
    id: "inicio",
    icon: FaHome,
    text: "Inicio"
  },
  {
    id: "identidad",
    icon: FaPeopleGroup,
    text: "Acerca de"
  },
  {
    id: "servicios",
    icon: FaServicestack,
    text: "Servicios"
  },
  {
    id: "comunidad",
    icon: MdGroups,
    text: "Comunidad"
  }
];

export const socialLinks: SocialLinks[] = [
  {
    href: "https://es-la.facebook.com/",
    icon: FaFacebookF,
    text: "Facebook"
  },
  {
    href: "https://x.com/",
    icon: FaTwitter,
    text: "Twitter"
  },
  {
    href: "https://www.instagram.com/",
    icon: FaInstagram,
    text: "Instagram"
  },
  {
    href: "https://github.com/",
    icon: FaGithub,
    text: "Github"
  }
];

export const contactoInfo: ContactoInfo[] = [
  { 
    icon: MdHome, 
    text: "123 Calle Principal" 
  },
  { 
    icon: MdInfo, 
    text: "Ciudad, País 12345" 
  },
  { 
    icon: MdPhone, 
    text: "Teléfono: (123) 456-7890" 
  },
  { 
    icon: MdMail, 
    text: "Email: info@miempresa.com" 
  },
];

//TODO Footer Login

export const linksLogin: LinksLogin[] = [
  {
    href: "https://github.com/",
    icon: FaGithub
  },
  {
    href: "https://es-la.facebook.com/",
    icon: FaFacebookF
  },
  {
    href: "https://web.whatsapp.com/",
    icon: FaWhatsapp
  },
  {
    href: "https://linkedin.com",
    icon: FaLinkedin
  }
];