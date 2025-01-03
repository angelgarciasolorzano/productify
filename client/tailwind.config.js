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
        textPrimary: {
          DEFAULT: '#ffffff', 
          dark: '#000000',    
        },
        bgPrimary: {
          DEFAULT: '#f8fafc',
          dark: '#1f2937',
          darkPrimary: '#374151'
        },
        borderPrimary: {
          DEFAULT: '#d1d5db',  
          dark: '#374151',     
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