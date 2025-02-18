import { RxHamburgerMenu } from "react-icons/rx";

import { Link } from "react-router-dom";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Text } from "@mantine/core";

import { sidebarContainerVariants, sidebarItemVariants } from "./sidebarVariants";
import { itemsContent, itemsFooter } from "./sidebarItems";

import { DropdownExpandable } from "@/components/dropdown";
import { Separator } from "@/components";
import { themeStore } from "@/store";

function Sidebar() {
  const [open, setOpen] = useState<boolean>(true);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isActive, setIsActive] = useState<string | null>(null);
  const theme = themeStore((state) => state.theme) ? "dark" : "light";

  const toggleSidebar = (): void => {
    if (open) setActiveDropdown(null);
    setOpen(!open);
  };

  const toggleDropdown = (item: string): void => {
    setActiveDropdown((text) => (text === item ? null : item));
    setIsActive(item);
    if (!open) setOpen(true); 
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
      <SidebarHeader theme={theme} open={open} toggleSidebar={toggleSidebar} />

      <Separator className="ml-4 mr-4 my-0" />

      <SidebarBody 
        open={open}
        activeDropdown={activeDropdown} 
        isActive={isActive}
        toggleDropdown={toggleDropdown} 
        setActive={setIsActive}
      />
      
      <Separator className="ml-4 mr-4 my-0" />

      <SidebarFooter open={open} />
    </motion.aside>
  )
};

interface SidebarHeaderProps {
  open: boolean;
  toggleSidebar: () => void;
  theme: string;
};

function SidebarHeader({ open, toggleSidebar, theme }: SidebarHeaderProps) {
  return (
    <motion.div 
      variants={sidebarItemVariants} 
      className="flex items-center justify-center m-4"
    >
      <RxHamburgerMenu 
        className="flex-shrink-0 mr-2 cursor-pointer dark:text-white" 
        size={20} 
        onClick={toggleSidebar} 
      />

      <Text  
        className={`${!open && "hidden"} font-bold text-xl`}
        variant="gradient"
        gradient={{ 
          from: theme === "dark" ? 'rgba(3, 255, 49, 1)' : '#16a34a', 
          to: theme === "dark" ? 'rgba(136, 252, 131, 1)' : '#16a34a', 
          deg: 90 
        }}
      >
        Productify
      </Text>
    </motion.div>
  )
};

type SidebarBodyProps = Pick<SidebarHeaderProps, "open"> & {
  activeDropdown: string | null;
  isActive: string | null;
  toggleDropdown: (item: string) => void;
  setActive: React.Dispatch<React.SetStateAction<string | null>>;
};

function SidebarBody(props: SidebarBodyProps) {
  const { open, activeDropdown, isActive, toggleDropdown, setActive } = props;
 
  return (
    <div className="flex-1 overflow-x-hidden overflow-y-auto px-4 py-2 mt-2
      scrollbar-thin dark:scrollbar-thumb-gray-500
      dark:scrollbar-track-dark-720"
    >
      {
        itemsContent.map((item, index) => (
          <motion.div key={index} variants={sidebarItemVariants} className="mb-4">
            <h3 className="text-sm font-semibold dark:text-white">
              {item.title}
            </h3>

            <ul>
              {item.items.map((linkItem, index) => (
                linkItem.subItems ? (
                  <DropdownExpandable
                    key={index} 
                    title={linkItem.text} 
                    icon={linkItem.icon} 
                    subItems={linkItem.subItems}
                    isOpen={activeDropdown === linkItem.text} 
                    toggle={() => toggleDropdown(linkItem.text)}
                    isSidebarOpen={open} 
                    isActive={isActive === linkItem.text}
                    setActive={setActive}
                  />
                ) : (
                  <li key={index}>
                    <Link 
                      to={linkItem.link} 
                      onClick={() => setActive(
                        prev => prev === linkItem.text ? prev : linkItem.text
                      )}
                      className={`flex items-center px-4 py-2 mt-2 text-sm rounded-lg
                        hover:bg-blue-500 hover:bg-opacity-10
                        hover:text-blue-600 focus:outline-none group
                        ${isActive === linkItem.text
                          ? `bg-blue-500 bg-opacity-10 text-blue-600
                            dark:text-blue-400`
                          : `dark:text-white dark:hover:text-blue-400`
                        }
                      `}
                    >
                      <linkItem.icon 
                        size={20} 
                        className={`flex-shrink-0 mr-2 group-hover:text-blue-500
                          dark:group-hover:text-blue-400
                          ${isActive === linkItem.text 
                            ? `text-blue-600 dark:text-blue-400`
                            : `text-gray-600 dark:text-gray-400`
                          }
                        `}
                      />
                      
                      <span className={`whitespace-nowrap ${!open && "opacity-0 hidden"} 
                        opacity-100 duration-200`}
                      >
                        {linkItem.text}
                      </span>
                    </Link>
                  </li>
                )
              ))}
            </ul>

            {index < itemsContent.length - 1 && <Separator className="my-0 mt-2" />}
          </motion.div>
        ))
      }
    </div>
  )
};

type SidebarFooterProps = Pick<SidebarHeaderProps, "open">;

function SidebarFooter({ open }: SidebarFooterProps) {
  return (
    <div className="px-4 py-2 mt-2">
      {itemsFooter.map((item, index) => (
        <motion.div key={index} variants={sidebarItemVariants}>
          <h3 className="text-sm font-semibold dark:text-white">
            {item.title}
          </h3>

          <ul>
            {item.items.map((linkItem, index) => (
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
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  )
};

export default Sidebar;