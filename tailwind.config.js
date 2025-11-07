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
      },
      fontFamily: {
        // Use Roboto for body / UI, Aboreto for display / headings
        sans: ["Roboto", "system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
        display: ["Aboreto", "serif"]
      }
    },
    // keep fontFamily root for legacy usage
    fontFamily: {
      sans: ["Roboto", "system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"]
    }
  },
  plugins: [],
};

