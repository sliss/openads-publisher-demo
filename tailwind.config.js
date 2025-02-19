/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  safelist: [
    'bg-green-50',
    'bg-yellow-50',
    'bg-orange-50',
    'bg-red-50',
    'text-green-700',
    'text-yellow-700',
    'text-orange-700',
    'text-red-700',
    'bg-[#d67238]/5',
    'text-[#d67238]',
    {
      pattern: /bg-(green|yellow|orange|red)-(50|700)/,
      variants: ['hover', 'focus'],
    },
  ],
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
