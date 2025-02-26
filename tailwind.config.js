/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  safelist: [
    // Dynamic risk levels and states
    {
      pattern: /bg-(green|yellow|orange|red)-50/,
      variants: ['hover'],
    },
    {
      pattern: /text-(green|yellow|orange|red)-700/,
    },
    // Dynamic opacity variations
    {
      pattern: /bg-.*\/[0-9]+/,
    },
    // Brand colors with opacity
    {
      pattern: /bg-\[#d24e35\]\/[0-9]+/,
      pattern: /text-\[#d24e35\]/,
    },
    // Text colors for light mode
    'text-gray-400',
    'text-gray-500',
    'text-gray-600',
    'text-gray-700',
    'text-gray-900',
    'bg-gray-50',
    'bg-gray-100',
    'bg-white',
    'border-gray-100',
    'border-gray-200',
    'shadow-sm',
    'focus:ring-1',
    'focus:ring-[#d24e35]/50',
    '[filter:invert(1)]',
    // Add cut corner variations
    'cut-corners',
    'cut-corners-sm',
    'cut-corners-lg',
    // Add bracket/reticle variations
    'reticle',
    'reticle-sm',
    'reticle-lg',
    // Add states for dynamic elements
    'hover:cut-corners',
    'hover:reticle',
    'active:cut-corners',
    'active:reticle',
    // Dark mode text colors
    'text-gray-100',
    'text-gray-200',
    'text-gray-300',
    'text-gray-400',
    'bg-gray-800',
    'bg-gray-900',
    'border-gray-700',
    'bg-gray-800/95',
    // Add new color combinations for risk levels
    {
      pattern: /bg-(green|yellow|orange|red)-900/,
      variants: ['hover'],
    },
    {
      pattern: /text-(green|yellow|orange|red)-100/,
    },
    'bg-black/20',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#d24e35',
          secondary: '#b33d2a',
        }
      },
      fontFamily: {
        'custom': ['Lato', 'sans-serif'],
        'marcellus': ['Marcellus', 'serif'],
      },
    },
  },
  plugins: [
    function({ addComponents, theme }) {
      addComponents({
        '.cut-corners': {
          clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
        },
        '.cut-corners-sm': {
          clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
        },
        '.cut-corners-lg': {
          clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))',
        },
        '.tag-reticle': {
          position: 'relative',
          padding: '0.375rem 0.75rem',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            width: '6px',
            height: '6px',
            borderTop: '1.5px solid #d24e35',
            borderRight: '1.5px solid #d24e35'
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '6px',
            height: '6px',
            borderBottom: '1.5px solid #d24e35',
            borderLeft: '1.5px solid #d24e35'
          }
        }
      })
    }
  ],
}
