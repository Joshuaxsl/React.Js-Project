/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontSize:{
      'sm': '0.8rem',
      'base': '1rem',
      'xl': '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      'med':'5rem',
      'big':'6rem',
    },
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors:{
        'blueViolet':'hsl(261deg 80% 48%)',
        'blackSolid':'hsl(132deg, 0%, 0%)',
        'whiteSolid':'rgb(252,251,254)',
        'goldSolid':'rgb(245, 201, 5)',
        'bgColor':'hsl(217deg, 6%, 13%)',
        'gray-light': '#d3dce6',
        'blacklight':'rgb(41, 40, 39)',
        'Skill-bg':'rgb(23, 23, 22)',
      }
    },
  },
  plugins: [],
}
