/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkenBlack: "#141827",
        darkenGray: "#282A3A",
      },
      width: {
        500: "500px",
      },
      height: {
        500: "500px",
      },
    },
  },
  plugins: [],
};
