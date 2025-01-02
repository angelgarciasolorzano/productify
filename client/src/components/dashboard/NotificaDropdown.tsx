import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { dropdownVariantsProfile } from "../../animation/motionVariants";
import { WiStars } from "react-icons/wi";
import { useMemo } from "react";

interface Notification {
  id: number;
  text: string;
  link: string;
};

interface Props {
  items: Notification[];
};

function NotificaDropdown({ items }: Props) {
  const displayedNotifications = items.slice(0, 5);

  const iconColors = useMemo(() => {
    const colors = [
      "text-red-500",
      "text-blue-500",
      "text-green-500",
      "text-yellow-500",
      "text-purple-500",
      "text-pink-500",
      "text-indigo-500"
    ];

    return items.map(() => {
      return colors[Math.floor(Math.random() * colors.length)];
    });
  }, [items]);

  return (
    <motion.div
      className="absolute right-0 mt-2 w-72 origin-top-right z-50"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={dropdownVariantsProfile}
    >
      <div className="relative">
        <div className="absolute -top-1 right-4 w-2 h-2 bg-white transform rotate-45 z-50 
          border-t border-l border-borderPrimary dark:bg-bgPrimary-dark 
          dark:border-borderPrimary-dark"
        />

        <motion.div className="relative mt-2 bg-white rounded-md shadow-lg border 
          border-borderPrimary overflow-hidden z-10 p-2 dark:bg-bgPrimary-dark 
          dark:border-borderPrimary-dark"
        >
          <div className="relative z-20">
            {displayedNotifications.map((items, index) => (
              <Link
                key={items.id}
                to={items.link}
                className="flex items-center px-4 py-2 text-sm hover:bg-gray-200 
                  rounded-md dark:text-textPrimary dark:hover:bg-bgPrimary-darkPrimary
                "
              >
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center 
                  dark:bg-bgPrimary-darkPrimary dark:text-textPrimary">
                  <WiStars size={24} className={`${iconColors[index]}`} />
                </div>
                <span className="ml-3">{items.text}</span>
              </Link>
            ))}

            {items.length > 5 && (
              <>
                <hr className="border-t m-2 border-borderPrimary 
                  dark:border-borderPrimary-dark" 
                />

                <Link
                  to="/items"
                  className="block text-center rounded-md px-4 py-1 text-sm hover:bg-gray-200
                  dark:hover:bg-bgPrimary-darkPrimary"
                >
                  Mostrar todas las notificaciones
                </Link>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default NotificaDropdown;