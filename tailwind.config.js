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
      primary_headers_purple: "#581c87",
      secondary_headers: "#374151",
      terciary_headers: "#4b5563",
      primary_button_color: "#7e22ce",
      hover_button_color: "#581c87",
      white: "#ffffff",
      soft_color_bg: "#d8b4fe",
    },
  },
  plugins: [],
};
