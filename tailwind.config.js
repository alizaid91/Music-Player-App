/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        spinSlow: 'spin 7s linear infinite',
      },
      keyframes: {
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      colors: {
        'dark-gray': 'rgb(40, 40, 40)',
      },
    },
  },
  plugins: [],
}

