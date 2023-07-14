/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'gulag-blue': '#024fff',
        'gulag-blue-light': '#e2edff',
        'blue-light': '#c7dcfc',
        'gulag-dark': '#171717',
        'gulag-dark-body': '#202124',
        'gulag-grey' : '#F3F4F6'
      },
      height: {
        'screen-minus-navbar': 'calc(100vh - 64px)',
        'width-minus-panel' : 'calc(100wh-15rem'
     }
    },
  },
  plugins: [],
}

