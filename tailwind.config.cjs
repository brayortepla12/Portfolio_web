/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animationDelay: {
        2000: "2000ms",
        3000: "3000ms",
        4000: "4000ms",
        5000: "5000ms",
        6000: "6000ms",
        7000: "7000ms",
      },
      animationDuration: {
        2000: "2000ms",
        3000: "3000ms",
        4000: "4000ms",
        5000: "5000ms",
        6000: "6000ms",
        7000: "7000ms",
      },
      animation: {
        "spin-slow": "animate 10s linear infinite",
      },
      variants: {
        animationDelay: ["responsive"],
        animationDuration: ["responsive"],
      },
      keyframes: {
        animate: {
          "0%": {
            transform: "translateY(0) rotate(0deg)",
            opacity: "3",
            rounded: "0",
          },
          "100%": {
            transform: "translateY(-1000px) rotate(220deg)",
            opacity: "0",
            rounded: "50%",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animation")],
}
