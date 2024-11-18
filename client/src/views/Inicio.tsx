import fondo from "../assets/fondo.jpg"; 
import { AiFillAccountBook } from "react-icons/ai";

function Inicio() {
  return (
    <main className="flex-1 bg-white">
      <section className="flex justify-center items-center">
        <div className="flex items-center justify-center gap-8 p-12 m-10 lg:m-24 max-lg:flex-col 
          max-lg:text-center"
        >
          <div className="w-full max-w-xl">
            <h1 className="text-5xl font-bold mb-2 text-yellow-500">
              Bienvenido a Productify
            </h1>

            <p className="mb-6 mt-6 text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore 
              tempore veniam blanditiis corrupti est esse laborum exercitationem placeat 
              voluptatibus rerum corporis obcaecati, ea velit odio facere maxime 
              soluta quam reprehenderit?
            </p>

            <button className="border bg-emerald-500 text-white font-bold py-2 px-4 rounded-xl 
              hover:bg-emerald-700 duration-300 shadow-md"
            >
              Comenzar
            </button>

            <button className="border bg-transparent border-green-500 font-bold py-2 px-4 rounded-xl 
              ml-4 hover:text-green-700 duration-300 shadow-md"
            >
              Comenzar
            </button>
          </div>

          <div className="w-full max-w-lg flex justify-center items-center">
            <img src={fondo} className="object-cover rounded-3xl shadow-md max-h-96" />
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center">
        <div className="flex items-center justify-center gap-8 p-12 lg:m-24 max-md:flex-col 
          max-md:text-center"
        >
          <div className="w-full max-w-lg flex justify-center max-md:max-w-md">
            <img src={fondo} className="rounded-3xl shadow-xl max-h-96"  />
          </div>

          <div className="w-full max-w-xl">
            <span className="text-sm text-orange-500 font-medium">
              Established Since 2014
            </span>

            <h1 className="text-5xl font-bold mt-2 text-yellow-500">
              Conoce nuestra identidad
            </h1>

            <p className="mb-4 mt-4 text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore 
              tempore veniam blanditiis corrupti est esse laborum exercitationem placeat 
              voluptatibus rerum corporis obcaecati, ea velit odio facere maxime 
              soluta quam reprehenderit?
            </p>
            <p className="mb-4 mt-4 text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore 
              tempore veniam blanditiis corrupti est esse laborum exercitationem placeat 
              voluptatibus rerum corporis obcaecati, ea velit odio facere maxime 
              soluta quam reprehenderit?
            </p>

            <button className="bg-transparent border border-green-500 text-green-950 font-bold 
              py-2 px-4 rounded-xl hover:text-green-700 duration-300 shadow-md"
            >
              Comenzar
            </button>
          </div>
        </div>
      </section>

      <section id="about" className="flex justify-center items-center scroll-mt-20">
        <div className="flex flex-col justify-center items-center gap-8 p-12 lg:m-24">
          <div className="w-full max-w-xl">
          <h1 className="text-5xl text-yellow-500 font-bold">Nuestros Servicios</h1>
          <p className="mt-4 text-lg text-center">
            En Productify, ofrecemos una gama completa de soluciones diseñadas para 
            facilitar la gestión de inventario agrícola. Desde el seguimiento preciso 
            de productos hasta la automatización de procesos, nuestro objetivo es 
            proporcionar herramientas que optimicen la eficiencia y la rentabilidad de tu negocio. 
          </p>
          </div>

          <div className="flex gap-8 text-center max-md:flex-col w-full max-w-xl">
            <div className="">
              <AiFillAccountBook 
                size={70} 
                className="text-green-950 bg-gray-200 rounded-full p-2 mx-auto mb-4" 
              />
              <span className="text-green-950 font-semibold">
                Control de Inventario Preciso
              </span>
              <p className="mt-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores iste ipsa voluptas 
                cupiditate asperiores eius eveniet sed molestias culpa quaerat.
              </p>
            </div>

            <div className="">
              <AiFillAccountBook 
                size={70} 
                className="text-green-950 bg-gray-200 rounded-full p-2 mx-auto mb-4" 
              />
              <span className="text-green-950 font-semibold">
                Gestión de Productos Eficiente
              </span>
              <p className="mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores iste 
                ipsa voluptas cupiditate asperiores eius eveniet sed molestias culpa quaerat.
              </p>
            </div>

            <div className="">
              <AiFillAccountBook 
                size={70} 
                className="text-green-950 bg-gray-200 rounded-full p-2 mx-auto mb-4" 
              />
              <span className="text-green-950 font-semibold">
                Reportes y Análisis de Stock
              </span>
              <p className="mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores iste 
                ipsa voluptas cupiditate asperiores eius eveniet sed molestias culpa quaerat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="h-screen bg-slate-600">asjhsda</section>
    </main>
  )
}

export default Inicio;