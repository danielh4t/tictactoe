/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#262858',
        'secondary': '#323464',
        'accent': '#5c5d81',
      },
      fontFamily: {
        'hand': ['Just Another Hand'],
      }
    },
  },
  plugins: [],
}
