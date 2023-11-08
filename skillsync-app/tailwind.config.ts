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
        customGreen: '#399A6D',
        customGrey: 'rgba(217, 217, 217, 0.5)',
        customGrey2: '#697077',
      },
      fontFamily: {
        'neue-haas': ['"Neue Haas Grotesk Display Pro"', 'sans-serif'],
      },
      fontWeight: {
        'medium': '500',
      },
      lineHeight: {
        'normal': 'normal',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
