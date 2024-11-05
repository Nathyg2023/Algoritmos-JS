//Algoritmo 1: Multiplicación sencilla

//Este kata consiste en multiplicar un número dado por ocho si es un número par y por nueve en caso contrario.

const simpleMultiplication = (number) => {
    return number % 2 === 0 ? number * 8 : number * 9
}

console.log(simpleMultiplication(2))
console.log(simpleMultiplication(1))
console.log(simpleMultiplication(8))
console.log(simpleMultiplication(4))
console.log(simpleMultiplication(5))

/*Interpretación: Utilicé el operador ternario, compuesto la condición, en caso de que se cumpla esa condición se ejecuta la expresi+on 1, de lo contrario la expresión 2*/