/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./layout/*.html'],
  theme: {
    extend: {
      fontSize:{
        "extra-large":["48px"]
      },
      fontFamily:{
        "poppins":["Poppins"]
      }
    },
  },
  plugins: [require('@tailwindcss/typography'),
            require('tailwind-scrollbar'),
 ],
}

