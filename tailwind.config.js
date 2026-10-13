/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terracotta: {
          DEFAULT: '#b34722',
          dark: '#9c3b19',
          light: '#c8562d',
        },
        cream: {
          50: '#FDFBF7',
          100: '#F8F1E9',
          200: '#F2E5D6',
        },
        roast: {
          DEFAULT: '#2a140d',
          dark: '#1b0c07',
          light: '#3d1f14',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Fredoka"', '"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Fraunces"', 'serif'],
        curved: ['"Shrikhand"', 'serif'],
      },
    },
  },
  plugins: [],
}