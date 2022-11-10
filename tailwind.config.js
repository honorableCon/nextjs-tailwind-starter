/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#38bdf8",
        light: "rgba(255, 255, 255, 0.1)",
        semilight: "rgba(255, 255, 255, 0.5)",
      },
      backgroundImage: {
        gradient: "linear-gradient(113.49deg, #38bdf8 -30.3%, #000000 34.46%)",
      },
      borderRadius: {
        large: "10px",
      },
      fontSize: {
        h2: "40px",
      },
    },
  },
  plugins: [],
};
