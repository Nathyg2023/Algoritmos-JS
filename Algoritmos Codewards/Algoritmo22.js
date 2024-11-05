/*Ejercicio 22: Quitar el primer y último carácter

Es bastante sencillo. Su objetivo es crear una función que elimine el primer y el último carácter de una cadena. Se le da un parámetro, la cadena original. No tiene que preocuparse por cadenas con menos de dos caracteres.*/

const removeChar = (str) => {
    return str.slice(1,-1)
}

console.log(removeChar('eloquent'))
console.log(removeChar('country'))
console.log(removeChar('person'))

/*Interpretación: utilicé el método slice para eliminar el primer y último carácter de la cadena, utilizando 1 para el inicio  y -1 para hacer refencia al último caracter*/