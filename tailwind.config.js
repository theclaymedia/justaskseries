
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        brick: {
          500: '#B83B3B',
          600: '#A52A2A',
          700: '#8B2323',
        },
        charcoal: {
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        navy: {
          800: '#1E3A8A',
          900: '#0F172A',
        },
        mustard: {
          400: '#FACC15',
          500: '#EAB308',
        },
        teal: {
          600: '#0D9488',
          700: '#0F766E',
        },
        paleblue: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
        }
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
      }
    },
  },
  plugins: [],
}
