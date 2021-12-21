module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xs: ['18px', '31px'],
      s: ['20px', '34px'],
      sm: ['24px', '41px'],
      m: ['36px', '61px'],
      l:['40px','68px'],
      xl:['55px','93px']
    },
    colors:{
      nileblue:'#1A2F54',
      anakiwa:'#9EF9FC',
      parisDaisy:'#FDF177',
      screaminGreen:'#6DF474',
      cinnamon:'#825302',
      yellowOrange:'#FFC142',
      astronaut:'#263776',
      broom:'#FFEA28',
      white:'#ffffff'
    },
    screens: {
      'mobile': '360px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop':'1200px'
    },
     extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: []
}