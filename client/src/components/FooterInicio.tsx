import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa6";
import { MdHome, MdInfo, MdPhone, MdMail } from "react-icons/md";

function FooterInicio() {
  return (
    <footer className="bg-gray-900 text-gray-300 row-span-1">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Mi Empresa</h2>
            <p className="mb-4">Creando soluciones innovadoras desde 2023.</p>

            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <FaFacebookF size={24} />
                <span className="sr-only">Facebook</span>
              </a>

              <a href="#" className="hover:text-white">
                <FaTwitter size={24} />
                <span className="sr-only">Twitter</span>
              </a>

              <a href="#" className="hover:text-white">
                <FaInstagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>

              <a href="#" className="hover:text-white">
                <FaGithub size={24} />
                <span className="sr-only">Github</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>

            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white flex items-center">
                  <MdHome size={18} className="mr-2" />
                  <span>Inicio</span>
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white flex items-center">
                  <MdInfo size={18} className="mr-2" />
                  <span>Acerca de</span>
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white flex items-center">
                  <MdPhone size={18} className="mr-2" />
                  <span>Servicios</span>
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white flex items-center">
                  <MdMail size={18} className="mr-2" />
                  <span>Contacto</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>

            <ul className="space-y-2">
              <li className="flex items-center">
                <MdHome size={18} className="mr-2" />
                <span>123 Calle Principal</span>
              </li>

              <li className="flex items-center">
                <MdInfo size={18} className="mr-2" />
                <span>Ciudad, País 12345</span>
              </li>

              <li className="flex items-center">
                <MdPhone size={18} className="mr-2" />
                <span>Teléfono: (123) 456-7890</span>
              </li>

              <li className="flex items-center">
                <MdMail size={18} className="mr-2" />
                <span>Email: info@miempresa.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; 2023 Mi Empresa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default FooterInicio;