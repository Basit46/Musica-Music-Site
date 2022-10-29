/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#1D2123",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
