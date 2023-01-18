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
      black: "#000000",
      primary_bg: "#252848",
      primary_headers_purple: "#eab308",
      secondary_headers: "#374151",
      terciary_headers: "#4b5563",
      primary_button_color: "#EFD14B",
      hover_button_color: "#ca8a04",
      white: "#ffffff",
      soft_color_bg: "#fde68a",
      green_1: "#059669",
      soft_green: "#dcfce7",
      bright_yellow: "#F8F02C",
    },
  },
  plugins: [],
};
