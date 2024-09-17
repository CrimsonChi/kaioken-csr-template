import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "rgb(220, 20, 60)",
        "primary-light": "rgb(228 50 86)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: 0,
            transform: "translate3d(0, 10%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "punch-in": {
          "0%": {
            transform: "scale(8)",
          },
          "100%": {
            transform: "scale(1)",
            transform: "translate3d(0, 0, 0)",
          },
        },
      },

      animation: {
        "fade-in-up": "fade-in-up .5s ease-in-out",
        "punch-in": "punch-in .1s",
      },
    },
  },
  plugins: [],
}
