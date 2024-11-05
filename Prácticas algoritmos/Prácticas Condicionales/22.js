/*22.- Ejercicio: Verificar si un número es divisible por 3 o 5

Planteamiento: Escribe una función que tome como entrada un número y determine si es divisible por 3 o por 5.

Entrada: Un número, por ejemplo: 15

Salida: true si el número es divisible por 3 o por 5, false en caso contrario.*/

const verifyNumber = (number) => {
    if(number % 3 === 0 || number % 5 === 0){
        return true
    }return false
}

console.log(verifyNumber(9))
console.log(verifyNumber(10))
console.log(verifyNumber(11))

