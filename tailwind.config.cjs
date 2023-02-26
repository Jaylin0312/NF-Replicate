/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        'nf-sm': '440px',
      },
      colors: {
        'nf-green1': '#DDF7E9',
        'nf-green2': '#1fc76a',
        'nf-grey1': '#838383',
        'nf-grey2': '#f2f2f2',
      },
      boxShadow: {
        'card': '0px 0px 2px rgb(0 0 0 / 25%)',
        'card-hover': '0px 0px 2px rgb(0 0 0 / 25%), 0 3px 12px rgb(0 0 0 / 10%);'
      },
      padding:{
        'nf5': '5px',
      },
      margin:{
        'nf5': '5px',
      },
    },
  },
  plugins: [],
}
