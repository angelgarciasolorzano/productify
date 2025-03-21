import { useState, useRef, ChangeEvent } from "react";
import { IoCameraOutline } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";

import { twMerge } from "tailwind-merge";
import { 
  UseFormSetValue, FieldValues, Path, PathValue, FieldError, UseFormGetValues 
} from "react-hook-form";

import { Button } from "@mantine/core";

interface InputFileProps<T extends FieldValues> {
  className?: string;
  setValue: UseFormSetValue<T>;
  getValue: UseFormGetValues<T>;
  name: Path<T>;
  error?: FieldError;
};

function FileInput<T extends FieldValues>(props: InputFileProps<T>) {
  const { className, setValue, getValue, name, error } = props;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const imagen = getValue(name) as File | undefined;

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files;

    if (file && file.length > 0) {
      const imagen = file[0];
      const imageUrl = URL.createObjectURL(imagen);

      if (selectedImage) URL.revokeObjectURL(selectedImage);

      setSelectedImage(imageUrl);
      setValue(name, imagen as PathValue<T, Path<T>>, {
        shouldValidate: true
      });
    };
  };

  const handleRemoveImage = (): void => {
    if (fileInputRef.current) fileInputRef.current.value = "";

    setSelectedImage(null);
    setValue(name, undefined as PathValue<T, Path<T>>, {
      shouldValidate: true
    });
  };

  const handleImageClick = (): void => fileInputRef.current?.click();

  return (
    <div className={twMerge(`flex items-center gap-2 flex-col`, className)}>
      <div>
        <span className="text-sm font-semibold text-center text-gray-800 block
          dark:text-gray-200"
        >
          Imagen del producto
        </span>

        {!imagen?.name && 
          <p className="text-xs text-center text-gray-500 dark:text-gray-400">
            Agregar imagen que no sobrepase el tamaño máximo de 5 MB
          </p>
        }
      </div>

      <div
        onClick={handleImageClick}
        className="relative w-24 h-24 rounded-full overflow-hidden cursor-pointer 
          bg-gray-200 flex items-center justify-center flex-shrink-0
        "
      >
        {selectedImage ? (
          <img
            src={selectedImage || "/placeholder.svg"}
            alt="Selected"
            className="flex w-full h-full object-cover"
          />
        ) : (
          <IoCameraOutline className="w-12 h-12 text-gray-400" />
        )}

        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
          justify-center opacity-0 hover:opacity-100 transition-opacity duration-200"
        >
          <IoCameraOutline className="w-8 h-8 text-white" />
        </div>
      </div>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        ref={fileInputRef}
        className="hidden"
        aria-label="Seleccionar imagen"
      />

      <div className="flex flex-col items-center mt-2 space-y-4">
        <div>
          {imagen?.name ? (
            <p className="text-sm text-gray-600 text-center dark:text-gray-400">
              {imagen.name}
            </p>
          ) : (
            <p className="text-xs text-center text-gray-500 dark:text-gray-400">
              Solamente se permiten imagenes .jpg, .png y .jpeg
            </p>
          )}

          {error && 
            <p className="text-sm text-red-600 text-center dark:text-red-500">
              {error.message}
            </p>
          }
        </div>

        {selectedImage && (
          <Button 
            radius="md" 
            classNames={{root: "bg-red-600 hover:bg-red-700"}}
            leftSection={<MdOutlineDelete size={20} />} 
            onClick={handleRemoveImage}
          >
            Eliminar Imagen
          </Button>
        )}
      </div>
    </div>
  );
}

export default FileInput;