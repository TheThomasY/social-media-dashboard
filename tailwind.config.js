// prettier-ignore
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grey-text': 'hsl(228, 12%, 44%)',
        'dark-text': 'hsl(230, 17%, 14%)',
        'grey-line': '#898c9b',
      },
      fontFamily: {
        'Inter': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
