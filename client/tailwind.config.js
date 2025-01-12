import scrollbar from "tailwind-scrollbar";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: {
          DEFAULT: '#ffffff',
          50: '#f8fafc',
          100: '#f1f5f9', //! Fondo en modo white
          200: '#d1d5db' //! Border en modo white
        },
        dark: {
          700: '#0F151B', //! Fondo en modo oscuro
          710: '#061118', //! Fondo para el dropdown en modo oscuro
          720: '#101720', //! Fondo para el sidebar, header, pages y footer en modo oscuro
          800: '#374151' //! Border en modo oscuro
        },
      },
      backgroundImage: {
        'text-titulo-gradient': 'radial-gradient(rgb(249, 115, 22), rgb(234, 179, 8), rgb(34, 197, 94))',
        'text-subtitulo-gradient': 'linear-gradient(rgb(249, 115, 22), rgb(253, 224, 71))',
        'text-gradient': 'radial-gradient(rgb(254, 240, 138), rgb(250, 204, 21), rgb(161, 98, 7))'
      },
    },
  },
  darkMode: "class",
  plugins: [
    scrollbar
  ]
}