/*Ejercicio 6:Creación de objetos Javascript uno

Escribe una función que tome una cadena como argumento. Cree un objeto que tenga una propiedad con la clave 'clave' y un valor igual a la cadena. Devolver el objeto..*/

const myFunction = (a) => {
    return {key:(a)}
}

console.log(myFunction('a'))
console.log(myFunction('z'))
console.log(myFunction('b'))

/*Interpretación: se crea una propiedad llamada 'key' y un valor igual a a. El objeto se crea usando la sintaxis { key: a }, donde key es el nombre de la propiedad y a es el valor asignado a esa propiedad.*/