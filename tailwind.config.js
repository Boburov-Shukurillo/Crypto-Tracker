/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkenBlack: "#404258",
        darkenGray: "#474E68",
        
      },
    },
  },
  plugins: [],
};
