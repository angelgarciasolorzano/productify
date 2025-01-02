import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";
import { dropdownVariantsProfile } from "../../animation/motionVariants";
import { WiStars } from "react-icons/wi";
import { useMemo } from "react";

import generarColor from "../../helpers/generarColor";

enum DropdownType {
  Profile = "Profile",
  Notificacion = "Notificacion",
};

interface Items {
  text: string;
  icon?: IconType;
  link: string;
};

interface Props {
  tipo: DropdownType;
  items: Items[];
};


function HeaderDropdown({ tipo, items }: Props) {
  const visibleItems = tipo === DropdownType.Notificacion ? items.slice(0, 3) : items;

  const iconColors = useMemo(() => {
    return items.map(() => generarColor());
  }, [items]);

  return (
    <motion.div
      className={`${tipo != DropdownType.Notificacion ? "w-48" : "w-72"} absolute right-0 mt-2 
        origin-top-right z-50
      `}
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
            {visibleItems.map((item, index) => {
              return (
                <Link 
                  key={index} 
                  to={item.link}
                  className="flex items-center px-4 py-2 text-sm hover:bg-gray-200 
                    rounded-md dark:text-textPrimary dark:hover:bg-bgPrimary-darkPrimary
                  "
                >
                  {(tipo != DropdownType.Notificacion && item.icon) ? (
                    <item.icon
                      size={20}
                      className="flex-shrink-0 text-gray-600 dark:text-gray-400" 
                    />                   
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center 
                      justify-center dark:bg-gray-600 dark:text-textPrimary"
                    >
                      <WiStars size={24} className={`${iconColors[index]}`} />
                    </div>
                  )}

                  <span className="ml-3 truncate">{item.text}</span>
                </Link>
              )
            })}

            {tipo === DropdownType.Notificacion && items.length > 5 && (
              <>
                <hr className="border-t m-2 border-borderPrimary 
                  dark:border-borderPrimary-dark" 
                />

                <Link
                  to="/items"
                  className="block text-center rounded-md px-4 py-2 text-sm hover:bg-gray-200
                  dark:hover:bg-bgPrimary-darkPrimary dark:text-textPrimary"
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

export default HeaderDropdown;