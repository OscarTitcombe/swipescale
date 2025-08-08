import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B1E3B',
          600: '#242A52',
          700: '#151833',
        },
        accent: {
          DEFAULT: '#FF7A1A',
          600: '#FF6A00',
        },
        neutral: {
          100: '#F5F7FA',
          300: '#D6DBE1',
          700: '#7D8896',
          900: '#0E1116',
        }
      },
      backgroundImage: {
        'brand': 'linear-gradient(135deg, #1B1E3B 0%, #2D2F63 50%, #151833 100%)',
        'accent': 'linear-gradient(135deg, #FF7A1A 0%, #FF6A00 100%)',
      },
      boxShadow: {
        'custom': '0 6px 30px -10px rgba(0,0,0,0.5)',
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config 