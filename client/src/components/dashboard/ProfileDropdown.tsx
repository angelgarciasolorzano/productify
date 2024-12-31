import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";
import { dropdownVariantsProfile } from "../../animation/motionVariants";

interface Items {
  text: string;
  icon: IconType;
  link: string;
};

interface Props {
  items: Items[]
};

function ProfileDropdown({ items }: Props) {
  return (
    <motion.div
      className="absolute right-0 mt-2 w-48 origin-top-right z-50"
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
            {items.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 
                  rounded-md dark:text-textPrimary dark:hover:bg-bgPrimary-darkPrimary
                "
              >
                <item.icon 
                  size={20}
                  className="flex-shrink-0 text-gray-600 dark:text-gray-400" 
                />

                <span className="ml-3">{item.text}</span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ProfileDropdown;