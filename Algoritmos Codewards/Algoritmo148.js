// Escriba una función que tome una cadena y genere cadenas de 1 y 0 donde las vocales se convierten en 1 y las no vocales se convierten en 0.

// Deben incluirse todos los caracteres que no sean vocales, incluidos los caracteres no alfabéticos (espacios, comas, etc.).

// Ejemplos:
// vowelOne( "abceios" ) // "1001110"
// vowelOne( "aeiou, abc" ) // "1111100100"

const transformStrings = (str) => {
    return str.split("").map((item)=>{
        return item.replace(/[aeiou]/gi, "") ? 0 : 1
    }).join("")  
}

console.log(transformStrings("abceios"))
console.log(transformStrings( "aeiou, abc"))

