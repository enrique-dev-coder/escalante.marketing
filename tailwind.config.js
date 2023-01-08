/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary_headers_purple: "#eab308",
      secondary_headers: "#374151",
      terciary_headers: "#4b5563",
      primary_button_color: "#fbbf24",
      hover_button_color: "#ca8a04",
      white: "#ffffff",
      soft_color_bg: "#fde68a",
      green_1: "#059669",
    },
  },
  plugins: [],
};
