/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      animation:{
        "spin-slow": "spin 3s linear infinite",
        "abudzar": "bergerak 1s ease-in-out infinite",
      },
      keyframes: {
        bergerak: {
          '0%-100%' : { transform: "rotate(3deg)"},
          "50%" : {transform : "rotate(-3deg)" },
        }
      },
      colors:{
        mouse: "#b4aafg",
        keyboard: {
          100: "#4F6F52 ",
          200: "#739072 ",
          300: "#43766C ",
          400: "#76453B ",
          500: "#DCF2F1 ",
        }
      },
      spacing: {
        '13': '3.25rem'
      },
      fontFamily:{
        inter:["inter"]
      },
      fontSize:{
        pondok:["7rem"]
      }
    },
  },
  plugins: [],
};
