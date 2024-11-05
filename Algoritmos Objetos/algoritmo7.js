/*Ejercicio 7:Creando objetos Javascript dos

Escriba una función que tome dos cadenas (a y b) como argumentos. Cree un objeto que tenga una propiedad con la clave 'a' y un valor de 'b'. Devolver el objeto.
.*/

const myFunction = (a, b) => {
    return  { [a]: b };
}

console.log(myFunction('a','b'))
console.log(myFunction('z','x'))
console.log(myFunction('b', 'w'))

/*Interpretación:accedemos a la propiedad de un objeto utilizando [] y luego le asigné el valor de 'b'. */