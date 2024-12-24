import { Link } from "react-router-dom";
import itemsContent from "./itemsSidebar";
import { TfiBarChart } from "react-icons/tfi";
import { useState } from "react";
import { TbLogout2 } from "react-icons/tb";

function Sidebar() {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <aside className={`${open ? "w-56" : "w-20"} flex flex-col bg-white border-r 
      border-borderPrimary duration-300 dark:bg-bgPrimary-dark 
      dark:border-borderPrimary-dark`}
    >
      <div className="flex items-center justify-center m-4">
        <TfiBarChart className="flex-shrink-0 mr-2" size={20} onClick={() => setOpen(!open)} />

        <h3 className={`${!open && "hidden"} text-green-600 font-bold text-xl duration-200`}>
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
              <h3 className="text-sm font-semibold dark:text-textPrimary-dark">
                {item.title}
              </h3>

              <ul>
                {
                  item.items.map((linkItem, index) => (
                    <li key={index}>
                      <Link 
                        to={linkItem.link} 
                        className="flex items-center px-4 py-2 mt-2 text-sm hover:text-white
                          hover:bg-green-600 rounded-lg duration-200
                        "
                      >
                        <linkItem.icon size={20} className="flex-shrink-0 mr-2" />
                        
                        <span className={`${!open && "hidden"} duration-200`}>
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

      <hr className="border-t ml-4 mr-4 border-borderPrimary 
        dark:border-borderPrimary-dark" 
      />

      <div className="flex items-center justify-center m-2">
        <Link 
          to="/" 
          className="flex items-center px-4 py-2 text-sm hover:text-white
            hover:bg-green-600 rounded-lg duration-200
          "
        >
          <TbLogout2 size={20} className="flex-shrink-0 mr-2" />

          <span className={`${!open && "hidden"} origin-left duration-200`}>
            Cerrar sesion
          </span>
        </Link>
      </div>
    </aside>
  )
}

export default Sidebar;