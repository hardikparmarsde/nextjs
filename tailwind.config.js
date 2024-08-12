/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      green: "#86C06A",
      darkGreen: "#489f1e",
      lightSteel: "#E4E6E9",      
      white: "#fff",
      midNightBlue: "#273143",
      slateBlue: "#384252",
      coralRed: "#FF5A4E",
      deepBlue: "#333D4E", 
      lightSlateaGray:"#C7CBCF",
      gainsboro:"#E4E8EE",
      deepRed: "#D33F49",
      transparent:"transparent",
      orange: "#FF9800",
      brightCyan: "#17C4DB",
      coralPink: "#EC8686",
      lavenderBlue: "#C89AFF",
      DodgerBlue: "#3D9EED",
      Khaki: "#C2B89D",
      lightPink: "#FF89B4",
      lightNavyBlue: "#1B2531",
      darkBlue: "#24305B",
      slateGray: "#AAB6C1"
    },
    extend: {
      screens: {
        'xs': '400px',

        'sm': '576px',
      
        'md': '768px',
  
        'lg': '950px',
  
        'xl': '1200px',

        '2xl': '1480px',  

        '3xl': '1680px',
      }
    },
    fontFamily: {
      'barlow': ['Barlow', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],   
      'inter':['Inter','sans-serif']   
    },
  },
  plugins: [],
}
