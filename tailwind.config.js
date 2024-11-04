/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        blog: "3fr 1fr",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
