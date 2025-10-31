/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        calligraphy: ['"Great Vibes"', "cursive"],
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        "main-bg": "#ffffff",
      },
    },
  },
  plugins: [],
};
