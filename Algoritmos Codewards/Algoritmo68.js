/*Algoritmo 68: Eliminar el primer y último carácter

Es bastante sencillo. Su objetivo es crear una función que elimine el primer y último carácter de una cadena. Se le da un parámetro, la cadena original. No tienes que preocuparte por cadenas con menos de dos caracteres.*/

const removeChar = (str) => {
    return str.slice(1,-1)
}

console.log(removeChar('country'))
console.log(removeChar('person'))
console.log(removeChar('place'))
