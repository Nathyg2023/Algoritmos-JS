/*Ejercicio 41: Adición de cadena ES6

Es fácil unir dos hilos así string1 + string2.

Otra forma de obtener el resultado deseado sería constring1.concat(string2)

ES6 ha introducido otra forma de unir cadenas. Su tarea es averiguar qué es esto y escribir una función que agregue dos cadenas, debe haber un espacio entre las dos cadenas.

+, .concat()& .join()no se permitirán en este ejercicio. ¡También eliminé algunos otros métodos que se pueden usar para hacer trampa!

Si uno de los argumentos es un número, su código debe convertirlo en una cadena..*/

const joinStrings = (string1, string2) => {
    return `${string1} ${string2}`
}

console.log(joinStrings('string1', 'string2'))
console.log(joinStrings('testing', 'testing'))
console.log(joinStrings(134, 234))

/*Interpretación: Se utiliza un template string para unir las dos cadenas*/
