/*Ejercicio 26: Cuerdas invertidas

Complete la solución para que invierta la cadena que se le ha pasado.*/

const solution = (str) => {
    return str.split("").reverse().join("")
}

console.log(solution('world'))
console.log(solution('hello'))
console.log(solution('hello'))

/*Interpretación: utilicé el .split para manipularlos de manera individual, luego el reverse para invertir el orden de los caracteres, .join("") para unir los caracteres invertidos del array de nuevo*/
