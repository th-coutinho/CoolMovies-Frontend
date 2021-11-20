// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '340px',
      ...defaultTheme.screens,
    },
    extend: {
      animation: {
        'fade-in' : 'fade-in .4s linear forwards'
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
       }
    },
    fontFamily: {
      'title': ['Raleway'],
      'description': ['Open Sans'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}