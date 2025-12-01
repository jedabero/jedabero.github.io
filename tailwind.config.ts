import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        base: {
          bg: '#0b1021',
          surface: '#10172b',
          text: '#e4e7f5',
          muted: '#9aa0c2'
        },
        accent: {
          mint: '#5fe3c0',
          blue: '#7aa2ff'
        }
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif']
      },
      backgroundImage: {
        'page-gradient': 'radial-gradient(circle at 20% 20%, rgba(95, 227, 192, 0.08), transparent 35%), radial-gradient(circle at 80% 20%, rgba(122, 162, 255, 0.08), transparent 35%), radial-gradient(circle at 50% 80%, rgba(95, 227, 192, 0.06), transparent 35%)'
      },
      borderRadius: {
        xl: '1rem'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};

export default config;
