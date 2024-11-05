/*21.- Ejercicio: Verificar si un número es par y positivo

Planteamiento: Escribe una función que tome como entrada un número y determine si es par y positivo.

Entrada: Un número, por ejemplo: 6

Salida: true si el número es par y positivo, false en caso contrario.*/

const verifyNumber = (number) => (number % 2 === 0 || number >= 0)

console.log(verifyNumber(6))
console.log(verifyNumber(10))
console.log(verifyNumber(-11))