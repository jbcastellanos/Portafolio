/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        jaldi:["Jaldi","sans-serif"],
        peace:["Peace Sans","sans-serif"],
        product:["Product Sans", "sans-serif"],
      },
      colors:{
        v1:["#64DEAE"],
        v2:["#D7FFD3"],
        v3:["#1e1e1e"],
        v4:["#D9FFD6"],
      },
      boxShadow:{
        main:"0px 0px 20px #D9FFD6",
        logo: "0px 0px 36px #D9FFD6",
        botones:"0px 0px 10px #D9FFD6"
      },
    },
  },
  plugins: [animations],
}