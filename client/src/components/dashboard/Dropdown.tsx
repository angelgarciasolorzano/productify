import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IconType } from "react-icons";
import { dropdownVariants } from "../../animation/motionVariants";
import { HiOutlineChevronDown } from "react-icons/hi";

interface SubItems {
  text: string;
  link: string;
  icon: IconType;
};

interface DropdownProps {
  title: string;
  icon: IconType;
  subItems: SubItems[];
  isOpen: boolean;
  toggle: () => void;
  isSidebarOpen: boolean;
};

function Dropdown(props: DropdownProps) {
  const { title, icon: Icon, subItems, isOpen, toggle, isSidebarOpen } = props; 

  return (
    <div>
      <button
        onClick={toggle}
        className={`flex items-center justify-between w-full px-4 py-2 mt-2 text-sm 
          hover:bg-gray-200 rounded-lg duration-200 dark:text-textPrimary 
          dark:hover:bg-bgPrimary-darkPrimary
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

      <motion.ul
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={dropdownVariants}
        className={`overflow-hidden pl-6 mt-2 ${
          !isSidebarOpen && "opacity-0 hidden"
        }`}
      >
        {subItems.map((subItem, index) => (
          <li key={index}>
            <Link
              to={subItem.link}
              className="flex items-center px-4 py-2 mt-2 text-sm hover:bg-gray-200 
                rounded-lg duration-200 dark:text-textPrimary 
                dark:hover:bg-bgPrimary-darkPrimary
              "
            >
              <subItem.icon
                size={18}
                className="flex-shrink-0 mr-2 text-gray-600 dark:text-gray-400"
              />

              <span>{subItem.text}</span>
            </Link>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}

export default Dropdown;