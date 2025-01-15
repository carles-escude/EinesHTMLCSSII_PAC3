module.exports = {
  plugins: {
    tailwindcss: {},
    "posthtml-include": {
      "root": "./src", // Directori base per a les rutes dels fitxers
      "encoding": "utf-8" // Codificació dels fitxers
    }
  }
}
