/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0a0a0a",
        glass: "rgba(255, 255, 255, 0.03)",
        "glass-border": "rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [],
}
