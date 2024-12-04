/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
      colors: {
        primary: "#48ac90"
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}