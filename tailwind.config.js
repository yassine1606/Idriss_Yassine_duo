/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      fontSize: {
        xs: '0.8rem'
      },
      translate: {
        'xx': '240%',
      }
    },
  },
  plugins: [],
};
