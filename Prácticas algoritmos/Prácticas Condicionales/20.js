/*20.- Ejercicio: Verificar si un número es par o divisible por 3

Planteamiento: Escribe una función que tome como entrada un número y determine si es par o divisible por 3.

Entrada: Un número, por ejemplo: 9

Salida: true si el número es par o divisible por 3, false en caso contrario.*/

const verifyNumber = (number) => {
    if(number % 2 === 0 || number % 3 === 0){
        return true
    }return false
}

console.log(verifyNumber(9))
console.log(verifyNumber(10))
console.log(verifyNumber(11))