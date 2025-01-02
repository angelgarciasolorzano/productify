import { fondoPrimary } from "../../assets/";
import { AnimatePresence } from "framer-motion";

import menuItems from "./itemsProfile";
import HeaderDropdown from "./HeaderDropdown";

enum DropdownType {
  Profile = "Profile",
  Notificacion = "Notificacion",
};

interface Props {
  isDropdownOpen: DropdownType | null;
  toggleDropdown: () => void;
};

function Profile({ isDropdownOpen, toggleDropdown }: Props) {
  return (
    <div className="relative">
      <div className="flex items-center space-x-4">
        <div className="flex flex-col items-end">
          <span className="text-sm dark:text-textPrimary">
            Angel Garcia
          </span>

          <span className="text-xs text-gray-500 dark:text-gray-400">
            Administrador
          </span>
        </div>

        <div className="flex-shrink-0 cursor-pointer">
          <img
            src={fondoPrimary}
            alt="User"
            className="h-10 w-10 rounded-full"
            onClick={toggleDropdown}
          />
        </div>
      </div>

      <AnimatePresence>
        {isDropdownOpen === DropdownType.Profile && 
          <HeaderDropdown 
            items={menuItems} 
            tipo={DropdownType.Profile} 
          />
        }
      </AnimatePresence>
    </div>
  );
}

export default Profile;