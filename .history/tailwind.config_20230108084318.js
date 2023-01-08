/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        blue: '#2CBCE9',
        red: '#DC4492',
        yellow: '#FDCC49',
        grey: '#ededed',
        "deepblue": '#0'
      }
    },
  },
  plugins: [],
}
