/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom' : ['CustomFont1', 'sans-serif'],
        'custom2': ['CustomFont2', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

