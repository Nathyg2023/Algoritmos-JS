/*Ejercicio 40: Barajador de nombres

Escriba una función que devuelva una cadena en la que el nombre se intercambie con el apellido.*/

const nameShuffler = (str) => {
    return str.split(" ").reverse().join(" ")
}

console.log(nameShuffler('john McClane'))
console.log(nameShuffler('Mary jeggins'))
console.log(nameShuffler('tom jerry'))

/*Interpretación: utilizo split para separar los elementos, luego reverse para intercambiar los elementos y por ultimo el join para unirlos de nuevo*/
