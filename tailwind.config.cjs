/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animationDelay: {
        2000: '2000ms'
      },
      animationDuration: {
        2000: '2000ms'
      },
      animation: {
        'spin-slow': 'animate 25s linear infinite'
      },
      variants: {
        animationDelay: ['responsive'],
        animationDuration: ['responsive']
      },
      keyframes: {
        animate: {
          '0%': {
            transform: 'translateY(0) rotate(0deg)',
            opacity: '1',
            rounded: '0'
          },
          '100%': {
            transform: 'translateY(-1000px) rotate(720deg)',
            opacity: '0',
            rounded: '50%'
          }
        }
      }
    }
  },
  plugins: [require('tailwindcss-animation')]
}
