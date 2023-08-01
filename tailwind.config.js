/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      colors: {
        shadows: "rgba(0,0,0,0.5)",
        btnred: "hsl(5, 85%, 63%)",
        news_bg: "hsl(240, 100%, 5%)",
        Softorange: "hsl(35, 77%, 62%)",
        Grayishblue: "hsl(233, 8%, 79%)",
      },
    },
  },
  plugins: [],
};
