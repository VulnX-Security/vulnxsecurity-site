/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#0A0A0A",
        text: "#E5E5E5",
        accent: "#ad0000"
      }
    },
    fontFamily: {
      sans: ["Inter", "system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"]
    }
  },
  plugins: [],
};

