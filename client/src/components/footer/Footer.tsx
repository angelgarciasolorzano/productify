import { useLocation } from "react-router-dom";
import { links, socialLinks, contactoInfo, linksLogin } from "./footerItems";
import { Link } from "react-scroll";
import { createContainerVariantes, createItemVariantes } from "../../animation/motionVariants";
import { motion } from "framer-motion";

function Footer() {
  const location = useLocation();

  if (location.pathname === "/login") {
    return (
      <footer className="py-6 bg-slate-100 duration-300 dark:bg-bgPrimary-dark">
        <motion.div
          className="container mx-auto flex justify-center items-center space-x-2"
          variants={createContainerVariantes({ staggerChildren: 0.2})}
          initial="hidden"
          animate="visible"
        >
          {
            linksLogin.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="p-2 rounded-full hover:bg-bgPrimary-darkPrimary 
                dark:text-white"
                variants={createItemVariantes("abajo")}
              >
                <item.icon size={24} />
              </motion.a>
            ))
          }
        </motion.div>
      </footer>
    )
  };

  return (
    <footer className="bg-gray-900 text-gray-300 row-span-1">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">
              Mi Empresa
            </h2>

            <p className="mb-4">
              Creando soluciones innovadoras desde 2023.
            </p>

            <div className="flex space-x-4">
              {
                socialLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="hover:text-white"
                  >
                    <item.icon size={24} />
                    <span className="sr-only">{item.text}</span>
                  </a>
                ))
              }
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              Enlaces rápidos
            </h3>

            <ul className="space-y-2">
              {
                links.map((item, index) => (
                  <li key={index}>
                    <Link 
                      to={item.id}
                      smooth={true}
                      duration={100} 
                      className="hover:text-white hover:cursor-pointer flex items-center"
                    >
                      <item.icon size={18} className="mr-2" />
                      <span>{item.text}</span>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              Contacto
            </h3>

            <ul className="space-y-2">
              {
                contactoInfo.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <item.icon size={18} className="mr-2" />
                    <span>{item.text}</span>
                  </li>
                ))
              }
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

export default Footer;