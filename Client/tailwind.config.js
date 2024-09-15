/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sakkal:['"Sakkal Majalla"', 'sans-serif'],
        Dosis:['"Dosis"', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow:{
        'custom-heavy': 'rgba(17, 17, 26, 0.1) 0px 0px 15px, rgba(17, 17, 26, 0.1) 0px 0px 15px, rgba(17, 17, 26, 0.1) 0px 0px 15px',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #D5F5FE 0%, #C4F5F3 100%), radial-gradient(56.76% 56.76% at 64.32% 72.43%, #FFFFFF 0%, #EFF7D3 100%)',
        'custom-complex-gradient': `
          linear-gradient(180deg, #D5F5FE 0%, #C4F5F3 100%),
          radial-gradient(56.76% 56.76% at 64.32% 72.43%, #FFFFFF 0%, #D3DDF7 100%)
        `,
      },
    },
  },
  plugins: [],
}