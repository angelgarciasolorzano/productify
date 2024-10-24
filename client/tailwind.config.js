import plugin from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkInputBg: '#374151',
      }
    },
  },
  darkMode: "class",
  plugins: [
    plugin(function ({ addVarient }) {
      addVarient('autofill', '&:-webkit-autofill');
    })
  ],
}

