/*2.-Planteamiento: Verificar si un número es par o impar.

Entrada: Un número entero.
Salida: "Es par" si el número es divisible por 2, o "Es impar" si no lo es.*/

const evenNumber = (n) => {
    if(n % 2 === 0){
        return "Es par"
    }return "Es impar"
}

console.log(evenNumber(10))
console.log(evenNumber(5))
