/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {},
    screens: {
      'my-xl': '1150px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
})

