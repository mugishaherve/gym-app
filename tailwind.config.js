/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#FFE1E0",
        "primary-300": "#FFA6A3",
        "primary-500": "#FF6B66",
        "secondary-400": "#FFCD58",
        "secondary-500": "#FFC132",
        
      },
      backgroundImage: (theme) => ({
        "gradient-yellowRed": "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./src/assets/HomePage-removebg-preview.png')",

      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      },

      content: {
        otherimage: "url('./src/assets/background.jpg')",
        third: "url('./src/assets/background.jpg')",
        forth: "url('./src/assets/background.jpg')",
        fifth: "url('./src/assets/background.jpg')",
        sixth: "url('./src/assets/primer.jpg')",
      }
      
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    }
  },
  plugins: [],
}

