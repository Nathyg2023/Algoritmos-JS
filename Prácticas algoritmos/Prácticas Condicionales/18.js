/*18 Ejercicio: Verificar si un número es positivo o negativo, pero no cero

Planteamiento: Escribe una función que tome como entrada un número y determine si es positivo o negativo, pero no cero.

Entrada: Un número, por ejemplo: -5

Salida: true si el número es positivo o negativo, pero no cero, false en caso contrario.*/

const verifyNumber = (number) => {
    if(number !== 0){
        return true
    }return false
}

console.log(verifyNumber(10))
console.log(verifyNumber(0))
console.log(verifyNumber(-10))
