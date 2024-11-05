/*Algoritmo 54: Doble carbón
Dada una cadena, debe devolver una cadena en la que cada carácter (distinga entre mayúsculas y minúsculas) se repite una vez.*/

const doubleChar = (str) => {
    return str.split("").map(letter => letter + letter).join("")
}

console.log(doubleChar("abcd"))
console.log(doubleChar("Adidas"))
console.log(doubleChar("illuminati"))
console.log(doubleChar("123456"))
console.log(doubleChar("%^&*("))