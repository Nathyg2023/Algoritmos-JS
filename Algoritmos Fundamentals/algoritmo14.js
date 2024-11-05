/*Ejercicio 14: Comprobar si un número es par

Escribe una función que tome un número como argumento. Si el número es par, devuelve verdadero. De lo contrario, devuelve falso*/

const myFunction = (a) => {
    return a % 2 === 0
}

console.log(myFunction(10))
console.log(myFunction(-4))
console.log(myFunction(5))

/*Interpretación: se utiliza el operador de módulo y asignación para comprombar mediante la igualdad estricta que de 0 si se cumple se verifica con true que es correcto de lo contrario false */
