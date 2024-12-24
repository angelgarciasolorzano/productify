import { TbLogout2 } from "react-icons/tb";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex items-center justify-center text-sm gap-2 m-4">
      <Link to="/" className="flex items-center justify-center text-sm">
        <TbLogout2 className="mr-2" />
        Cerrar sesion
      </Link>
    </div>
  )
}

export default Footer;