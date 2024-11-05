/*Ejercicio 16: Convierta valores booleanos en cadenas 'Sí' o 'No'.

Completa el método que toma un valor booleano y devuelve una "Yes"cadena para trueo una "No"cadena para false.
*/

const boolToWord = (bool) => {
    return bool ? "Yes" : "No"
}

console.log(boolToWord(true))
console.log(boolToWord(false))

/*Interpretación: Utilicé el operador ternario, compuesto la condición, en caso de que se cumpla esa condición se ejecuta la expresi+on 1, de lo contrario la expresión 2*/