/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'stratos': '#00023D',
        'lightGray': '#4D4D4D',
        'mirage': '#1A181E',
        'bgInput': '#F2F2F2',
        'border': "#D9D9D9",
        'primaryBlue': "#146EB4",
        'lightNavy': "#0E4F82",
        'mercury': "#E6E6E6",
        'granite': "#808080",
        'porcelain': "#F2F2F2",
        'limeGreen': "#17B31B",
        'lemonGrass': "#999999",
        'brightGrey': "#353C53"
      },
      fontFamily: {
        'golona': ['Galano Grotesque', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      },
      boxShadow: {
        'shadow': "0px 2px 6px 0px #1A181E0A"
      }
    },
  },
  plugins: [],
}

