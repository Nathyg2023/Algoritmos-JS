/*7 Planteamiento: Determinar si un número es mayor que otro.

Entrada: Dos números enteros.

Salida: "El primer número es mayor" si el primer número es mayor que el segundo, o "El segundo número es mayor" si es menor.*/

const biggerNumber = (num1, num2) => {
    if(num1 > num2){
        return "El primer número es mayor"
    }
}

console.log(biggerNumber(10, 6))