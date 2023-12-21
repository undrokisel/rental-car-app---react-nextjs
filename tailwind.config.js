/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: 'jit',
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      xxsm: '0px',
      xsm: '350px',
      sm: '640px',
      md: '768px',
      pl: '720px',
      lg: '1024px',
      xl: '1300px',
    },
    extend: {
      colors: {
        primary: '#101828',
        secondary: '#667085',
        accent: {
          DEFAULT: '#ED1D24',
          hover: '#dd242a',
        },
        body: '#fff',
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
