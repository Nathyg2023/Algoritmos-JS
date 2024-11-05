/*15.- Ejercicio: Verificar si una cadena es vacía o tiene más de 10 caracteres

Planteamiento: Escribe una función que tome como entrada una cadena y determine si es vacía o tiene más de 10 caracteres.

Entrada: Una cadena, por ejemplo: "Hola, mundo!"

Salida: true si la cadena es vacía o tiene más de 10 caracteres, false en caso contrario*/

const verifyString = (str) => {
    if(str === "" || str.length > 10){
        return true
    }return false
}

console.log(verifyString("Hola, mundo!"))
console.log(verifyString(""))
console.log(verifyString("Amor"))