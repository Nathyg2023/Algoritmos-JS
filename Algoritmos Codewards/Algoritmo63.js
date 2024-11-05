/*Algoritmo 63: Par o impar

Cree una función que tome un número entero como argumento y devuelva números "Even"pares o "Odd"impares.*/

const evenOrOdd = (number) => {
    if(number % 2 === 0){
        return "Even"
    }return "Odd"
}

//return number % 2 ? "Odd" : "Even"

console.log(evenOrOdd(2))
console.log(evenOrOdd(7))
console.log(evenOrOdd(-42))
console.log(evenOrOdd(-7))
