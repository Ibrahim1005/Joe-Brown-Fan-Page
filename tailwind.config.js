/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto', 'serif'],
    },
    colors:{
      primary:{
        DEFAULT: "#F2C40B",
        200: "#846C0E",
        300: "#0A0800",
      },
      secondary: {
        DEFAULT: "#EAE5D4",
         200:"#FDFCF7",
         300:"#474640",
      },
    },
  },
  plugins: [],
}
}
