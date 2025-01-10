/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('./assets/images/webp/hero-bg-layer.webp')",
      },
      backdropBlur: {
        30: '30px',  
      },
      boxShadow: {
        'custom-one': '0px -1px 20px 0px #FFFFFF1A', 
      },
      colors:{
        "light-black":"#1E1E1E"
      },
    },
  },
  plugins: [],
};
