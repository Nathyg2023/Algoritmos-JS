/*Ejercicio 17: 
Operadores de multiplicación, división y comparación

Escribe una función que tome dos números (a y b) como argumentos. Si a es más pequeño que b, divide a entre b. De lo contrario, multiplica ambos números. Devolver el valor resultante
*/

const myFunction = (a, b) => {
    return a < b ? a / b : a * b
}

console.log(myFunction(10, 100))
console.log(myFunction(90, 45))
console.log(myFunction(8, 20))
console.log(myFunction(2, 0.5))

/*Interpretación: utilicé Operador ternario para crear la condición (a<b) con el signo de comparación  menor que, si la condicipon se cumple, es decir, es verdadera retorna la primera expresión (a/b), de lo contrario devuelve a*b */



