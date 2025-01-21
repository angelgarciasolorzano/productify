import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IconType } from "react-icons";
import { HiOutlineChevronDown } from "react-icons/hi";
import { FaCircle } from "react-icons/fa";
import { useMemo } from "react";

import { dropdownExpandableVariants } from "./dropdownVariants";
import { DropdownItems } from "./dropdownType";

import generarColor from "../../helpers/generarColor";

interface DropdownProps {
  title: string;
  icon: IconType;
  subItems: DropdownItems[];
  isOpen: boolean;
  toggle: () => void;
  isSidebarOpen: boolean;
};

function DropdownExpandable(props: DropdownProps) {
  const { title, icon: Icon, subItems, isOpen, toggle, isSidebarOpen } = props; 

  const iconColors = useMemo(() => {
    return subItems.map(() => generarColor());
  }, [subItems]);

  return (
    <>
      <button
        onClick={toggle}
        className={`flex items-center justify-between w-full px-4 py-2 mt-2 text-sm 
          hover:bg-gray-200 rounded-lg duration-200 dark:text-white dark:hover:bg-dark-800
        `}
      >
        <div className="flex items-center">
          <Icon
            size={20}
            className="flex-shrink-0 mr-2 text-gray-600 dark:text-gray-400"
          />

          <span
            className={`whitespace-nowrap ${
              !isSidebarOpen && "opacity-0 hidden"
            } opacity-100 duration-200`}
          >
            {title}
          </span>
        </div>

        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`${
            !isSidebarOpen && "opacity-0 hidden"
          } text-gray-600 dark:text-gray-400`}
        >
          <HiOutlineChevronDown size={20} /> 
        </motion.div>
      </button>

      <motion.li
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={dropdownExpandableVariants}
        className={`overflow-hidden pl-2 mt-2 ${
          !isSidebarOpen && "opacity-0 hidden"
        }`}
      >
        {subItems.map((subItem, index) => (
          <Link
            key={index}
            to={subItem.link}
            className="flex items-center text-gray-800 px-4 py-2 mt-2 text-sm hover:bg-gray-200 
              rounded-lg duration-200 dark:text-gray-200 dark:hover:bg-dark-800
            "
          >
            {subItem.icon ? (
              <subItem.icon
                size={18}
                className="flex-shrink-0 mr-2 text-gray-600 dark:text-gray-400"
              />
            ) : (
              <FaCircle 
                size={7}
                className={`${iconColors[index]} flex-shrink-0`} 
              />
            )}

            <span className="ml-2 truncate">{subItem.text}</span>
          </Link>
        ))}
      </motion.li>
    </>
  );
}

export default DropdownExpandable;