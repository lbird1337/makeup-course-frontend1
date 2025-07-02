/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      brand: {
        50:  '#FAF5EF', // page background
        900: '#443F3C', // default text
      },
      accent: '#9C615A', // links, CTAs, highlights
      line:   '#D6D0C6', // dividers & borders
      transparent: 'transparent',
      current: 'currentColor',
    },
    extend: {
      // Добавляем кастомную тень
      boxShadow: {
        'brutal': '4px 4px 0px #000000',
      },
      // Определяем семейства шрифтов (будет рассмотрено в следующем разделе)
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'serif'],
        body: ['"PT Serif"', 'serif'],
        hero: ['"Playfair Display"', 'serif'],
        subtitle: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}