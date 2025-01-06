import { MdOutlineInventory, MdManageHistory } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";

import { 
  fondoPrimary, fondoSecondary, 
  perfilPrimary, perfilSecondary 
} from "../assets";

import "aos/dist/aos.css";

function InicioPage() {
  return (
    <main className="flex-1 duration-300 bg-white-50 dark:bg-dark-700">
      <section 
        id="inicio" 
        className="flex justify-center items-center overflow-hidden"
      >
        <div className="flex items-center justify-center gap-8 p-12 m-10 max-lg:flex-col 
          max-lg:text-center"
        >
          <div className="w-full max-w-xl" data-aos="fade-right">
            <h1 className="text-5xl font-bold mb-2 text-yellow-500 dark:bg-text-titulo-gradient
              dark:bg-clip-text dark:text-transparent"
            >
              Bienvenido a Productify
            </h1>

            <p className="mb-6 mt-6 text-lg dark:text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore 
              tempore veniam blanditiis corrupti est esse laborum exercitationem placeat 
              voluptatibus rerum corporis obcaecati, ea velit odio facere maxime 
              soluta quam reprehenderit?
            </p>

            <button className="bg-emerald-500 text-white font-bold py-2 px-4 rounded-xl 
              hover:bg-emerald-700 transition-all duration-300 shadow-md 
              dark:hover:bg-green-500 dark:hover:shadow-sm dark:hover:shadow-green-500"
            >
              Comenzar
            </button>

            <button className="border bg-transparent border-green-500 font-bold py-2 px-4 
              rounded-xl ml-4 hover:text-green-700 duration-300 shadow-md dark:text-white
              dark:hover:shadow-sm dark:hover:shadow-green-500 dark:hover:text-green-400"
            >
              Comenzar
            </button>
          </div>

          <div 
            className="w-full max-w-lg flex justify-center items-center" 
            data-aos="fade-left"
          >
            <img 
              src={fondoPrimary} 
              className="object-cover rounded-3xl shadow-md h-auto aspect-[16/12]" 
            />
          </div>
        </div>
      </section>

      <section id="identidad" className="flex justify-center items-center pt-14 overflow-hidden">
        <div className="flex items-center justify-center gap-8 p-12 max-lg:flex-col 
          max-lg:text-center"
        >
          <div 
            className="w-full max-w-lg flex justify-center max-md:max-w-md" 
            data-aos="fade-up"
          >
            <img 
              src={fondoSecondary} 
              className="object-cover rounded-3xl shadow-x h-auto aspect-[16/12]" 
            />
          </div>

          <div className="w-full max-w-xl" data-aos="fade-down">
            <span className="text-sm text-orange-500 font-medium dark:bg-text-gradient
              dark:bg-clip-text dark:text-transparent"
            >
              Established Since 2014
            </span>

            <h1 className="text-5xl font-bold mt-2 text-yellow-500 dark:bg-text-titulo-gradient
              dark:bg-clip-text dark:text-transparent"
            >
              Conoce nuestra identidad
            </h1>

            <p className="mb-4 mt-4 text-lg dark:text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore 
              tempore veniam blanditiis corrupti est esse laborum exercitationem placeat 
              voluptatibus rerum corporis obcaecati, ea velit odio facere maxime 
              soluta quam reprehenderit?
            </p>

            <p className="mb-4 mt-4 text-lg dark:text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore 
              tempore veniam blanditiis corrupti est esse laborum exercitationem placeat 
              voluptatibus rerum corporis obcaecati, ea velit odio facere maxime 
              soluta quam reprehenderit?
            </p>

            <button className="bg-transparent border border-green-500 text-green-950 font-bold 
              py-2 px-4 rounded-xl hover:text-green-700 duration-300 shadow-md dark:text-white
              dark:hover:shadow-sm dark:hover:shadow-green-500 dark:hover:text-green-400"
            >
              Comenzar
            </button>
          </div>
        </div>
      </section>

      <section id="servicios" className="flex justify-center items-center pt-14 overflow-hidden">
        <div className="flex flex-col items-center p-8 gap-4">
          <div className="w-full max-w-4xl" data-aos="flip-up">
            <h1 className="text-5xl text-center text-yellow-500 font-bold 
              dark:bg-text-titulo-gradient dark:bg-clip-text dark:text-transparent"
            >
              Nuestros Servicios
            </h1>

            <p className="mt-4 text-lg text-center dark:text-white">
              En Productify, ofrecemos una gama completa de soluciones diseñadas para 
              facilitar la gestión de inventario agrícola. Desde el seguimiento preciso 
              de productos hasta la automatización de procesos, nuestro objetivo es 
              proporcionar herramientas que optimicen la 
              eficiencia y la rentabilidad de tu negocio. 
            </p>
          </div>

          <div className="flex gap-8 text-center max-md:flex-col max-md:max-w-md 
            mt-10 w-full max-w-4xl"
          >
            <div data-aos="zoom-out-right">
              <MdOutlineInventory 
                size={70} 
                className="text-green-950 bg-gray-200 rounded-full p-2 mx-auto mb-4" 
              />

              <span className="text-green-600 font-semibold dark:bg-text-subtitulo-gradient
                dark:bg-clip-text dark:text-transparent"
              >
                Control de Inventario Preciso
              </span>

              <p className="mt-4 dark:text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Maiores iste ipsa voluptas 
                cupiditate asperiores eius eveniet sed molestias culpa quaerat.
              </p>
            </div>

            <div data-aos="zoom-in">
              <MdManageHistory 
                size={70} 
                className="text-green-950 bg-gray-200 rounded-full p-2 mx-auto mb-4" 
              />

              <span className="text-green-600 font-semibold dark:bg-text-subtitulo-gradient
                dark:bg-clip-text dark:text-transparent"
              >
                Gestión de Productos Eficiente
              </span>

              <p className="mt-4 dark:text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores iste 
                ipsa voluptas cupiditate asperiores eius eveniet sed 
                molestias culpa quaerat.
              </p>
            </div>

            <div data-aos="zoom-out-left">
              <TbReportSearch 
                size={70} 
                className="text-green-950 bg-gray-200 rounded-full p-2 mx-auto mb-4" 
              />

              <span className="text-green-600 font-semibold dark:bg-text-subtitulo-gradient
                dark:bg-clip-text dark:text-transparent"
              >
                Reportes y Análisis de Stock
              </span>

              <p className="mt-4 dark:text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores iste 
                ipsa voluptas cupiditate asperiores eius eveniet sed molestias culpa 
                quaerat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="comunidad" className="flex justify-center items-center pt-14 overflow-hidden">
        <div className="flex flex-col items-center p-8 gap-14 mb-8">
          <div className="w-full max-w-4xl" data-aos="zoom-out">
            <h1 className="text-5xl text-center text-yellow-500 font-bold 
              dark:bg-text-titulo-gradient dark:bg-clip-text dark:text-transparent"
            >
              Comunidad
            </h1>

            <p className="mt-4 text-lg text-center dark:text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore 
              tempore veniam blanditiis corrupti est esse laborum exercitationem placeat 
              voluptatibus rerum corporis obcaecati, ea velit odio facere maxime 
              soluta quam reprehenderit? 
            </p>
          </div>

          <div className="flex max-md:flex-col items-center gap-4">
            <div 
              data-aos="zoom-out-right"
              className="bg-white shadow-md rounded-2xl p-6 max-w-lg w-full mx-4
                dark:bg-dark-800
              " 
            >
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src={perfilPrimary} 
                    className="w-20 h-20 rounded-full object-cover aspect-[1/1]" 
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <h2 className="text-2xl font-bold text-green-600 dark:bg-text-gradient
                    dark:bg-clip-text dark:text-transparent"
                  >
                    Angel Nie Garcia Solorzano
                  </h2>
                  
                  <p className="text-sm text-gray-600 dark:text-white">
                    Programador full stack
                  </p>
                </div>
              </div>

              <hr className="my-4 border-t border-gray-300" />

              <p className="mt-4 text-sm dark:text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur 
                explicabo ut dolores illum tempore repellat, necessitatibus sequi 
                debitis ducimus aut natus minima soluta. Tenetur consequuntur amet 
                labore facere similique consequatur.
              </p>
            </div>

            <div 
              data-aos="zoom-out-left"
              className="bg-white shadow-md rounded-2xl p-6 max-w-lg w-full mx-4
                dark:bg-dark-800
              " 
            >
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src={perfilSecondary} 
                    className="w-20 h-20 rounded-full object-cover aspect-[1/1]" 
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <h2 className="text-2xl font-bold text-green-600 dark:bg-text-gradient
                    dark:bg-clip-text dark:text-transparent">
                    Angel Nie Garcia Solorzano
                  </h2>

                  <p className="text-sm text-gray-600 dark:text-white">
                    Programador full stack
                  </p>
                </div>
              </div>

              <hr className="my-4 border-t border-gray-300" />

              <p className="mt-4 text-sm dark:text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur 
                explicabo ut dolores illum tempore repellat, necessitatibus sequi 
                debitis ducimus aut natus minima soluta. Tenetur consequuntur amet 
                labore facere similique consequatur.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default InicioPage;