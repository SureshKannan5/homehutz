/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      colors: {
        brand: "rgba(255 40 0)",
        gradientGray: "rgb(105 103 103)",
      },
      container: {
        padding: "1rem",
      },
      screens: {
        xl: "1320px",
        lg: "992px",
        xs: "320px",
      },
    },
  },
  plugins: [],
};
