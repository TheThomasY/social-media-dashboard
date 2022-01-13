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
        'fb-blue': 'hsl(208, 92%, 53%)',
        'twitter-blue': 'hsl(203, 89%, 53%)',
        'insta-yellow': 'hsl(37, 97%, 70%)',
        'insta-pink': 'hsl(329, 70%, 58%)',
        'yt-red': 'hsl(348, 97%, 39%)',

        // Light scheme
        'card-bg': 'hsl(222, 50%, 96%)',
        'card-bg-hover': 'hsl(232, 33%, 91%)',

        'grey-text': 'hsl(228, 12%, 44%)',
        'dark-text': 'hsl(230, 17%, 14%)',
        'grey-line': '#898c9b',

        // Dark scheme
        'dk-bg': 'hsl(230, 17%, 14%)',
        'dk-pattern-bg': 'hsl(232, 19%, 15%)',
        'dk-card-bg': 'hsl(228, 28%, 20%)',
        'dk-card-bg-hover': 'hsl(228, 26%, 27%)',
        'dk-text': 'hsl(228, 34%, 66%)',
      },
      fontFamily: {
        'Inter': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
