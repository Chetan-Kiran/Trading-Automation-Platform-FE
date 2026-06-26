/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#081225",
        navyLight: "#10203D",
        gold: "#D4AF37",
        goldLight: "#FFD700",
        card: "#13233F",
        textPrimary: "#F8FAFC",
      },
    },
  },
  plugins: [],
};
