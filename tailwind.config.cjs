/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {},
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '767px',
      md: '1020px',
      lg: '1200px',
      xl: '1700px',
      xxl: '3000px'
    }
  },
  plugins: [],
}
