/*Algoritmo 5: Es un palindromo

Escriba una función que verifique si una cadena dada (insensible a mayúsculas y minúsculas) es un palíndromo . Un palíndromo es una palabra, número, frase u otra secuencia de símbolos que se lee igual hacia atrás que hacia adelante, como señora o coche de carreras, la fecha y hora 21/12/33 12:21, y la oración: "Un hombre, un plan, un canal – Panamá".*/

const isPalindrome = (x) => {
    x = x.replace(/\s/g, '').toLowerCase()
    return x === x.split('').reverse().join('')
  }
//return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false

console.log(isPalindrome("a"))
console.log(isPalindrome("aba"))
console.log(isPalindrome("hello"))
console.log(isPalindrome("Bob"))

/*Interpretación: utilicé el método replace (se utiliza para buscar y reemplazar una parte específica de una cadena de texto por otra subcadena) toLowerCase ( se utiliza para convertir una cadena de texto en minúsculas) split ( me divide una cadena de texto en un arreglo de subcadenas) join (une todos los elementos de una matriz) */