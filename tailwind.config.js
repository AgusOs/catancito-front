/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      colors:{
        primary:{
          DEFAULT:'#37405B',
          100:'#535B73'
        },
        secondary:{
          DEFAULT:'#da954b',
          100:'#ac2c07'
        },
        grey:{
          DEFAULT:'#626262',
          100:'#F0EDED'
        },
        green:'#84DB92'
      }
    },
  },
  plugins: [],
}
