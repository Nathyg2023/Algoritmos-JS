/*1.-Planteamiento: Verificar si un número es positivo o negativo.

Entrada: Un número entero.
Salida: "Es positivo" si el número es mayor que cero, o "Es negativo" si el número es menor que cero.*/

const number = (num) => {
    if(num > 0){
        return "Es positivo" 
    }return "Es negativo"
}

console.log(number(5))
console.log(number(-10))
