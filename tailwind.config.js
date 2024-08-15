/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif',],
        singleDay: ['Single Day', 'cursive'],
        dmsans: ['DM Sans', 'sans-serif'],
      },

      colors: {
        customGreen: '#72DB73',
        customGray: '#7C7C7C',
        customBlack: '#292929',
        customOrange: '#FF5209',
        customPurple: '#D7A4FF',
        customDarkGreen: '#148A08',
        customSkyblue: '#84C2FF',
        customBrown: '#902500',
        customBlue: '#7358FF',
        customPink: '#FF4ADE',
        customRed: '#E61E32',
        warRed: '#FF0000',

      },

    },
  },
  plugins: [],
}