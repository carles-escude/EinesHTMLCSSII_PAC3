/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "src/index.html"
    ,"src/blog.html"
    ,"src/participants.html"],
  theme:{
    extend: {
      fontFamily: {
        'principal': ['var(--font-principal)'],
        'secundaria': ['var(--font-secundaria)'],
      },
      colors:{
        'gris':"#333",
        'std-blue': "#27549e",
      }
    },
  },
  plugins: [],
}
