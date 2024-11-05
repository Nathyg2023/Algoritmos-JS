/*Algortimo 61: Desafío All Star Code #3

Este Kata pretende ser un pequeño desafío para mis alumnos.

Cree una función que tome un argumento de cadena y devuelva esa misma cadena sin todas las vocales (las vocales son "a", "e", "i", "o", "u").

Ejemplo ( Entrada --> Salida )*/

const removeVowels = (str) => {
    return str.replace(/[aeiou]/g, '')
 }

 console.log(removeVowels("drake"))
 console.log(removeVowels("aeiou"))     