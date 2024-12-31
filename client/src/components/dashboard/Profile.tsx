import { fondoPrimary } from "../../assets/";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import menuItems from "./itemsProfile";
import ProfileDropdown from "./ProfileDropdown";

function Profile() {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = (): void => {
    setIsDropdownOpen((prev) => !prev);
  };

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
        {isDropdownOpen && <ProfileDropdown items={menuItems} />}
      </AnimatePresence>
    </div>
  );
}

export default Profile;