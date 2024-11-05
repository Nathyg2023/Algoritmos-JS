/*5 Planteamiento: Determinar si un número es divisible por otro.

Entrada: Dos números enteros.

Salida: "Es divisible" si el primer número es divisible por el segundo, o "No es divisible" si no lo es.*/

const divisibleNumber = (n1, n2) => {
    if(n1 % n2 === 0){
        return "Es divisible"
    }return "No es divisible"

}

console.log(divisibleNumber(10, 5))
console.log(divisibleNumber(5, 3))
