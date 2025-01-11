/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('./assets/images/webp/hero-bg-layer.webp')",
        "white-bg": "url('./assets/images/png/white-bg.png')",
      },
      backdropBlur: {
        30: '30px',  
        16: '16px',  
      },
      boxShadow: {
        'custom-one': '0px -1px 20px 0px #FFFFFF1A', 
        'custom-two': '0px 4px 15px 0px #FFFFFF1A',
      },
      colors:{
        "light-black":"#1E1E1E",
        "light-brown":"#4D4D4D",
        "sky-blue":"#39B1FF",
      },
    },
  },
  plugins: [],
};
