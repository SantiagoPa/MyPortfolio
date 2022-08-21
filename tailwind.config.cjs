/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fondo':{
          DEFAULT: '#1F1F38',
          'variant': '#2c2c6c',
        },
        'primary':{
          DEFAULT: '#4DB5FF',
          'variant': 'rgba(77,181,255,0.4)',
          'ligth': 'rgba(255,255,255,0.6)',
        },
      }
    },
  },
  plugins: [],
}
