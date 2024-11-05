/* Ejercicio 10: Verificar palíndromo
// Enunciado: Escribe una función que verifique si un array de caracteres forma un palíndromo.

const arrayPalindrome = ['a', 'b', 'c', 'b', 'a'];
console.log(isPalindrome(arrayPalindrome)); 
// Salida esperada: true */

const arrayPalindrome = ['a', 'b', 'c', 'b', 'a']

const verificPalindrome = (arr) =>{
    const reversedArray = arr.reverse()
    return arr.join('') === reversedArray.join('')
}

console.log(verificPalindrome(arrayPalindrome))


