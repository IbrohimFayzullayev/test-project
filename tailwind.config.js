/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
      },
      colors: {
        dark: "#252A3B",
        primary: "#5254F1",
        secondary: "#7F8A9E",
      },
    },
  },
  plugins: [],
};
