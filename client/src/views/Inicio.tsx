import { MdOutlineInventory, MdManageHistory } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";

import { 
  fondoPrimary, fondoSecondary, 
  perfilPrimary, perfilSecondary 
} from "../assets";

import "aos/dist/aos.css";

function Inicio() {
  return (
    <main className="flex-1 duration-300 bg-white-50 dark:bg-dark-700">
      <section 
        id="inicio"
        className="overflow-hidden max-w-screen-xl m-auto pt-5 pb-5 pl-4 pr-4
        dark:bg-dark-700"
      >
        <div className="grid grid-cols-2 items-center p-6 gap-8 md:p-10 lg:m-5 max-lg:grid-cols-1">
          <div className="max-lg:text-center" data-aos="fade-right">
            <h1 className="text-5xl font-bold mb-2 text-yellow-500 dark:bg-text-titulo-gradient
              dark:bg-clip-text dark:text-transparent"
            >
              Bienvenido a Productify
            </h1>

            <p className="mb-6 mt-6 text-lg text-gray-800 dark:text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore 
              tempore veniam blanditiis corrupti est esse laborum exercitationem placeat 
              voluptatibus rerum corporis obcaecati, ea velit odio facere maxime 
              soluta quam reprehenderit?
            </p>

            <button className="min-w-[30%] bg-green-500 text-white font-bold py-2 px-4 rounded-full 
              hover:bg-emerald-700 transition-all duration-300 shadow-md 
              dark:hover:bg-emerald-500 dark:hover:shadow-sm dark:hover:shadow-emerald-500"
            >
              Comenzar
            </button>

            <button className="min-w-[30%] border bg-transparent border-green-500 font-bold py-2 px-4 
              rounded-full ml-4 hover:text-green-700 duration-300 shadow-sm dark:text-white
              dark:hover:shadow-green-400 dark:hover:text-green-400"
            >
              Comenzar
            </button>
          </div>

          <div data-aos="fade-left">
            <img 
              src={fondoPrimary} 
              className="flex w-full m-auto max-w-screen-sm object-cover rounded-3xl shadow-md" 
            />
          </div>
        </div>
      </section>

      <section 
        id="identidad" 
        className="overflow-hidden max-w-screen-xl m-auto pt-5 pb-5 pl-4 pr-4"
      >
        <div className="grid grid-cols-2 items-center p-6 gap-8 md:p-12 lg:m-5 max-lg:grid-cols-1">
          <div data-aos="fade-up">
            <img 
              src={fondoSecondary} 
              className="flex w-full m-auto max-w-screen-sm object-cover rounded-3xl shadow-md" 
            />
          </div>

          <div className="max-lg:text-center" data-aos="fade-down">
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

            <p className="mb-4 mt-4 text-lg text-gray-800 dark:text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore 
              tempore veniam blanditiis corrupti est esse laborum exercitationem placeat 
              voluptatibus rerum corporis obcaecati, ea velit odio facere maxime 
              soluta quam reprehenderit?
            </p>

            <p className="mb-4 mt-4 text-lg text-gray-800 dark:text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore 
              tempore veniam blanditiis corrupti est esse laborum exercitationem placeat 
              voluptatibus rerum corporis obcaecati, ea velit odio facere maxime 
              soluta quam reprehenderit?
            </p>

            <button className="min-w-[30%] bg-yellow-400 text-white font-bold border border-transparent
              py-2 px-4 rounded-full hover:bg-yellow-500 duration-300 shadow-md
              dark:hover:bg-transparent dark:hover:border-yellow-400 dark:hover:text-yellow-400
              dark:hover:shadow-sm dark:hover:shadow-yellow-500"
            >
              Comenzar
            </button>
          </div>
        </div>
      </section>

      <section 
        id="servicios" 
        className="overflow-hidden max-w-screen-xl m-auto pt-5 pb-5 pl-4 pr-4 dark:bg-dark-700"
      >
        <div className="flex flex-col items-center p-8 gap-4 lg:m-5">
          <div className="w-full max-w-4xl" data-aos="flip-up">
            <h1 className="text-5xl text-center text-yellow-500 font-bold 
              dark:bg-text-titulo-gradient dark:bg-clip-text dark:text-transparent"
            >
              Nuestros Servicios
            </h1>

            <p className="mt-4 text-lg text-center text-gray-800 dark:text-white">
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

              <p className="mt-4 text-gray-800 dark:text-white">
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

              <p className="mt-4 text-gray-800 dark:text-white">
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

              <p className="mt-4 text-gray-800 dark:text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores iste 
                ipsa voluptas cupiditate asperiores eius eveniet sed molestias culpa 
                quaerat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section 
        id="comunidad" 
        className="overflow-hidden max-w-screen-xl m-auto pt-5 pb-7 pl-4 pr-4 dark:bg-dark-700"
      >
        <div className="flex flex-col items-center p-8 gap-14 mb-8 lg:m-5">
          <div className="w-full max-w-4xl" data-aos="zoom-out">
            <h1 className="text-5xl text-center text-yellow-500 font-bold 
              dark:bg-text-titulo-gradient dark:bg-clip-text dark:text-transparent"
            >
              Comunidad
            </h1>

            <p className="mt-4 text-lg text-center text-gray-800 dark:text-white">
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
                dark:bg-dark-720
              " 
            >
              <div className="flex flex-col gap-6 sm:flex-row max-sm:items-center">
                <div className="flex-shrink-0">
                  <img 
                    src={perfilPrimary} 
                    className="w-20 h-20 rounded-full object-cover aspect-[1/1]" 
                  />
                </div>

                <div className="flex flex-col justify-center max-sm:text-center">
                  <h2 className="text-2xl font-bold text-green-600 dark:bg-text-gradient
                    dark:bg-clip-text dark:text-transparent"
                  >
                    Angel Nie Garcia Solorzano
                  </h2>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Programador full stack
                  </p>
                </div>
              </div>

              <hr className="my-4 border-t border-gray-300 dark:border-dark-800" />

              <p className="mt-4 text-sm text-gray-800 dark:text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur 
                explicabo ut dolores illum tempore repellat, necessitatibus sequi 
                debitis ducimus aut natus minima soluta. Tenetur consequuntur amet 
                labore facere similique consequatur.
              </p>
            </div>

            <div 
              data-aos="zoom-out-left"
              className="bg-white shadow-md rounded-2xl p-6 max-w-lg w-full mx-4 
                dark:bg-dark-720
              " 
            >
              <div className="flex flex-col sm:flex-row gap-6 max-sm:items-center">
                <div className="flex-shrink-0">
                  <img 
                    src={perfilSecondary} 
                    className="w-20 h-20 rounded-full object-cover aspect-[1/1]" 
                  />
                </div>

                <div className="flex flex-col justify-center max-sm:text-center">
                  <h2 className="text-2xl font-bold text-green-600 dark:bg-text-gradient
                    dark:bg-clip-text dark:text-transparent">
                    Angel Nie Garcia Solorzano
                  </h2>

                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Programador full stack
                  </p>
                </div>
              </div>

              <hr className="my-4 border-t border-gray-300 dark:border-dark-800" />

              <p className="mt-4 text-sm text-gray-800 dark:text-white">
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

export default Inicio;