/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    fontSize: {
      sm: ["0.8rem", "1rem"],
      base: ["1rem", "1.25rem"],
      xl: ["1.25rem", "1.563rem"],
      "2xl": ["1.563rem", "1.953rem"],
      "3xl": ["1.953rem", "2.441rem"],
      "4xl": ["2.441rem", "3.052rem"],
      "5xl": ["3.052rem", "3.815rem"],
    },
    extend: {}
  },
  darkMode: "class",
  plugins: [
  ]
}
