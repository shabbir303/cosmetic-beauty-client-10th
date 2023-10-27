/* eslint-disable no-undef */
// @import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["light"],
  },

    extend: {
      fontFamily:{
        poiretOne:['Poiret One']
      },
    },
  
  plugins: [require("daisyui")],
}

