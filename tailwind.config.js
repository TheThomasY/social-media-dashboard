// prettier-ignore
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Generic
        'up-green': 'hsl(163, 72%, 41%)',
        'down-red': 'hsl(356, 69%, 56%)',

        // Light scheme
        'grey-text': 'hsl(228, 12%, 44%)',
        'dark-text': 'hsl(230, 17%, 14%)',
        'grey-line': '#898c9b',

        // Dark scheme
        'dk-bg': 'hsl(230, 17%, 14%)',
        'dk-pattern-bg': 'hsl(232, 19%, 15%)',
        'dk-card-bg': 'hsl(228, 28%, 20%)',
        'dk-text': 'hsl(228, 34%, 66%)',
      },
      fontFamily: {
        'Inter': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
