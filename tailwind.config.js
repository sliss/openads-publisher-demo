/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['Lato', 'sans-serif'],
        'marcellus': ['Marcellus', 'serif'],
      },
    },
  },
  plugins: [],
}
