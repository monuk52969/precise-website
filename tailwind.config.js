/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', 'sans-serif'],
        bebas: ['"Bebas Neue"', 'cursive'], // or 'sans-serif'
      },
    },
  },
  plugins: [],
}
