module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
        screens:{

        'breakpointmedium':"1280px",
        'breakpointsmall':"520px",
      },
    
      colors:{
        bordercolor:'#4c4c4c',
        whitecolor:'whitesmoke',
        textcolor:"#b1bdb4",
        blackprimary:"#16181b",
        blacksecondary:"#121417",
      },
      borderWidth: {
        '1': '1px',
    },
  },
},
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}


