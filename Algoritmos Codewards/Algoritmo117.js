/*Palabras invertidas:
Complete la solución para que invierta todas las palabras dentro de la cadena pasada.

Las palabras están separadas exactamente por un espacio y no hay espacios iniciales ni finales.*/

const reverseWords = (str) => {
    return str.split(' ').reverse().join(' ')
  }

console.log(reverseWords("hello world!"                 ))
console.log(reverseWords("yoda doesn't speak like this" ))
console.log(reverseWords("foobar"                       ))
console.log(reverseWords("kata editor"                  ))
