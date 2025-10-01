/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'grey-50': '#F5F5F5',
        'grey-300': '#CFCECE',
        'grey-500': '#636162',
        'grey-700': '#464546',
        'grey-900': '#2A2929',
        'radicalred': '#ff1a53',
      },
    },
  },
  plugins: [],
};
