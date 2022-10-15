/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        about: "url('./asset/about.jpg')",
        building: "url('./asset/building.jpg')",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        abumuda: "#C4C4c4",
        abutua: "#777777",
      },
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
};
