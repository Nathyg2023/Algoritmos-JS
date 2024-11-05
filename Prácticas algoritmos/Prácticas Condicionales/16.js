/*16.- Ejercicio: Verificar si un número es múltiplo de 4 y menor que 100

Planteamiento: Escribe una función que tome como entrada un número y determine si es múltiplo de 4 y menor que 100.

Entrada: Un número, por ejemplo: 96

Salida: true si el número es múltiplo de 4 y menor que 100, false en caso contrario.*/

const verifyNumber = (number) => {
    if(number % 4 === 0 && number < 100){
        return true
    }return false
}

console.log(verifyNumber(20))
console.log(verifyNumber(200))
