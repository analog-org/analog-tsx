/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    '../../node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    '../../node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './public/**/*.html'
  ],
  theme: {
    fontFamily: {
      'header': ['Helvetica', 'Arial', 'sans-serif'],
    }
  },
  plugins: [require('flowbite/plugin')],
}
