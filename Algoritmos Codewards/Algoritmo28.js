/*Ejercicio 28: ¡Encuentra el puesto!

Cuando se le proporcione una letra, devuelva su posición en el alfabeto.
Entrada :: "a"
Ouput :: "Posición del alfabeto: 1"*/

const position = (letter) => {
    return `Position of alphabet: ${letter.charCodeAt() - 96}`;
}

console.log(position("a"))
console.log(position("z"))
console.log(position("e"))

/*Interpretación: se realiza en base a los valores Unicode utilizando el charCodeAt() que me devuelve el valor unicode del caracter en la posición específica, luego se resta 96 del valor Unicode, donde 'a' tiene un valor de 97. Restar 96 ajusta este valor para que 'a' se considere en la posición 1*/ 