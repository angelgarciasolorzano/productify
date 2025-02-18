import { fondoPrimary } from "../../assets";

interface Props {
  toggleDropdown: () => void;
};

function Profile({ toggleDropdown }: Props) {
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
    </div>
  );
}

export default Profile;