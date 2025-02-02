import { useState } from "react";

// Definir las secciones del formulario
const sections = ["Datos del Producto", "Datos de Inventario", "Datos Adicionales"] as const;

type Section = typeof sections[number]; // Tipo para las secciones

function Inventario() {
  const [currentSection, setCurrentSection] = useState<Section>("Datos del Producto");

  // Función para avanzar a la siguiente sección
  const goToNextSection = () => {
    const currentIndex = sections.indexOf(currentSection);
    if (currentIndex < sections.length - 1) {
      setCurrentSection(sections[currentIndex + 1]);
    }
  };

  // Función para regresar a la sección anterior
  const goToPreviousSection = () => {
    const currentIndex = sections.indexOf(currentSection);
    if (currentIndex > 0) {
      setCurrentSection(sections[currentIndex - 1]);
    }
  };

  return (
    <div className="p-6 w-full mx-auto bg-white rounded-lg shadow-md">
      {/* Barra de progreso */}
      <div className="flex justify-between mb-6">
        {sections.map((section) => (
          <div
            key={section}
            className={`flex-1 text-center py-2 ${
              currentSection === section
                ? "font-bold text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500"
            }`}
          >
            {section}
          </div>
        ))}
      </div>

      {/* Formulario actual */}
      <div className="mb-6">
        {currentSection === "Datos del Producto" && <ProductForm />}
        {currentSection === "Datos de Inventario" && <InventoryForm />}
        {currentSection === "Datos Adicionales" && <AdditionalForm />}
      </div>

      {/* Botones de navegación */}
      <div className="flex justify-between">
        <button
          onClick={goToPreviousSection}
          disabled={currentSection === sections[0]}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg disabled:opacity-50"
        >
          Anterior
        </button>
        <button
          onClick={goToNextSection}
          disabled={currentSection === sections[sections.length - 1]}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

// Componentes de cada sección del formulario
function ProductForm() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Datos del Producto</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Nombre del Producto</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Ingrese el nombre del producto"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Descripción</label>
          <textarea
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Ingrese la descripción del producto"
          />
        </div>
      </form>
    </div>
  );
}

function InventoryForm() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Datos de Inventario</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Cantidad en Stock</label>
          <input
            type="number"
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Ingrese la cantidad en stock"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Precio Unitario</label>
          <input
            type="number"
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Ingrese el precio unitario"
          />
        </div>
      </form>
    </div>
  );
}

function AdditionalForm() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Datos Adicionales</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Proveedor</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Ingrese el nombre del proveedor"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Categoría</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Ingrese la categoría del producto"
          />
        </div>
      </form>
    </div>
  );
}

export default Inventario;