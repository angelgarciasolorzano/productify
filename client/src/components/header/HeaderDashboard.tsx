import { LuMoon, LuSun } from "react-icons/lu";
import { AnimatePresence, motion } from "framer-motion";
import { IoNotificationsOutline } from "react-icons/io5";
import { useState } from "react";

import { DropdownOverlay, DropdownType } from "../dropdown";
import { containerDashboardVariants, itemDashboardVariants } from "./headerVariants";

import themeStore from "../../store/themeStore";
import Profile from "../profile/Profile";

const notifications = [
  {  text: "You have a new message", link: "/messages/1" },
  {  text: "Your order has been shipped", link: "/orders/2" },
  { text: "Reminder: Meeting at 3 PM", link: "/calendar/3" },
  {  text: "New comment on your post", link: "/posts/4" },
  {  text: "Update available for your app", link: "/updates/5" },
  {  text: "Your subscription is expiring soon", link: "/subscriptions/6" },
];

function HeaderDashboard() {
  const theme = themeStore((state) => state.theme);
  const updateTheme = themeStore((state) => state.updateTheme);
  
  const [isDropdownOpen, setIsDropdownOpen] = useState<DropdownType | null>(null);
  const notificationCount = 9;
  
  const toggleDropdown = (dropdown: DropdownType): void => {
    setIsDropdownOpen((text) => (text === dropdown ? null : dropdown));
  };

  return (
    <motion.header 
      initial="hidden"
      animate="visible"
      variants={containerDashboardVariants}
      className="flex justify-between items-center py-2 px-4 shadow-sm border-b bg-white 
        border-borderPrimary duration-300 dark:bg-bgPrimary-dark 
        dark:border-borderPrimary-dark
      "
    >
      <motion.div variants={itemDashboardVariants}>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-textPrimary">
          Dashboard
        </h1>
      </motion.div>
    
      <div className="flex items-center gap-10">
        <motion.div 
          variants={itemDashboardVariants} 
          className="flex items-center gap-4"
        >
          <button 
            onClick={() => toggleDropdown(DropdownType.Notificacion)}
            className="relative p-2 rounded-full bg-gray-200 dark:text-textPrimary
            cursor-pointer dark:bg-bgPrimary-darkPrimary"
          >
            <IoNotificationsOutline />

            {notificationCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs 
                font-bold rounded-full h-5 min-w-5 flex items-center justify-center"
              >
                {notificationCount > 99 ? '99+' : notificationCount}
              </span>
            )}

            <AnimatePresence>
              {isDropdownOpen === DropdownType.Notificacion && 
                <DropdownOverlay
                  items={notifications} 
                  tipo={DropdownType.Notificacion}
                />
              }
            </AnimatePresence>
          </button>

          <button
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 
            dark:bg-bgPrimary-darkPrimary dark:text-textPrimary"
            onClick={updateTheme}
          >
            {theme ? <LuSun /> : <LuMoon />}
          </button>
        </motion.div>

        <motion.div variants={itemDashboardVariants}>
          <Profile 
            toggleDropdown={() => toggleDropdown(DropdownType.Profile)} 
            isDropdownOpen={isDropdownOpen}
          />
        </motion.div>
      </div>
    </motion.header>
  )
}

export default HeaderDashboard;