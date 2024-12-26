import { Link } from "react-router-dom";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { itemsContent, itemsFooter } from "./itemsSidebar";

function Sidebar() {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <aside className={`${open ? "w-56" : "w-20"} flex flex-col bg-white border-r 
      border-borderPrimary duration-300 dark:bg-bgPrimary-dark 
      dark:border-borderPrimary-dark`}
    >
      <div className="flex items-center justify-center m-4">
        <RxHamburgerMenu 
          className="flex-shrink-0 mr-2 cursor-pointer dark:text-textPrimary" 
          size={20} 
          onClick={() => setOpen(!open)} 
        />

        <h3 className={`${!open && "hidden"} text-green-600 font-bold text-xl 
          duration-200 dark:text-green-500`}
        >
          Productify
        </h3>
      </div>

      <hr className="border-t ml-4 mr-4 border-borderPrimary 
        dark:border-borderPrimary-dark" 
      />

      <div className="flex-1 overflow-x-hidden overflow-y-auto px-4 py-2 mt-2">
        {
          itemsContent.map((item, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-sm font-semibold dark:text-textPrimary">
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
                          dark:text-textPrimary dark:hover:bg-bgPrimary-darkPrimary
                        "
                      >
                        <linkItem.icon 
                          size={20} 
                          className="flex-shrink-0 mr-2 text-gray-600 dark:text-gray-400" 
                        />
                        
                        <span className={`whitespace-nowrap ${!open && "opacity-0 hidden"} 
                          opacity-100 duration-200 dark:text-textPrimary`}
                        >
                          {linkItem.text}
                        </span>
                      </Link>
                    </li>
                  ))
                }
              </ul>
              
              {index < itemsContent.length - 1 && (
                <hr className="border-t mt-2 border-borderPrimary 
                  dark:border-borderPrimary-dark" 
                />
              )}
            </div>
          ))
        }
      </div>

      <hr className="border-t ml-4 mr-4 border-borderPrimary 
        dark:border-borderPrimary-dark" 
      />

      <div className="px-4 py-2 mt-2">
        {
          itemsFooter.map((item, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold dark:text-textPrimary">
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
                          dark:text-textPrimary dark:hover:bg-bgPrimary-darkPrimary
                        "
                      >
                        <linkItem.icon 
                          size={20} 
                          className="flex-shrink-0 mr-2 text-gray-600 dark:text-gray-400" 
                        />
                        
                        <span className={`whitespace-nowrap ${!open && "opacity-0 hidden"} 
                          opacity-100 duration-200 dark:text-textPrimary`}
                        >
                          {linkItem.text}
                        </span>
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </div>
    </aside>
  )
}

export default Sidebar;