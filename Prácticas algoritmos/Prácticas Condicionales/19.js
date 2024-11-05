/*19.- Ejercicio: Verificar si una cadena empieza con una vocal o termina con una consonante

Planteamiento: Escribe una función que tome como entrada una cadena y determine si empieza con una vocal o termina con una consonante.

Entrada: Una cadena, por ejemplo: "elefante"

Salida: true si la cadena empieza con una vocal o termina con una consonante, false en caso contrario.*/

const verifyLetter = (str) => {
    if(str.startsWith("a" || "e" || "i" || "o" || "u") || str.endsWith("b"||"c"||"d"||"f"||"g"||"h"||"j"||"k"||"l"||"m"||"n"||"ñ"||"p"||"q"||"r"||"s"||"t"||"v"||"w"||"x"||"y"||"z")){
        return true
    }return false
    /* return [..."aeiou"].includes(str[0]) || [..."bcdfghjklmnñpqrstvwxyz"].includes(str[str.length -1])*/
} 

console.log(verifyLetter("amor"))
console.log(verifyLetter("elefante"))
console.log(verifyLetter("huracán"))
console.log(verifyLetter("ramor"))
console.log(verifyLetter("muerte"))