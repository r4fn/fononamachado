import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#264D3B',
          light: '#3A6B52',
        },
        sage: {
          DEFAULT: '#7FAF97',
          light: '#B5D0C4',
          pale: '#EBF3EF',
        },
        honey: {
          DEFAULT: '#C4834A',
          light: '#E8B48A',
          pale: '#FAF0E6',
        },
        cream: {
          DEFAULT: '#FAFAF7',
          alt: '#F3F0EA',
          /** Fundo hero — tom quente próximo ao #FAF7F2 */
          warm: '#FAF7F2',
        },
        ink: {
          DEFAULT: '#1A201D',
          soft: '#343C38',
          muted: '#6E7870',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
      },
      borderRadius: {
        pill: '100px',
      },
      boxShadow: {
        card: '0 1px 4px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.04)',
        md: '0 4px 16px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)',
        lg: '0 16px 40px rgba(0,0,0,0.10), 0 4px 8px rgba(0,0,0,0.04)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease both',
        /** Rodapé — charme dourado (ouros / folhas) */
        'honey-float': 'honeyFloat 5.5s ease-in-out infinite',
        'honey-drift': 'honeyDrift 7s ease-in-out infinite',
        'honey-sway': 'honeySway 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        honeyFloat: {
          '0%, 100%': {
            transform: 'translateY(0) rotate(-6deg)',
            opacity: '0.28',
          },
          '50%': {
            transform: 'translateY(-10px) rotate(6deg)',
            opacity: '0.52',
          },
        },
        honeyDrift: {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
            opacity: '0.22',
          },
          '33%': {
            transform: 'translate(8px, -6px) scale(1.06)',
            opacity: '0.42',
          },
          '66%': {
            transform: 'translate(-6px, 5px) scale(0.94)',
            opacity: '0.3',
          },
        },
        honeySway: {
          '0%, 100%': { transform: 'rotate(-12deg) translateY(0)', opacity: '0.25' },
          '50%': { transform: 'rotate(10deg) translateY(-6px)', opacity: '0.48' },
        },
      },
    },
  },
  plugins: [],
}

export default config
