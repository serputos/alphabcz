module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./comps/**/*.{js,ts,jsx,tsx}",],
 
  media: "class", 
  theme: {
    fontFamily: { Teko: ["Teko"] },
    
    extend: {
      backgroundImage: {
      "fotoA": "url('/fotoA.png')",
      
   
    },
   },
  },
  variants: {
    extend: {
      
    },
  },

  plugins: [],
}
