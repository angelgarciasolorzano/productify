import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React, { useMemo } from "react";

import { IconType } from "react-icons";
import { HiOutlineChevronDown } from "react-icons/hi";
import { FaCircle } from "react-icons/fa";

import { dropdownExpandableVariants } from "./dropdownVariants";

import { generarColor } from "@/helpers";

interface DropdownItems {
  text: string;
  icon?: IconType;
  link: string;
};

type DropdownProps = Required<Pick<DropdownItems, "icon">> & {
  title: string;
  subItems: DropdownItems[];
  isOpen: boolean;
  toggle: () => void;
  isSidebarOpen: boolean;
  isActive: boolean;
  setActive: React.Dispatch<React.SetStateAction<string | null>>;
};

function DropdownExpandable(props: DropdownProps) {
  const { 
    title, icon: Icon, subItems, isOpen, toggle, 
    isSidebarOpen, isActive, setActive 
  } = props; 

  const iconColors = useMemo(() => {
    return subItems.map(() => generarColor());
  }, [subItems]);

  return (
    <>
      <DropdownButton 
        isOpen={isOpen} 
        isSidebarOpen={isSidebarOpen} 
        toggle={toggle} 
        title={title} 
        icon={Icon}
        isActive={isActive}
      />

      <DropdownContent 
        isOpen={isOpen} 
        isSidebarOpen={isSidebarOpen} 
        subItems={subItems} 
        iconColors={iconColors} 
        setActive={setActive}
        title={title}
      />
    </>
  );
};

type DropdownButtonProps = Omit<DropdownProps, "subItems" | "setActive">;

function DropdownButton(props: DropdownButtonProps) {
  const { isOpen, isSidebarOpen, toggle, title, icon: Icon, isActive } = props;

  return (
    <button
      onClick={toggle}
      className={`flex items-center group justify-between w-full px-4 py-2 mt-2 text-sm rounded-lg
        hover:bg-blue-500 hover:bg-opacity-10 hover:text-blue-600 focus:outline-none
        ${isActive 
          ? `bg-blue-500 bg-opacity-10 text-blue-600 dark:text-blue-400`
          : `dark:text-white dark:hover:text-blue-400`
        } 
      `}
    >
      <div className="flex items-center">
        <Icon
          size={20}
          className={`flex-shrink-0 mr-2 group-hover:text-blue-500 
            dark:group-hover:text-blue-400
            ${isActive 
              ? "text-blue-600 dark:text-blue-500" 
              : "text-gray-600 dark:text-gray-400"
            }
          `}
        />

        <span className={`whitespace-nowrap ${!isSidebarOpen && "opacity-0 hidden"} 
          opacity-100 duration-200`}
        >
          {title}
        </span>
      </div>

      <motion.div
        initial={false}
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className={`${!isSidebarOpen && "opacity-0 hidden"} 
          group-hover:text-blue-500 dark:group-hover:text-blue-400
          ${isActive 
            ? "text-blue-600 dark:text-blue-400" 
            : "text-gray-600 dark:text-gray-400"
          }
        `}
      >
        <HiOutlineChevronDown size={20} /> 
      </motion.div>
    </button>
  )
};

type DropdownContentProps = Omit<DropdownProps, "toggle" | "icon" | "isActive"> & {
  iconColors: string[];
};

function DropdownContent(props: DropdownContentProps) {
  const { isOpen, isSidebarOpen, iconColors, subItems, setActive, title } = props;

  return (
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
          onClick={() => setActive(prev => prev === title ? prev : title)}
          className="flex items-center text-gray-600 px-4 py-2 mt-2 text-sm 
            hover:bg-gray-200 rounded-lg dark:text-gray-300 dark:hover:bg-dark-800
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
  )
};

export default DropdownExpandable;