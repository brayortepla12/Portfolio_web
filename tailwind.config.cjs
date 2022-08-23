/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animationDelay: {
        200: '2000ms',
        300: '3000ms',
        400: '4000ms',
        500: '5000ms',
        600: '6000ms',
        700: '7000ms',
        800: '8000ms',
        900: '9000ms',
        1000: '10000ms'
      },
      animationDuration: {
        1000: '10000ms',
        2000: '20000ms',
        3000: '30000ms',
        4000: '40000ms',
        5000: '50000ms',
        6000: '60000ms',
        7000: '70000ms',
        8000: '80000ms',
        9000: '90000ms',
        10000: '100000ms'
      },
      animation: {
        'spin-slow': 'animate 0s linear infinite'
      },
      variants: {
        animationDelay: ['responsive'],
        animationDuration: ['responsive']
      },
      keyframes: {
        animate: {
          '0%': {
            transform: 'translateY(0) rotate(0deg)',
            opacity: '3',
            rounded: '0'
          },
          '100%': {
            transform: 'translateY(-1000px) rotate(220deg)',
            opacity: '0',
            rounded: '50%'
          }
        }
      }
    }
  },
  plugins: [require('tailwindcss-animation')]
}
