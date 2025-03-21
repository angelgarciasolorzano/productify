import { motion } from "framer-motion";
import { IoNotificationsOutline, IoCloseOutline } from "react-icons/io5";
import { useState, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { WiStars } from "react-icons/wi";

import { DropdownOverlay } from "../dropdown";
import { headerDashboardContainerVariants, headerDashboardItemVariants } from "./headerVariants";
import { fondoPrimary } from "../../assets";

import subItems from "../profile/profileItems";
import generarColor from "../../helpers/generarColor";
import DarkMode from "../DarkMode";

interface NotificacionProps {
  toggleDropdown: (text: string | null) => void;
  isDropdownOpen: string | null;
  iconColors: string[];
  notificationCount: number;
  notificacionesVisibles: {text: string, link: string}[];
};

interface ProfileProps {
  toggleDropdown: (text: string | null) => void;
  isDropdownOpen: string | null;
};

const notifications = [
  {  text: "You have a new message", link: "/messages/1" },
  {  text: "Your order has been shipped", link: "/orders/2" },
  { text: "Reminder: Meeting at 3 PM", link: "/calendar/3" },
  {  text: "New comment on your post", link: "/posts/4" },
  {  text: "Update available for your app", link: "/updates/5" },
  {  text: "Your subscription is expiring soon", link: "/subscriptions/6" },
];

function HeaderDashboard() {  
  const [isDropdownOpen, setIsDropdownOpen] = useState<string | null>(null);
  const notificacionesVisibles = notifications.slice(0, 3);
  const notificationCount = 9;
  
  const toggleDropdown = (dropdown: string | null): void => {
    setIsDropdownOpen((text) => (text === dropdown ? null : dropdown));
  };

  const iconColors = useMemo(() => {
    return notifications.map(() => generarColor());
  }, []);

  return (
    <motion.header 
      initial="hidden"
      animate="visible"
      variants={headerDashboardContainerVariants}
      className="flex justify-between items-center py-2 px-4 shadow-sm border-b bg-white 
        border-white-200 duration-300 dark:bg-dark-720 dark:border-dark-800
      "
    >
      <motion.div variants={headerDashboardItemVariants}>
        <span className="text-2xl font-semibold text-gray-900 dark:text-white">
          Dashboard
        </span>
      </motion.div>
    
      <div className="flex items-center gap-10">
        <motion.div 
          variants={headerDashboardItemVariants} 
          className="flex items-center gap-4"
        >
          <Notifications 
            toggleDropdown={toggleDropdown}
            isDropdownOpen={isDropdownOpen}
            iconColors={iconColors}
            notificationCount={notificationCount}
            notificacionesVisibles={notificacionesVisibles}
          />

          <DarkMode />
        </motion.div>

        <motion.div variants={headerDashboardItemVariants}>
          <Profile 
            toggleDropdown={toggleDropdown} 
            isDropdownOpen={isDropdownOpen} 
          />
        </motion.div>
      </div>
    </motion.header>
  )
};

function Notifications(props: NotificacionProps) {
  const { 
    toggleDropdown, isDropdownOpen, iconColors, notificationCount, 
    notificacionesVisibles 
  } = props;
  const notificacionesRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="relative">
      <button 
        ref={notificacionesRef}
        onClick={() => toggleDropdown("Notificacion")}
        className="relative p-2 rounded-lg border border-white-200 hover:border-gray-500  
          dark:text-white dark:border-dark-800 dark:hover:border-white-200
        "
      >
        <IoNotificationsOutline />

        {notificationCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs 
            font-bold rounded-full h-5 min-w-5 flex items-center justify-center"
          >
            {notificationCount > 99 ? '99+' : notificationCount}
          </span>
        )}
      </button>

      <DropdownOverlay 
        isOpen={isDropdownOpen === "Notificacion"}
        className="w-72"
        itemRef={notificacionesRef}
        toggle={() => toggleDropdown("Notificacion")}
      >
        <div className="flex items-center justify-between px-2 mb-2">
          <span className="text-sm font-semibold dark:text-white">
            Notificaciones
          </span>

          <IoCloseOutline 
            size={20} 
            onClick={() => toggleDropdown("Notificacion")}
            className="cursor-pointer text-gray-600 hover:text-black 
              dark:hover:text-white dark:text-gray-400
            " 
          />
        </div>

        {notificacionesVisibles.map((item, index) => (
          <Link 
            key={index} 
            to={item.link}
            className="flex items-center px-4 text-gray-800 py-2 text-sm hover:bg-gray-200 
              rounded-md dark:text-white dark:hover:bg-dark-800
            "
          >
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center 
              justify-center dark:bg-gray-600 dark:text-white"
            >
              <WiStars size={24} className={`${iconColors[index]} flex-shrink-0`} />
            </div>

            <span className="ml-3 truncate">{item.text}</span>
          </Link>
        ))}

        <hr className="border-t m-2 border-white-200 dark:border-dark-800" />

        <Link
          to="/items"
          className="block text-center px-4 py-1 text-sm hover:text-blue-600
          dark:text-white dark:hover:text-blue-500"
        >
          Mostrar todas las notificaciones
        </Link>
      </DropdownOverlay>
    </div>
  )
};

function Profile({toggleDropdown, isDropdownOpen}: ProfileProps) {
  const profileRef = useRef<HTMLImageElement>(null);

  return (
    <div className="relative">
      <div className="flex items-center space-x-4">
        <div className="flex flex-col items-end">
          <span className="text-sm dark:text-white">
            Angel Garcia
          </span>

          <span className="text-xs text-gray-500 dark:text-gray-400">
            Administrador
          </span>
        </div>

        <img
          ref={profileRef}
          onClick={() => toggleDropdown("Profile")}
          src={fondoPrimary}
          alt="User"
          className="h-10 w-10 rounded-full object-cover cursor-pointer"
        />
      </div>

      <DropdownOverlay 
        isOpen={isDropdownOpen === "Profile"}
        className="w-48"
        itemRef={profileRef}
        toggle={() => toggleDropdown("Profile")}
      >
        <div className="flex items-center justify-between px-2 mb-2">
          <span className="text-sm font-semibold dark:text-white">
            Cuenta
          </span>

          <IoCloseOutline 
            size={20} 
            onClick={() => toggleDropdown("Profile")}
            className="cursor-pointer text-gray-600 hover:text-black
              dark:hover:text-white dark:text-gray-400
            " 
          />
        </div>

        {subItems.map((item, index) => (
          <Link 
            key={index} 
            to={item.link}
            className="flex items-center text-gray-800 px-4 py-2 text-sm hover:bg-gray-200 
              rounded-md dark:text-white dark:hover:bg-dark-800
            "
          >
            <item.icon 
              size={20} 
              className={`flex-shrink-0 text-gray-600 dark:text-gray-400`} 
            />

            <span className="ml-3 truncate">{item.text}</span>
          </Link>
        ))}
      </DropdownOverlay>
    </div>
  )
}

export default HeaderDashboard;