/*23.- Ejercicio: Verificar si una cadena contiene las letras 'a' y 'b'

Planteamiento: Escribe una función que tome como entrada una cadena y determine si contiene las letras 'a' y 'b'.

Entrada: Una cadena, por ejemplo: "casa blanca"

Salida: true si la cadena contiene las letras 'a' y 'b', false en caso contrario.*/

const verifyLetter = (str) => {
    if(str.includes("a" && "b")){
        return true
    }return false
}

console.log(verifyLetter("casa blanca"))
console.log(verifyLetter("amor"))
