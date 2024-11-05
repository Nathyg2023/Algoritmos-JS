/*17.- Ejercicio: Verificar si una cadena contiene al menos una letra mayúscula y una letra minúscula
Planteamiento: Escribe una función que tome como entrada una cadena y determine si contiene al menos una letra mayúscula y una letra minúscula.

Entrada: Una cadena, por ejemplo: "HolaMundo"

Salida: true si la cadena contiene al menos una letra mayúscula y una letra minúscula, false en caso contrario.*/

const verifyLetter = (str) => (/[A-Z]/.test(str) && /[a-z]/.test(str))

console.log(verifyLetter("Hola"))
console.log(verifyLetter("hola"))
console.log(verifyLetter("123"))
console.log(checkLetter("HolaMundo"))
