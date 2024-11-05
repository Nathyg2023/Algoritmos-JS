/*14.- Ejercicio: Verificar si un número está fuera del rango 10-20

Planteamiento: Escribe una función que tome como entrada un número y determine si está fuera del rango 10-20 (excluyendo los límites).

Entrada: Un número, por ejemplo: 8

Salida: true si el número está fuera del rango 10-20, false en caso contrario.*/

const verifyNumber = (number) => {
    if(number >= 10 && number <=20){
        return true
    }return false
}

console.log(verifyNumber(8))
console.log(verifyNumber(12))
