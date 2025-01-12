import { Link } from "react-router-dom";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";

import { sidebarContainerVariants, sidebarItemVariants } from "./sidebarVariants";
import { itemsContent, itemsFooter } from "./sidebarItems";
import { DropdownExpandable } from "../dropdown";

function Sidebar() {
  const [open, setOpen] = useState<boolean>(true);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleSidebar = (): void => {
    if (open) { setActiveDropdown(null); }
    setOpen(!open);
  };

  const toggleDropdown = (item: string): void => {
    setActiveDropdown((text) => (text === item ? null : item));
    if (!open) { setOpen(true); }
  };

  return (
    <motion.aside 
      initial="hidden"
      animate="visible"
      variants={sidebarContainerVariants}
      className={`${open ? "w-56" : "w-20"} flex flex-col bg-white border-r 
        border-white-200 duration-300 dark:bg-dark-720
        dark:border-dark-800
      `}
    >
      <motion.div 
        variants={sidebarItemVariants} 
        className="flex items-center justify-center m-4"
      >
        <RxHamburgerMenu 
          className="flex-shrink-0 mr-2 cursor-pointer dark:text-white" 
          size={20} 
          onClick={toggleSidebar} 
        />

        <h3 className={`${!open && "hidden"} text-green-600 font-bold text-xl 
          duration-200 dark:text-green-500`}
        >
          Productify
        </h3>
      </motion.div>

      <hr className="border-t ml-4 mr-4 border-white-200 dark:border-dark-800" />

      <div className="flex-1 overflow-x-hidden overflow-y-auto px-4 py-2 mt-2
        scrollbar-thin dark:scrollbar-thumb-gray-500
        dark:scrollbar-track-dark-700"
      >
        {
          itemsContent.map((item, index) => (
            <motion.div 
              key={index}
              variants={sidebarItemVariants}  
              className="mb-4"
            >
              <h3 className="text-sm font-semibold dark:text-white">
                {item.title}
              </h3>

              <ul>
                {
                  item.items.map((linkItem, index) => (
                    linkItem.subItems ? (
                      <DropdownExpandable
                        key={index} 
                        title={linkItem.text} 
                        icon={linkItem.icon} 
                        subItems={linkItem.subItems}
                        isOpen={activeDropdown === linkItem.text} 
                        toggle={() => toggleDropdown(linkItem.text)}
                        isSidebarOpen={open} 
                      />
                    ) : (
                      <li key={index}>
                        <Link 
                          to={linkItem.link} 
                          className="flex items-center px-4 py-2 mt-2 text-sm
                            hover:bg-gray-200 rounded-lg duration-200
                            dark:hover:bg-dark-800 dark:text-white
                          "
                        >
                          <linkItem.icon 
                            size={20} 
                            className="flex-shrink-0 mr-2 text-gray-600 dark:text-gray-400" 
                          />
                          
                          <span className={`whitespace-nowrap ${!open && "opacity-0 hidden"} 
                            opacity-100 duration-200`}
                          >
                            {linkItem.text}
                          </span>
                        </Link>
                      </li>
                    )
                  ))
                }
              </ul>
              
              {index < itemsContent.length - 1 && (
                <hr className="border-t mt-2 border-white-200 dark:border-dark-800" />
              )}
            </motion.div>
          ))
        }
      </div>

      <hr className="border-t ml-4 mr-4 border-white-200 dark:border-dark-800" />

      <div className="px-4 py-2 mt-2">
        {
          itemsFooter.map((item, index) => (
            <motion.div 
              key={index} 
              variants={sidebarItemVariants}
            >
              <h3 className="text-sm font-semibold dark:text-white">
                {item.title}
              </h3>

              <ul>
                {
                  item.items.map((linkItem, index) => (
                    <li key={index}>
                      <Link 
                        to={linkItem.link} 
                        className="flex items-center px-4 py-2 mt-2 text-sm
                          hover:bg-gray-200 rounded-lg duration-200
                          dark:text-white dark:hover:bg-dark-800
                        "
                      >
                        <linkItem.icon 
                          size={20} 
                          className="flex-shrink-0 mr-2 text-gray-600 dark:text-gray-400" 
                        />
                        
                        <span className={`whitespace-nowrap ${!open && "opacity-0 hidden"} 
                          opacity-100 duration-200`}
                        >
                          {linkItem.text}
                        </span>
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </motion.div>
          ))
        }
      </div>
    </motion.aside>
  )
}

export default Sidebar;