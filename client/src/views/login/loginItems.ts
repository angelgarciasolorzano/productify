import { FaFacebookF, FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa6";
import { IconType } from "react-icons";

interface LinksLogin {
  href: string;
  icon: IconType;
  color: string;
};

export const linksLogin: LinksLogin[] = [
  {
    href: "https://github.com/",
    icon: FaGithub,
    color: "text-gray-900 dark:text-gray-100"
  },
  {
    href: "https://es-la.facebook.com/",
    icon: FaFacebookF,
    color: "text-blue-600 dark:text-blue-600"
  },
  {
    href: "https://web.whatsapp.com/",
    icon: FaWhatsapp,
    color: "text-green-700 dark:text-green-400"
  },
  {
    href: "https://linkedin.com",
    icon: FaLinkedin,
    color: "text-blue-700 dark:text-blue-400"
  }
];