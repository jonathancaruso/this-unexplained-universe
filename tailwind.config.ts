import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        void: {
          50: '#f0f0f8',
          100: '#d8d8e8',
          200: '#b0b0d0',
          300: '#8080a8',
          400: '#606088',
          500: '#404068',
          600: '#2a2a4a',
          700: '#1a1a30',
          800: '#101020',
          900: '#0a0a14',
          950: '#050508',
        },
        nebula: {
          300: '#c4a8e0',
          400: '#a07cc8',
          500: '#7c50b0',
          600: '#5a3880',
        },
        signal: {
          300: '#80e8d0',
          400: '#50d0b0',
          500: '#30b898',
          600: '#209878',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
