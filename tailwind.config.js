/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        corDeFundo: "#A03333",
      },
      fontFamily: {
        bungee: "Bungee Outline",
        bebas: "Bebas Neue",
      },
      padding: {
        paddingX: "80px",
      },
      animation: {
        scrollText: "scrollText var(--animation-duration) linear infinite",
      },
    },
    screens: {
      sm: "",
      md: "550px",
      lg: "900px",
      xl: "1280px",
    },
  },
  plugins: [],
};
