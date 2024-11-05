/*8 Planteamiento: Verificar si una letra ingresada es una vocal o una consonante.

Entrada: Un caracter (letra).

Salida: "Es una vocal" si la letra es "a", "e", "i", "o" o "u", o "Es una consonante" si no lo es.*/

const checkLetter = (letter) => {
    if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u"){
        return "Es una vocal"
    } return "Es una consonante"
}

console.log(checkLetter("b"))
console.log(checkLetter("a"))
